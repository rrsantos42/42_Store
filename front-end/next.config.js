/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const next_config = {
  webpack: function (config, context) {
         config.watchOptions = {
             poll: 1000,
             aggregateTimeout: 300,
         };
         return config;
     },
 };
module.exports = nextConfig
