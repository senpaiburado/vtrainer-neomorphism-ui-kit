const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'React',
    description: 'React example starter project',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'D:\\vladyslav.cholak\\tt\\vtrainer-neomorphism-ui-kit\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'React',
        description: 'React example starter project',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'D:\\vladyslav.cholak\\tt\\vtrainer-neomorphism-ui-kit',
          templates:
            'D:\\vladyslav.cholak\\tt\\vtrainer-neomorphism-ui-kit\\node_modules\\docz-core\\dist\\templates',
          docz: 'D:\\vladyslav.cholak\\tt\\vtrainer-neomorphism-ui-kit\\.docz',
          cache:
            'D:\\vladyslav.cholak\\tt\\vtrainer-neomorphism-ui-kit\\.docz\\.cache',
          app:
            'D:\\vladyslav.cholak\\tt\\vtrainer-neomorphism-ui-kit\\.docz\\app',
          appPackageJson:
            'D:\\vladyslav.cholak\\tt\\vtrainer-neomorphism-ui-kit\\package.json',
          appTsConfig:
            'D:\\vladyslav.cholak\\tt\\vtrainer-neomorphism-ui-kit\\tsconfig.json',
          gatsbyConfig:
            'D:\\vladyslav.cholak\\tt\\vtrainer-neomorphism-ui-kit\\gatsby-config.js',
          gatsbyBrowser:
            'D:\\vladyslav.cholak\\tt\\vtrainer-neomorphism-ui-kit\\gatsby-browser.js',
          gatsbyNode:
            'D:\\vladyslav.cholak\\tt\\vtrainer-neomorphism-ui-kit\\gatsby-node.js',
          gatsbySSR:
            'D:\\vladyslav.cholak\\tt\\vtrainer-neomorphism-ui-kit\\gatsby-ssr.js',
          importsJs:
            'D:\\vladyslav.cholak\\tt\\vtrainer-neomorphism-ui-kit\\.docz\\app\\imports.js',
          rootJs:
            'D:\\vladyslav.cholak\\tt\\vtrainer-neomorphism-ui-kit\\.docz\\app\\root.jsx',
          indexJs:
            'D:\\vladyslav.cholak\\tt\\vtrainer-neomorphism-ui-kit\\.docz\\app\\index.jsx',
          indexHtml:
            'D:\\vladyslav.cholak\\tt\\vtrainer-neomorphism-ui-kit\\.docz\\app\\index.html',
          db:
            'D:\\vladyslav.cholak\\tt\\vtrainer-neomorphism-ui-kit\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
