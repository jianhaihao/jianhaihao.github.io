module.exports = {
  title: 'YiYun',
  description: ' ',
  head: [
    ['link', { rel: 'icon', href: '/avatar.jpeg' }]
  ],
  // evergreen: true,
  themeConfig: {
    repo: 'https://github.com/jianhaihao/jianhaihao.github.io',
    lastUpdated: '上次更新',
    nav: [
      { text: 'Swoole', link: '/swoole/install' },
      { text: 'DSA', link: '/distributed-service-architecture/basic' },
    ],
    sidebarDepth: 1,
    sidebar: [
      {
        title: 'Linux',
        children: [
          '/linux/basic',
          '/linux/command',
          '/linux/other-command',
          '/linux/catalog',
          '/linux/vim',
          '/linux/up-down-file',
          '/linux/docker',
        ]
      },
      {
        title: 'Nginx',
        children: [
          '/nginx/basic',
        ]
      },
      {
        title: 'Mysql',
        children: [
          '/mysql/basic',
          '/mysql/foreign-key',
        ]
      },
      {
        title: 'Mac',
        children: [
          '/mac/basic',
          '/mac/php-env',
        ]
      },
      {
        title: 'Docker',
        children: [
          '/docker/basic',
          '/docker/docker-compose',
        ]
      },
      {
        title: 'PHP',
        children: [
          '/php/install',
          '/php/command',
        ]
      },
      {
        title: 'Swoole',
        children: [
          '/swoole/basic',
          '/swoole/install',
          '/swoole/tcp-server',
          '/swoole/udp-server',
          '/swoole/http-server',
          '/swoole/ws_server',
        ]
      },
      {
        title: 'Swoft基础',
        children: [
          '/swoft/basic',
          '/swoft/env-need',
          '/swoft/install',
          '/swoft/use',
        ]
      },
      {
        title: 'Swoft进阶',
        children: [
          '/swoft-up/install',
          '/swoft-up/share',
        ]
      },
      {
        title: 'MicroService',
        children: [
          '/microservice/basic',
        ]
      },
      {
        title: '计算机网络',
        children: [
          '/net/tcp-ip',
        ]
      },
      {
        title: 'Markdown',
        children: [
          '/markdown/grammar',
        ]
      },
      {
        title: '分布式服务架构',
        children: [
          '/distributed-service-architecture/basic',
        ]
      },
    ],
  }
}