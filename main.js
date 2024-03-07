import './src/_index.scss'

Catalog.render(
  {
    title: '@kovsu/ui',
    theme: {
      pageHeadingBackground: '#000',
      sidebarColor: '#FFFFFF',
      sidebarColorText: '#000',
      sidebarColorTextActive: '#323232',
      sidebarColorLine: '#EBEBEB',
      sidebarColorHeading: '#323232'
    },
    pages: [
      {
        path: '/',
        title: 'Introduction',
        src: 'intro.md'
      },
      {
        title: 'Elements',
        pages: [
          {
            path: '/elements/button',
            title: 'Button',
            src: 'elements/button.md'
          },
          {
            path: '/elements/typography',
            title: 'Typography',
            src: 'elements/typography.md'
          }
        ]
      }
    ]
  },
  document.getElementById('catalog')
)
