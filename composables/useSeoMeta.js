export const useMetaHead = ({ title = '', description = '', image_url = '', type = 'website' }) => {
    const config = useRuntimeConfig();
    const base = config.public.base_url;
    const route = useRoute();
    const path = route.path.substring(1);

    const $_title = ref(title);
    const $_description = ref(description);
    const $_image = ref(image_url);
    const $_type = ref(type);
    const $_full_url = ref(`${base}${path}`);

    const web_seo = computed(() => {
        return {
            title: $_title.value,
            description: $_description.value,
            image: $_image.value,
        }
    })

    const og_seo = computed(() => {
        return {
            ogTitle: $_title.value,
            ogDescription: $_description.value,
            ogImage: $_image.value,
            ogType: $_type.value,
            ogUrl: $_full_url.value
        }
    })

    const twitter_seo = computed(() => {
        return {
            twitterTitle: $_title.value,
            twitterDescription: $_description.value,
            twitterCard: 'summary_large_image',
            twitterImage: $_image.value
        }
    })

    useSeoMeta({
        ...web_seo.value,
        ...og_seo.value,
        ...twitter_seo.value
    });

    useCanonical($_full_url.value);
}
