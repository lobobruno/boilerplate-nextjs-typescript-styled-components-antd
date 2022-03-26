/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-var-requires */
const withSass = require('@zeit/next-sass')
const withLess = require('@zeit/next-less')
const withCSS = require('@zeit/next-css')

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
    require.extensions['.less'] = (file) => {}
}

module.exports = withCSS({
    webpack5: false,
    reactStrictMode: true,
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]___[hash:base64:5]',
    },
    ...withLess(
        withSass({
            lessLoaderOptions: {
                javascriptEnabled: true,
            },
        }),
    ),
})
