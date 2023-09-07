<script setup>
    const route = useRoute();
    const slug = route.params.slug;
</script>

<template>
    <h1>{{ slug }}</h1>
</template>
