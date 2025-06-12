
<template>
  <div class="vertical-hero-container">
    <div class="illustration-box">
      </div>

    <h1 class="mb-3">Welcome to Project Hub</h1>
    <p class="mb-4 px-lg-5">
      Explore a growing list of exciting internal projects designed to match your skills and interests.
      With just a few clicks, you can join teams, contribute meaningfully, and track your journey every step of the way.
    </p>

    <br>
    <p>Log in and find the project that's waiting for you.</p>

    <div class="d-flex justify-content-center gap-3 mb-4 flex-wrap">
      <button @click="signIn" class="btn btn-orange">Login →</button>
      </div>

    <div class="d-flex align-items-center justify-content-center mt-3 flex-wrap">
      <div class="avatars me-3">
        <span>JD</span>
        <span>KL</span>
        <span>MN</span>
        <span>+5</span>
      </div>
      <div>
        <small class="text-muted">Join 1,000+ collaborators already on the platform</small>
      </div>
    </div>
  </div>
</template>

<script setup>
import { userManager } from '../auth/oidc';

function signIn() {
  userManager.signinRedirect();
}
</script>

<style scoped>
/* Importing Bootstrap CSS (for .container, .mb-x, .px-lg-x, .d-flex, .justify-content-center, .gap-3, .align-items-center, .me-3, .flex-wrap, .text-muted) */
@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';

body { /* Note: 'body' styles should ideally be in your global CSS (e.g., App.vue's style or main.css) */
  background-color: #fefefe;
  font-family: 'Segoe UI', sans-serif;
  color: #111111;
}
.vertical-hero-container { /* Added a class for the main container */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem;
  text-align: center;
  max-width: 800px; /* Optional: Limit max-width for better readability on very wide screens */
  margin: auto; /* Center the container if max-width is applied */
}
.btn-orange {
  background-color: #ff5e19;
  color: white;
  border-radius: 8px;
  padding: 10px 24px;
  font-weight: bold;
  border: none; /* Ensure no default button border */
}
.btn-orange:hover {
  background-color: #e64a04;
}
.btn-outline-orange {
  border: 2px solid #ff5e19;
  color: #ff5e19;
  font-weight: bold;
  border-radius: 8px;
  padding: 10px 24px;
  background-color: transparent;
}
.btn-outline-orange:hover {
  background-color: #ff5e19;
  color: white;
}
.avatars span {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50%;
  background-color: #6c7a89;
  color: white;
  text-align: center;
  margin-right: -10px; /* Overlap effect */
  font-weight: 600;
  border: 2px solid #fefefe; /* Matches body background for clean overlap */
  box-shadow: 0 2px 5px rgba(0,0,0,0.1); /* Subtle shadow for depth */
}
.avatars span:first-child {
  margin-right: -10px; /* Overlap from the left */
}
.avatars span:last-child {
  background-color: #ff5e19;
}
.illustration-box {
  background-color: #56677d;
  border-radius: 20px;
  width: 360px;
  height: 240px;
  position: relative;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
}

/* Ensure the main container acts like the original .hero */
.container.hero {
  /* Remove any conflicting Bootstrap container styles that might limit width/padding if not desired */
  /* Re-apply hero-specific styles if they were overridden by .container */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem;
  text-align: center;
}

/* Adjustments for better mobile view */
@media (max-width: 576px) {
  .illustration-box {
    width: 100%; /* Make illustration box fill width on small screens */
    height: 200px; /* Adjust height */
  }
  .vertical-hero-container h1 {
    font-size: 2rem; /* Smaller heading on small screens */
  }
}
</style>