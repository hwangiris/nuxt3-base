<script setup>
</script>

<template>
    <div>
        <TheHeader />
        <main class="py-5">
            <div class="container">
                <slot />
            </div>
        </main>
    </div>
</template>

<style lang="postcss" scoped>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css');
</style>
