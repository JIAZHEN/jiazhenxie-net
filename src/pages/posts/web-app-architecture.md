---
layout: '@/templates/BasePost.astro'
title: 《大型网站技术架构》总结
description: 最近阅读了《大型网站技术架构——核心原理与案例分析》以了解大型网站的架构以及网站是如何演化，为公司发展做技术储备。
pubDate: 2016-12-22T15:49:12Z
imgSrc: 'https://brianway.github.io/img/blog/%E6%9E%B6%E6%9E%84%E8%AE%BE%E8%AE%A1_%E5%88%86%E5%B8%83%E5%BC%8F%E6%9C%8D%E5%8A%A1.png'
imgAlt: '《大型网站技术架构》总结'
---

# 开始
一如我们开始网站开发时制作个人主页，起初它完全可以被部署在一个小型计算机或者个人电脑（以下统称服务器），应用程序，网站资源和数据库等都在这一台服务器中。随着访问量和业务的增加

# 前端架构
- 浏览器优化技术。既优化响应页面，常用有 **页面缓存**、**合并 HTTP 减少请求次数**、**使用页面压缩**等。
- CDN，使用户可以通过最短路径获取内容。
- 静态资源独立部署，如 JS、CSS 等文件部署在专门的服务器上，并使用专门的（二级）域名。
- 图片服务。如静态资源一样，独立部署在图片服务器集群上，并使用独立的（二级）域名。
- 反射代理。
- DNS，将域名解析成 IP 地址，利用 DNS 可以实现 DNS 负载均衡。

# 应该层架构
- 开发框架，分离关注面，全美工，开发工程师各司其职。同时内置一些安全策略，防护 Web 应用攻击。
- 页面渲染，将动态内容和静态页面模板集成，组成最终显示给用户的完整页面。
- 负载均衡，将多台服务器组成一个集群，通过此技术将用户请求分发到不同的服务器上，以应对大量用户同时访问时产生的高并发负载压力。
- Session 管理， 为了实现高可用的应用服务器集群，应用服务器通常设计为无状态，不保存用户请求上下文信息，但是网站业务需要保持用户会话信息，需要专业的机制管理 Session，使集群内甚至跨集群的应用服务器可以共享 Session。
- 动态页面静态化，对于访问量特别大而更新不是很频繁的动态页面，可以装饰其静态化，即生成一个静态页面，利用静态页面的优化手段加速访问，如反射代理、CDN、浏览器缓存等。
- 业务拆分，将复杂庞大的业务拆分成多个小规模的产品，独立开发、部署、维护。
- 虚拟化服务器，将一台物理服务器虚拟化成多台虚拟服务器。

# 服务层架构
- 分布式消息，利用消息队列，实现业务和业务、业务和服务之间的异步消息发送及低耦合。
- 分布式服务
- 分布式缓存
- 分布式配置（？）

# 存储层架构
- 分布式文件
- 关系数据库，根据业务配置将数据库访问路由到不同的物理数据库上，可实现关系数据库的分布式访问
- NoSQL 数据库。
- 数据同步，在实践中，为了减轻数据库压力，将数据库的事务日志（或者 NoSQL 的写操作 Log）同步到其他数据中心，根据 Log 进行数据重演，实现数据同步。

# 后台架构
处理非实时数据。

- 搜索引擎
- 数据仓库
- 推荐系统

# 数据采集与监控
- 浏览器数据采集，通过在网站页面嵌入 JS 脚本。
- 服务器业务数据采集
		+ 一种是采集在服务器端记录的用户请求日志
    + 一种是采集应用程序运行期业务数据，比如待处理消息数据等。
- 服务器性能数据采集，如系统负载、内存使用、网上流量等。
- 系统监控，将采集的数据可视化，更进一步是自动化处理异常。
- 系统报警，采集来的数据超过预设的正常情况的阙值，通过邮件、短信、语音电话等发出报警信号。

# 安全架构
- Web 攻击，以 HTTP 请求的方式发起的攻击，如 XSS 和 SQL INJECT。
- 数据保护，敏感信息加密。

# 数据中心机房架构
- 机房架构，对于一个拥有十万台服务器的大型网站，每台服务器耗电（包括服务器本身和空调）每年大约要 200 人民币，网站每年机房电费就需要两亿。数据中心能耗问题已日趋严重。
- 机柜架构
- 服务器架构，多用定制。