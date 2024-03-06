import './packages/_index.scss';

Catalog.render({
  title: '@kovsu/ui',
  theme: {
    pageHeadingBackground: '#000',
    sidebarColor: "#FFFFFF",
    sidebarColorText: "#000",
    sidebarColorTextActive: "#323232",
    sidebarColorLine: "#EBEBEB",
    sidebarColorHeading: "#323232",
  },
  pages: [
    {
      path: '/',
      title: 'Introduction',
      src: 'intro.md'
    },
    {
      title: 'Components',
      pages: [
        {
          path: '/components/button',
          title: 'Button',
          src: 'components/button.md'
        },
        {
          path: '/typography',
          title: 'Typography',
          src: 'typography.md'
        },
      ]
    }
  ]
}, document.getElementById('catalog'));
