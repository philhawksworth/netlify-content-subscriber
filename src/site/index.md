---
title: Content subscriber
subtitle: Grabbing content from the source
layout: layouts/base.njk
---

## News from the content source

{%- for entry in news -%}
<h3>{{ entry.title | safe }}</h3>
<div>{{ entry.text | safe }}</div>
{%- endfor -%}



