/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // English first. TODO(i18n): negotiate by Accept-Language if we ever want it.
    return [{ source: "/", destination: "/en", permanent: false }];
  },
};

module.exports = nextConfig;
