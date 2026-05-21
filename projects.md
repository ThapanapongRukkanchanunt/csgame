---
title: "Projects"
subtitle: "Research directions and active projects of the SIG."
layout: page
---

<div class="projects-grid">
  {% for project in site.projects %}
    <div class="project-card">
      <div class="project-card-header">
        <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
        <span class="status-badge {{ project.status | downcase | replace: ' ', '-' }}">{{ project.status | capitalize }}</span>
      </div>
      
      {% if project.subtitle %}
        <p class="project-subtitle">{{ project.subtitle }}</p>
      {% endif %}
      
      <p class="project-summary">
        {{ project.summary | default: project.content | strip_html | truncatewords: 30 }}
      </p>
      
      {% if project.members %}
        <div class="project-members-meta">
          <strong>Team:</strong> {{ project.members | join: ", " }}
        </div>
      {% endif %}
      
      <div class="project-card-footer">
        <a href="{{ project.url | relative_url }}" class="button primary">View Details →</a>
      </div>
    </div>
  {% endfor %}
</div>
