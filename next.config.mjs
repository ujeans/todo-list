// next.config.mjs
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // 클라이언트 빌드에서 fs 모듈 무시
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        module: false,
        path: false,
        os: false,
      };
    }

    // SVG를 React 컴포넌트로 변환하는 설정 추가
    config.module.rules.push({
      test: /\.svg$/, // .svg 파일을 대상으로 함
      use: ["@svgr/webpack"], // @svgr/webpack 로더 사용
    });

    return config;
  },
};

export default nextConfig;
