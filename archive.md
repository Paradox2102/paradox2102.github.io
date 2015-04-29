---
layout: page-centered
permalink: /blog/archive/
title: Blog Archive
---

##Posts
Here you can find all the blog posts.. Good Luck ( &#8984; + F )
<hr>

{% for post in site.posts %}
  * {{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})
 <hr>
{% endfor %}