export default {
  title: 'Hello,VitePress',
  titleTemplate: 'Great play',
  description: 'Just playing around.',
  themeConfig: {
    siteTitle: 'My Custom Title',
    logo: 'https://avatars.githubusercontent.com/u/40884918?s=64&v=4',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Foo', link: '/foo/' },
      {
        text: 'Foo',
        items: [
          { text: 'Foo Demo1', link: '/foo/demo1' },
          { text: 'Foo Demo2', link: '/foo/demo2', activeMatch: '/foo/' }
        ]
      }
    ],
    sidebar: {
      // This sidebar gets displayed when user is
      // under `guide` directory.
      '/foo/': [
        {
          text: 'Foo',
          collapsible: true,
          collapsed: true, //默认折叠
          items: [
            { text: 'Foo', link: '/foo/' },
            { text: 'Foo-demo1', link: '/foo/demo1' },
            { text: 'Foo-demo2', link: '/foo/demo2' }
          ]
        }
      ]
    }
  },
  markdown: {
    config: (md) => {
      // 添加DemoBlock插槽
      const { demoBlockPlugin } = require('vitepress-theme-demoblock');
      md.use(demoBlockPlugin);
    }
  }
};
