const withVanillaExtract =
  require('@vanilla-extract/next-plugin').createVanillaExtractPlugin();

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/**
 * @type {import('next').NextConfig}
 */
const config = {
  swcMinify: true,
  typescript: {
    ignoreDevErrors: true,
    ignoreBuildErrors: true,
  },
  compress: true,
  poweredByHeader: false,
};

module.exports = withBundleAnalyzer(withVanillaExtract(config));
