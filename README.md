# csgame

A Jekyll-powered static website.

## Jekyll Structure

This repository is set up with a complete Jekyll framework structure:

### Directory Structure

```
├── _config.yml          # Jekyll configuration file
├── Gemfile              # Ruby dependencies
├── index.html           # Homepage
├── about.md             # About page
├── blog.html            # Blog index page
├── _posts/              # Blog posts (YYYY-MM-DD-title.md format)
├── _layouts/            # Page templates
│   ├── default.html     # Base layout
│   ├── post.html        # Blog post layout
│   └── page.html        # Standard page layout
├── _includes/           # Reusable components
│   ├── header.html      # Site header
│   └── footer.html      # Site footer
├── _sass/               # Sass stylesheets
│   └── main.scss        # Main stylesheet
├── assets/              # Static assets
│   ├── css/
│   ├── js/
│   └── images/
├── _data/               # Data files (YAML, JSON, CSV)
│   └── navigation.yml   # Navigation data
└── _drafts/             # Unpublished blog posts
```

## Getting Started

### Prerequisites

- Ruby (version 2.7 or higher)
- RubyGems
- Bundler

### Installation

1. Install dependencies:
   ```bash
   bundle install
   ```

2. Build and serve the site locally:
   ```bash
   bundle exec jekyll serve
   ```

3. Open your browser and navigate to `http://localhost:4000`

### Creating Content

#### New Blog Post

Create a new file in `_posts/` with the format:
```
_posts/YYYY-MM-DD-title-of-post.md
```

Add front matter:
```yaml
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD HH:MM:SS +0000
categories: category1 category2
---

Your content here...
```

#### New Page

Create a new markdown file in the root directory:
```yaml
---
layout: page
title: "Page Title"
permalink: /page-url/
---

Your content here...
```

### Customization

- **Site Configuration**: Edit `_config.yml`
- **Styles**: Modify files in `_sass/`
- **Layouts**: Customize templates in `_layouts/`
- **Navigation**: Update `_data/navigation.yml`

## Documentation

For more information about Jekyll, visit:
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Jekyll Themes](https://jekyllrb.com/docs/themes/)
- [Liquid Template Language](https://shopify.github.io/liquid/)

## License

This project is open source and available under the [MIT License](LICENSE).
