module.exports = {
  title: 'jianhaihao',
  description: ' ',
  head: [
    ['link', { rel: 'icon', href: '/avatar.jpeg' }]
  ],
  // evergreen: true,
  themeConfig: {
    repo: 'https://github.com/jianhaihao/jianhaihao.github.io/blob',
    lastUpdated: '上次更新',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    nav: [
      { text: 'Linux', link: '/linux/directory' },
      { text: 'Database', link: '/database/mysql-problems' },
    ],
    sidebarDepth: 1,
    sidebar: [
      {
        title: 'Database',
        children: [
          '/database/mongodb-install',
          '/database/mongodb-roles',
          '/database/mongodb',
          '/database/mongodb-backup',
          '/database/mysql-problems',
          '/database/mysql-sql_mode',
        ]
      }, {
        title: 'Nginx',
        children: [
          '/nginx/static-resource',
          '/nginx/upstream',
          '/nginx/proxy-server',
          '/nginx/basic-config',
          '/nginx/module-config',
          '/nginx/access-control',
          '/nginx/req-and-connection-limitation',
          '/nginx/install-params',
          '/nginx/https'
        ]
      },{
        title: 'Centos7.X',
        children: [
          '/linux/service',
          '/linux/git',
          '/linux/redis',
          '/linux/lamp-and-lnmp',
          '/linux/shell',
          '/linux/vim',
          '/linux/vsftpd',
          '/linux/shutdown-and-reboot',
          '/linux/install-and-login',
          '/linux/help',
          '/linux/mount',
          '/linux/file-operator',
          '/linux/file-search',
          '/linux/user-and-firewall',
          '/linux/directory',
          '/linux/net',
        ]
      },
    ],
  }
}