module.exports = {
  // Existing configuration...
  images: {
    remotePatterns: [
      // Keep your existing configurations
      {
        protocol: 'https',
        hostname: 'assets.example.com',
        pathname: '/account123/**',
      },
      // Add a new pattern for Gravatar
      {
        protocol: 'http', // Gravatar images might be served over http
        hostname: '1.gravatar.com',
        pathname: '/**', // Allows any path
      },

      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**',
      },

      {
        protocol: 'https',
        hostname: 'letterstomankind.com',
        pathname: '/**',
      }
    ],
  },
  // Any other configurations...
};
