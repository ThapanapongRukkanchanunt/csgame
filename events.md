---
title: "Events"
layout: single
permalink: /events/
---

{% assign now = "now" | date: "%s" %}

## Upcoming
{% assign upcoming = site.events | sort: "start" %}
{% assign has_upcoming = false %}

<ul>
{% for e in upcoming %}
  {% assign es = e.start | date: "%s" %}
  {% if es >= now %}
    {% assign has_upcoming = true %}
    <li>
      <strong><a href="{{ e.url | relative_url }}">{{ e.title }}</a></strong><br/>
      <span style="color:var(--muted)">
        {{ e.start | date: "%a, %b %d, %Y · %H:%M" }}
        {% if e.end %}–{{ e.end | date: "%H:%M" }}{% endif %}
        {% if e.timezone %} ({{ e.timezone }}){% endif %}
      </span><br/>
      {% if e.location %}{{ e.location }}{% endif %}
      {% if e.mode %} · {{ e.mode }}{% endif %}
      {% if e.registration_url %}<br/><a href="{{ e.registration_url }}">Registration</a>{% endif %}
    </li>
    <hr style="border:0;border-top:1px solid var(--line);margin:12px 0"/>
  {% endif %}
{% endfor %}
</ul>

{% unless has_upcoming %}
<p>No upcoming events posted yet. Check back soon.</p>
{% endunless %}

## Past
{% assign past = site.events | sort: "start" | reverse %}
<ul>
{% for e in past %}
  {% assign es = e.start | date: "%s" %}
  {% if es < now %}
    <li>
      <a href="{{ e.url | relative_url }}">{{ e.title }}</a>
      <span style="color:var(--muted)"> — {{ e.start | date: "%b %d, %Y" }}</span>
    </li>
  {% endif %}
{% endfor %}
</ul>
