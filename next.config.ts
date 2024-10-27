import withPWA from 'next-pwa';

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: !isProduction, // Desabilita o PWA no modo de desenvolvimento
})({
  reactStrictMode: true,
  // Outras configurações, se necessário
});

export default nextConfig;