<script setup>
    import {onMounted} from 'vue'
    import { useAuthStore } from '../store/auth';

    const authStore = useAuthStore()

    onMounted(async () => {
        await authStore.getUser()
    })
</script>

<template>
<h1>Home Page</h1>
</template>