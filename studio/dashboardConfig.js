export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6283a80d13da0711ac013c49',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-85dn75i9',
                  apiId: '3a460339-7b81-4864-a852-7c5ea7fdbcbd'
                },
                {
                  buildHookId: '6283a80d4a6f020f2637a189',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-s4ziw1o2',
                  apiId: 'ddbc69a5-061e-4fbe-9b72-0a5c6635d026'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/georgebambu/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-s4ziw1o2.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
