export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '60db7b171649f300b994b5b6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-1cq93x6x',
                  apiId: 'a5bed728-7a68-4b18-bed3-32a67b6d41b0'
                },
                {
                  buildHookId: '60db7b17a76c8e081c5a7081',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-54x8soai',
                  apiId: '67f1f959-e37e-4153-bc15-084663648c27'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aragon000/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-54x8soai.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
