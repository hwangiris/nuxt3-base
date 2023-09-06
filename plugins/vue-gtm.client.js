import { createGtm } from '@gtm-support/vue-gtm';

// https://github.com/gtm-support/vue-gtm
export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig().public;
    const $_gtm_id = config.gtm_id;
    const $_gtm_debug = config.gtm_debug;

    nuxtApp.vueApp.use(createGtm({
        id: $_gtm_id,
        defer: false,
        compatibility: false,
        enabled: true,
        debug: $_gtm_debug,
        loadScript: true,
        vueRouter: useRouter(),
        trackOnNextTick: false,
    }))
});
