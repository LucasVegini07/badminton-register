/** @type {import('next').NextConfig} */
const LiveReloadPlugin = require('webpack-livereload-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (dev) config.plugins.push(
      new ESLintPlugin({
        extensions: ['ts', 'tsx'],
        failOnError: true
      })
    )
    return config
  },
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  swcMinify: true,
}

module.exports = nextConfig
