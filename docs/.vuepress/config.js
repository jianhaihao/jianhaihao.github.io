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
        ]
      },
      {
        title: 'Nginx',
        children: [
          '/nginx/basic',
        ]
      },
      {
        title: 'Mac',
        children: [
          '/mac/basic',
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
          '/swoole/task',
        ]
      },
      {
        title: 'Swoft',
        children: [
          '/swoft/basic',
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