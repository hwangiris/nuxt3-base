<script setup>
const seo = ref({
    'title': 'Page Title Static Data',
    'description': 'Page Description Static Data. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'image_url': 'https://dummyimage.com/1200x630/ccc/fff',
}); // 資料會從 Api 來

useMetaHead({
    ...seo.value,
});
</script>

<template>
    <h1>SEO: &lt;h1&gt; should be 20-70.</h1>
</template>

<style lang="postcss" scoped>
</style>
