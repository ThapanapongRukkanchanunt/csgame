---
title: "News"
subtitle: "Announcements and updates."
---

{% if site.posts.size == 0 %}
No posts yet.
{% else %}
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span style="color:var(--muted)"> — {{ post.date | date: "%B %d, %Y" }}</span>
    </li>
  {% endfor %}
</ul>
{% endif %}
