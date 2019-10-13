export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5da27488fc229311fc276255',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-voxvg5is',
                  apiId: 'cdd65b85-98f0-44af-ba9b-69d650fb7b21'
                },
                {
                  buildHookId: '5da2748867d762e4a0e304bf',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-gquz15ki',
                  apiId: '1266d4c5-08c5-4393-8ea2-bc93bde43a22'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ajesse11x/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-gquz15ki.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
