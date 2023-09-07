<script setup>
    const route = useRoute();
    const slug = route.params.slug;
</script>

<template>
    <h1>
        {{ $t('hello') }}
        {{ slug }}
    </h1>
</template>
