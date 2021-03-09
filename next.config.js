module.exports = {
  target: 'serverless',
  webpack: function (config) {
    config.module.rules.push({ test: /\.md$/, use: 'raw-loader' })

    return config
  },
  async rewrites() {
    return [
      {
        source: '/api/thumbnail.png',
        destination: '/api/thumbnail',
      },
    ]
  },
}
