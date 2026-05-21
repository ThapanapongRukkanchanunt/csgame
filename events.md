---
title: "Events"
subtitle: "Upcoming and past SIG sessions."
layout: page
---

{% assign now = "now" | date: "%s" %}

{% comment %}
  Extract all unique tags from events
{% endcomment %}
{% assign all_tags = "" | split: "" %}
{% for e in site.events %}
  {% if e.tags %}
    {% for tag in e.tags %}
      {% assign all_tags = all_tags | push: tag %}
    {% endfor %}
  {% endif %}
{% endfor %}
{% assign unique_tags = all_tags | uniq | sort %}

<div class="filter-container">
    <div class="search-box">
        <input type="text" id="eventSearch" placeholder="Search events by title, topic, speaker..." aria-label="Search events" />
    </div>
    <div class="tags-filter">
        <button class="filter-chip active" data-tag="all">All</button>
        {% for tag in unique_tags %}
        <button class="filter-chip" data-tag="{{ tag }}">#{{ tag }}</button>
        {% endfor %}
    </div>
</div>

<section class="events-group-wrapper" id="upcomingSection">
  <h2>Upcoming</h2>
  <div class="events-list" id="upcomingList">
    {% assign upcoming = site.events | sort: "start" %}
    {% assign has_upcoming = false %}
    
    {% for e in upcoming %}
      {% assign es = e.start | date: "%s" %}
      {% if es >= now %}
        {% assign has_upcoming = true %}
        <div class="event-item upcoming" 
             data-title="{{ e.title | downcase }}" 
             data-subtitle="{{ e.subtitle | downcase }}"
             data-speakers="{% for s in e.speakers %}{{ s | downcase }} {% endfor %}"
             data-tags="{% for t in e.tags %}{{ t }} {% endfor %}">
          <div class="event-card-inner">
            <div class="event-card-date">
              <span class="date-day">{{ e.start | date: "%d" }}</span>
              <span class="date-month">{{ e.start | date: "%b" }}</span>
            </div>
            <div class="event-card-content">
              <h3><a href="{{ e.url | relative_url }}">{{ e.title }}</a></h3>
              <div class="event-card-meta">
                <span class="meta-time">{{ e.start | date: "%H:%M" }}{% if e.end %}–{{ e.end | date: "%H:%M" }}{% endif %}</span>
                {% if e.location %}<span class="meta-separator">·</span><span class="meta-loc">{{ e.location }}</span>{% endif %}
                {% if e.mode %}<span class="meta-separator">·</span><span class="meta-mode">{{ e.mode }}</span>{% endif %}
              </div>
              {% if e.speakers %}
              <div class="event-card-speakers">
                <strong>Speaker:</strong> {{ e.speakers | join: ", " }}
              </div>
              {% endif %}
              {% if e.tags %}
              <div class="event-card-tags">
                {% for tag in e.tags %}
                <span class="tag-chip-small">#{{ tag }}</span>
                {% endfor %}
              </div>
              {% endif %}
            </div>
          </div>
        </div>
      {% endif %}
    {% endfor %}
    
    <p class="no-events-placeholder" {% if has_upcoming %}style="display:none;"{% endif %}>No upcoming events found.</p>
  </div>
</section>

<section class="events-group-wrapper" id="pastSection" style="margin-top: 30px;">
  <h2>Past Sessions</h2>
  <div class="events-list" id="pastList">
    {% assign past = site.events | sort: "start" | reverse %}
    {% assign has_past = false %}
    
    {% for e in past %}
      {% assign es = e.start | date: "%s" %}
      {% if es < now %}
        {% assign has_past = true %}
        <div class="event-item past" 
             data-title="{{ e.title | downcase }}" 
             data-subtitle="{{ e.subtitle | downcase }}"
             data-speakers="{% for s in e.speakers %}{{ s | downcase }} {% endfor %}"
             data-tags="{% for t in e.tags %}{{ t }} {% endfor %}">
          <div class="event-card-inner">
            <div class="event-card-date">
              <span class="date-day">{{ e.start | date: "%d" }}</span>
              <span class="date-month">{{ e.start | date: "%b" }}</span>
            </div>
            <div class="event-card-content">
              <h3><a href="{{ e.url | relative_url }}">{{ e.title }}</a></h3>
              <div class="event-card-meta">
                <span class="meta-year">{{ e.start | date: "%Y" }}</span>
                {% if e.speakers %}<span class="meta-separator">·</span><span>{{ e.speakers | join: ", " }}</span>{% endif %}
              </div>
              {% if e.tags %}
              <div class="event-card-tags">
                {% for tag in e.tags %}
                <span class="tag-chip-small">#{{ tag }}</span>
                {% endfor %}
              </div>
              {% endif %}
            </div>
          </div>
        </div>
      {% endif %}
    {% endfor %}
    
    <p class="no-events-placeholder" {% if has_past %}style="display:none;"{% endif %}>No past events found.</p>
  </div>
</section>
