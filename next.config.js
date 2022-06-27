
const withImages = require('next-images')
module.exports = withImages({
  images: {
    domains: ['s3.amazonaws.com/', 'example2.com'],
  },
  esmodule: true,

})


const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({})
