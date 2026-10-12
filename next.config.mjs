/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 640, 768, 1024, 1280, 1600, 1920],
  },
  async redirects() {
    // 301s from the legacy fiewegerlaw.com URL structure.
    return [
      { source: "/firm-profile/", destination: "/attorney-profile/", statusCode: 301 },
      { source: "/firm-profile/awards-and-recognition/", destination: "/attorney-profile/#awards", statusCode: 301 },
      { source: "/media-resources/", destination: "/blog/", statusCode: 301 },
      { source: "/media-resources/news-and-events/", destination: "/blog/", statusCode: 301 },
      { source: "/media-resources/news-and-events/:path+", destination: "/blog/", statusCode: 301 },
      { source: "/media-resources/video-gallery/", destination: "/attorney-profile/#video", statusCode: 301 },
      { source: "/media-resources/client-resources/", destination: "/practice-areas/", statusCode: 301 },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
