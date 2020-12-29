module.exports = {
  title: 'DealCloud Developer Hub',
  tagline: 'DealCloud – Not Just a CRM: All-Inclusive Financial Services Software',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'perrautc', // Usually your GitHub org/user name.
  projectName: 'api-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'DealCloud Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/perrautc/api-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guides',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
            {
              label: 'Samples',
              to: 'docs/doc2/',
            },
            {
              label: 'SDKs',
              to: 'docs/doc2/',
            },
            {
              label: 'REST APIs',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Docs',
          items: [
            {
              label: 'Authentication',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Data',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Schema',
              href: 'https://twitter.com/docusaurus',
            },
            {
              label: 'User Management',
              href: 'https://twitter.com/docusaurus',
            },
            {
              label: 'Marketing',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/perrautc/api-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Intapp, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/perrautc/api-docs/edit/main/dealcloud/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/perrautc/api-docs/edit/main/dealcloud/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
