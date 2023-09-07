<script setup>
    const { locale, locales } = useI18n();
    const switchLocalePath = useSwitchLocalePath();
    const availableLocales = computed(() => {
        return (locales.value).filter(i => i.code !== locale.value)
    });
</script>

<template>
    <header class="shadow-sm">
        <div class="container d-flex align-items-center">
            <nav class="d-flex justify-content-center py-3">
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <NuxtLink to="/seo" class="nav-link">
                            SEO
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="/schema" class="nav-link">
                            Schema
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink to="/sitemap" class="nav-link">
                            Sitemap
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
            <nav class="d-flex justify-content-center py-3 ms-auto">
                <ul class="nav nav-pills">
                    <li v-for="locale in availableLocales" :key="locale.code">
                        <NuxtLink :to="switchLocalePath(locale.code)">
                            {{ locale.name }}
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
