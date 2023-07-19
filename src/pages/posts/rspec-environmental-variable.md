---
layout: '@/templates/BasePost.astro'
title: Rspec environmental Variable
description: Learn environmental variable
pubDate: 2013-10-13T20:26:24Z
imgSrc: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1623416109911/DAFpo-cNa.png'
imgAlt: 'Rspec environmental Variable'
---

#### What is Environment Variable?
> Environment variables are variables passed to programs by the command line or the graphical shell. Though there are a number of environment variables that only affect the command line or graphical shell itself (such as PATH or HOME), there are also several that directly affect how Ruby scripts execute.

#### How to use it?
For example, in your spec, add a code:

```ruby
something = ENV['SOMETHING']
```

Then in the command line, use:

```ruby
SOMETHING=1000
```

Variable `something` will now be assigned to 1000.
