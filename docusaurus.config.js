/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'ONELAND Wiki',
  tagline: 'ONELAND, Your One-stop Land-Fi Platform in the Metaverse.',
  url: 'https://wiki.oneland.world',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'onelandworld', // Usually your GitHub org/user name.
  projectName: 'oneland-wiki', // Usually your repo name.
  themeConfig: {
    prism: {
      additionalLanguages: ['java'],
    },
    navbar: {
      title: '',
      logo: {
        alt: 'ONELAND Logo',
        src: 'img/logo.svg',
      },
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    }

  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.

          editUrl: 'https://github.com/onelandworld/oneland-wiki/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/onelandworld/oneland-wiki/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
