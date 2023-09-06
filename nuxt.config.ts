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
    ],
    schemaOrg: {
      host: process.env.NUXT_PUBLIC_BASE_URL,
    },
    devtools: { enabled: true }
});
