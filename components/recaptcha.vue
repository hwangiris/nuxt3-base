<script setup>
    const email = 'test@example.com';
    const password = '12345678';

    const onSubmit = () => {
        console.log('a');
    }

    onMounted( async () => {
        console.log('async');
    });
</script>

<template>
    <section>
        <h1>Sign In</h1>
        <form @submit.prevent="onSubmit">
            <input autocomplete="true" placeholder="Email" type="email" v-model="email">
            <input autocomplete="current-password" placeholder="Password" type="password" v-model="password">
            <button type="submit">Sign In</button>
        </form>
    </section>
</template>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
    input {
        padding: .25rem .5rem;
        font-size: 1rem;
    }
    button {
        padding: .25rem .5rem;
        font-size: 1rem;
    }
</style>
