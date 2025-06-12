<template>
  <div>Logging in...</div>
</template>

<script setup>
import { onMounted } from 'vue'
import { userManager } from '../auth/oidc'

onMounted(() => {
  userManager.signinCallback().then(user => {
    console.log('User:', user)
    window.location.href = '/'
  }).catch(console.error)
})
</script>
