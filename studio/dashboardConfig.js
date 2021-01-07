export default {
  widgets: [
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
                  buildHookId: '5ff71c5e92388a0b96c087aa',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-5opoddis',
                  apiId: '0d93450b-0a44-400e-9aef-4fe5750e3bc8'
                },
                {
                  buildHookId: '5ff71c5f9dc171eb6564178e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-vpt3ke96',
                  apiId: 'ae6bc09e-eb51-4582-96d9-0b20e9b47aa8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bthornton/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-vpt3ke96.netlify.app', category: 'apps'}
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
