import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
  title: 'LvyJS',
  tagline: '基于 tsx、esbuld、rollup 所构建的，为 nodejs 应用设计的打包工具',
  // favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://lvyjs.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lvyjs', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/lvyjs/docs/tree/main/'
        },
        theme: {
          customCss: './src/css/custom.css'
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'LvyJS',
      // logo: {
      //   alt: 'Miao-Yunzai Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        {
          position: 'left',
          label: '文档',
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar'
        },
        {
          position: 'left',
          label: '编辑',
          href: 'https://github.com/lvyjs/docs/blob/main/docs/intro.md'
        },
        {
          position: 'right',
          href: 'https://github.com/lvyjs/core/tree/main/packages/create-lvyjs/README.md',
          label: '模板'
        },
        {
          position: 'right',
          href: 'https://github.com/lvyjs/core',
          label: '源码'
        }
      ]
    },
    /**
     * 页脚
     */
    footer: {
      style: 'dark',
      links: [
        {
          title: '教程',
          items: [
            {
              label: '简介',
              to: '/docs/docs/intro'
            }
          ]
        },
        {
          title: '社区',
          items: [
            {
              label: '问题反馈',
              href: 'https://qm.qq.com/q/aZYMNqUQc'
            }
          ]
        },
        {
          title: '更多',
          items: [
            {
              label: 'alemonjs',
              href: 'https://github.com/lemonade-lab/alemonjs'
            },
            {
              label: 'yunzaijs',
              href: 'https://github.com/yunzaijs/core'
            },
            {
              label: 'chat-space',
              href: 'https://github.com/lemonade-lab/chat-space'
            },
            {
              label: 'TRSS-Yunzai V3',
              href: 'https://github.com/TimeRainStarSky/Yunzai'
            },
            {
              label: 'Miao-Yunzai V3',
              href: 'https://github.com/yoimiya-kokomi/Miao-Yunzai/tree/master'
            },
            {
              label: 'Yunzai-Bot V3',
              href: 'https://gitee.com/Le-niao/Yunzai-Bot/tree/main'
            },
            {
              label: 'Yunzai-Bot V2',
              href: 'https://gitee.com/Le-niao/Yunzai-Bot/tree/master'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LvyJS.`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  } satisfies Preset.ThemeConfig,

  // themes: ['@docusaurus/theme-live-codeblock'],
  themes: [
    // ... Your other themes.
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        // ... Your options.
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ['en', 'zh'],
        searchResultLimits: 10,
        searchResultContextMaxLength: 50
      }
    ]
  ]
}

export default config
