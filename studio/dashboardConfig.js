export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '61819eb0bab01e26d979cab5',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-hojf9wif',
                  apiId: '3ec7094d-5f86-4167-91c4-31e96b0371b1'
                },
                {
                  buildHookId: '61819eb08cebd53ac3472f1f',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-vnun2s47',
                  apiId: 'aff3414b-bde6-4f42-88de-455ec791161c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SELFSchoolHQ/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-vnun2s47.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
