module.exports = {
  reactStrictMode: true,
  env: {
    GRAPHQL_API_URL: process.env.GRAPHQL_API_URL || 'http://localhost:4000/graphql',
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };
    return config;
  },
};