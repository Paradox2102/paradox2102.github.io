---
layout: page
---
{% for static_file in site.static_files %}
    {% if static_file.path == '/resources/gallery/' %}
        {% assign favicon = true %}
    {% endif %}
{% endfor %}