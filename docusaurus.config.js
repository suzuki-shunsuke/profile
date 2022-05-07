// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Profile',
  tagline: "Shunsuke Suzuki's Profile",
  url: 'https://suzuki-shunsuke.github.io',
  baseUrl: '/profile/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'http://github.com/suzuki-shunsuke.png',
  organizationName: 'suzuki-shunsuke', // Usually your GitHub org/user name.
  projectName: 'profile', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/suzuki-shunsuke/profile/edit/main',
        },
        pages: false,
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Shunsuke Suzuki's Profile",
        logo: {
          alt: 'Shunsuke Suzuki',
          src: 'http://github.com/suzuki-shunsuke.png',
        },
        items: [
          {
            href: 'http://github.com/suzuki-shunsuke',
            label: 'GitHub User Profile',
            position: 'right',
          },
          {
            href: 'http://github.com/suzuki-shunsuke/resume',
            label: 'Resume',
            position: 'right',
          },
          {
            href: 'http://github.com/suzuki-shunsuke/profile',
            label: 'Source Repository',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'More',
            items: [
              {
                href: 'http://github.com/suzuki-shunsuke',
                label: 'GitHub User Profile',
              },
              {
                href: 'http://github.com/suzuki-shunsuke/resume',
                label: 'Resume',
              },
              {
                href: 'http://github.com/suzuki-shunsuke/profile',
                label: 'Source Repository',
              },
            ],
          },
        ],
        copyright: `Copyright © 2016 Shunsuke Suzuki. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
