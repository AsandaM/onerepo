<template>
  <div>
    <h1>Home</h1>
    <button @click="login">Login</button>
  </div>
</template>

<script setup>
import { userManager } from '../auth/oidc'

function login() {
  userManager.signinRedirect()
}
</script>
