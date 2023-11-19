/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

const withVideos = require("next-videos");

module.exports = withVideos();

// module.exports = {
//   videos: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "s3-figma-videos-production-sig.figma.com",
//         port: "",
//         pathname: "/video/**",
//       },
//     ],
//   },
// };
