# Jekyll Quick Start Guide

## What is Jekyll?

Jekyll is a static site generator that transforms plain text files into a complete website. It's perfect for blogs, documentation, and portfolio sites.

## Project Structure Overview

```
csgame/
├── _config.yml          # Main configuration file
├── Gemfile              # Ruby dependencies
├── index.html           # Homepage
├── about.md             # About page
├── blog.html            # Blog listing page
│
├── _posts/              # Blog posts directory
│   └── YYYY-MM-DD-title.md
│
├── _layouts/            # HTML templates
│   ├── default.html     # Base template with header/footer
│   ├── post.html        # Template for blog posts
│   └── page.html        # Template for static pages
│
├── _includes/           # Reusable HTML snippets
│   ├── header.html      # Site navigation
│   └── footer.html      # Site footer
│
├── _sass/               # Sass/SCSS stylesheets
│   └── main.scss        # Main stylesheet
│
├── assets/              # Static files
│   ├── css/
│   │   └── main.scss    # CSS entry point
│   ├── js/              # JavaScript files
│   └── images/          # Image files
│
├── _data/               # YAML/JSON/CSV data files
│   └── navigation.yml   # Navigation menu data
│
└── _drafts/             # Unpublished blog posts
```

## Getting Started

### 1. Install Dependencies

First, you need Ruby installed on your system. Then install the required gems:

```bash
bundle install
```

This will install Jekyll and all plugins defined in the `Gemfile`.

### 2. Run Local Development Server

```bash
bundle exec jekyll serve
```

Your site will be available at `http://localhost:4000`

To watch for changes and auto-rebuild:
```bash
bundle exec jekyll serve --watch
```

To include draft posts:
```bash
bundle exec jekyll serve --drafts
```

### 3. Build for Production

```bash
bundle exec jekyll build
```

This generates the static site in the `_site/` directory.

## Creating Content

### New Blog Post

1. Create a new file in `_posts/` with format: `YYYY-MM-DD-title.md`
2. Add front matter and content:

```markdown
---
layout: post
title: "My New Post"
date: 2025-12-17 10:00:00 +0000
categories: blog tutorial
---

Your post content here...
```

### New Page

1. Create a new markdown file in the root directory
2. Add front matter:

```markdown
---
layout: page
title: "My Page"
permalink: /my-page/
---

Your page content here...
```

### Draft Posts

Save unpublished posts in `_drafts/` without a date in the filename:
```
_drafts/my-draft-post.md
```

## Customization

### Site Configuration

Edit `_config.yml` to customize:
- Site title and description
- Base URL and URL
- Markdown processor
- Plugins
- Permalinks structure

### Styling

- Modify `_sass/main.scss` for global styles
- Add new SCSS files in `_sass/` and import them
- Assets are processed from `assets/css/main.scss`

### Layouts

- `_layouts/default.html` - Base template
- `_layouts/post.html` - Blog post template
- `_layouts/page.html` - Static page template

Create new layouts by adding files to `_layouts/`

### Includes

Reusable components in `_includes/`:
- `header.html` - Site header
- `footer.html` - Site footer

Use with: `{% include header.html %}`

### Data Files

Store structured data in `_data/`:
- YAML: `_data/navigation.yml`
- JSON: `_data/config.json`
- CSV: `_data/members.csv`

Access with: `{{ site.data.navigation }}`

## Liquid Template Syntax

Jekyll uses Liquid for templating:

```liquid
<!-- Variables -->
{{ page.title }}
{{ site.title }}

<!-- Loops -->
{% for post in site.posts %}
  {{ post.title }}
{% endfor %}

<!-- Conditionals -->
{% if page.title %}
  <h1>{{ page.title }}</h1>
{% endif %}

<!-- Filters -->
{{ page.date | date: "%B %d, %Y" }}
{{ content | markdownify }}
```

## Deployment Options

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select branch (usually `main` or `gh-pages`)

### Netlify
1. Connect your repository
2. Build command: `jekyll build`
3. Publish directory: `_site`

### Other Hosts
Build locally and upload the `_site/` directory to any web host.

## Useful Commands

```bash
# Serve with live reload
bundle exec jekyll serve --livereload

# Serve on a different port
bundle exec jekyll serve --port 4001

# Build and include future posts
bundle exec jekyll build --future

# Clean the build
bundle exec jekyll clean

# Check for configuration issues
bundle exec jekyll doctor
```

## Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Liquid Documentation](https://shopify.github.io/liquid/)
- [Jekyll Themes](https://jekyllthemes.io/)
- [Jekyll Plugins](https://jekyllrb.com/docs/plugins/)

## Troubleshooting

### Port already in use
```bash
bundle exec jekyll serve --port 4001
```

### Permission errors
```bash
bundle install --path vendor/bundle
```

### Gem conflicts
```bash
bundle update
```

## Next Steps

1. Customize `_config.yml` with your information
2. Update the content in `index.html`
3. Modify styles in `_sass/main.scss`
4. Add your own blog posts to `_posts/`
5. Create additional pages as needed
6. Add images to `assets/images/`
7. Deploy to your preferred hosting platform

Happy Jekyll-ing! 🎉
