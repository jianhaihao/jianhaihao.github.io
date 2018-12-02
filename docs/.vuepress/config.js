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
      { text: 'Swoft', link: '/swoft/basic' },
      { text: 'Yii2.0', link: '/yii/basic' },
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
          '/linux/demo',
          '/linux/git',
          '/linux/demo2',
        ]
      },
      {
        title: 'Nginx',
        children: [
          '/nginx/basic',
        ]
      },
      {
        title: 'Git',
        children: [
          '/git/webhook',
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
          '/mac/command',
        ]
      },
      {
        title: 'Docker',
        children: [
          '/docker/basic',
          '/docker/docker-compose',
          '/docker/demo',
        ]
      },
      {
        title: 'PHP',
        children: [
          '/php/install',
          '/php/command',
          '/php/function',
          '/php/attention',
        ]
      },
      {
        title: 'ThinkPHP5',
        children: [
          '/thinkphp/basic',
        ]
      },
      {
        title: 'Yii2.0',
        children: [
          '/yii/basic',
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
          '/swoft-up/operate',
          '/swoft-up/auth',
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
        title: '数据结构',
        children: [
          '/data-structure/basic',
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