import { createGtm } from '@gtm-support/vue-gtm';

// https://github.com/gtm-support/vue-gtm
export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();
    const $_gtm_id = config.public.gtm_id;

    nuxtApp.vueApp.use(createGtm({
        id: $_gtm_id,
        defer: false,
        compatibility: false,
        enabled: true,
        debug: false,
        loadScript: true,
        vueRouter: useRouter(),
        trackOnNextTick: false,
    }))
});
