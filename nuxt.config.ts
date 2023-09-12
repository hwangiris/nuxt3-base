// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            base_url: process.env.NUXT_PUBLIC_BASE_URL,
            gtm_id: process.env.NUXT_PUBLIC_GTM_ID,
            gtm_debug: process.env.NODE_ENV === 'production' ? false : true,
        }
    },
    modules: [
        'nuxt-schema-org',
        'nuxt-simple-robots',
        'nuxt-simple-sitemap',
        'nuxt-security',
        '@nuxtjs/i18n'
    ],
    schemaOrg: {
        host: process.env.NUXT_PUBLIC_BASE_URL,
    },
    security: {
        headers: {
            xXSSProtection: '1', // 告訴服務器如果遇到 http:// 的請求, 麻煩改為 https:// 請求
            contentSecurityPolicy: false,
        },
        // rateLimiter: { // 限制流量
        //     tokensPerInterval: 99,
        //     interval: 'hour',
        // }
    },
    i18n: {
        langDir: 'locales/',
        locales: [
            {
                code: 'zh',
                name: '中文',
                iso: 'zh-HK',
                file: 'zh.ts',
            },
            {
                code: 'en',
                name: 'English',
                iso: 'en-US',
                file: 'en.ts',
            },
        ],
        strategy: 'prefix_except_default',
        detectBrowserLanguage: true,
        defaultLocale: 'en',
    },
    devtools: { enabled: true }
});
