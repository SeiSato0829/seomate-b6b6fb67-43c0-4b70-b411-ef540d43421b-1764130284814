import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://seomate-test-11-1764130283103.netlify.app',
  sitemap: true,
  integrations: [],
  vite: {
    define: {
      'import.meta.env.SITE_NAME': JSON.stringify('SEOメイト テストブログ 11'),
      'import.meta.env.SITE_DOMAIN': JSON.stringify('seomate-test-11-1764130283103.netlify.app'),
      'import.meta.env.THEME': JSON.stringify('default')
    }
  }
});
