---
layout: default
title: "Home"
---

<section class="hero">
  <h1>SIG: Game Intelligence</h1>
  <p>
    We are a community focused on AI in games, game analytics, player modeling, procedural content generation,
    reinforcement learning for games, and practical engineering for intelligent game systems.
  </p>
  <div class="cta">
    <a class="button primary" href="{{ '/members/' | relative_url }}">Join the SIG</a>
    <a class="button" href="{{ '/events/' | relative_url }}">See Activities</a>
    <a class="button" href="{{ '/resources/' | relative_url }}">Browse Resources</a>
  </div>
</section>

<section class="grid">
  <div class="card">
    <h3>Mission</h3>
    <p>Build a cross-disciplinary community that connects research, education, and industry practice in Game Intelligence.</p>
  </div>
  <div class="card">
    <h3>What we do</h3>
    <p>Reading groups, project showcases, workshops, guest talks, game jams with AI constraints, and mentorship.</p>
  </div>
  <div class="card">
    <h3>Focus areas</h3>
    <p>RL & planning, player modeling, game analytics, PCG/PCGML, intelligent NPCs, evaluation & benchmarking.</p>
  </div>
  <div class="card">
    <h3>Get involved</h3>
    <p>Open to students, researchers, and practitioners. Contribute ideas, host a session, or propose a project.</p>
  </div>
</section>

<section style="margin-top:16px">
  <h2 style="margin:0 0 10px">Upcoming events</h2>

  <div class="content">
    {% assign events = site.events | sort: "start" %}

    {% comment %}
      Filter only future events
    {% endcomment %}
    {% assign now = site.time | date: "%s" %}

    {% assign upcoming = "" | split: "" %}
    {% for e in events %}
      {% assign start_ts = e.start | date: "%s" %}
      {% if start_ts >= now %}
        {% assign upcoming = upcoming | push: e %}
      {% endif %}
    {% endfor %}

    {% assign upcoming = upcoming | slice: 0, 3 %}

    {% if upcoming.size == 0 %}
      <p>No upcoming events yet.</p>
    {% else %}
      <ul>
        {% for event in upcoming %}
          <li>
            <a href="{{ event.url | relative_url }}">{{ event.title }}</a>
            <span style="color:var(--muted)">
              — {{ event.start | date: "%b %d, %Y %H:%M" }}
            </span>
          </li>
        {% endfor %}
      </ul>
    {% endif %}
  </div>
</section>
