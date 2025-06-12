<!-- <template>
  <div>
    <h2>Logging in...</h2>
    <p v-if="user">Welcome {{ user.profile.email }}</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { userManager } from '../auth/oidc';

const user = ref(null);

onMounted(async () => {
  const result = await userManager.signinCallback();
  user.value = result;
});
</script> -->

<template>
  <div class="projects-page-container">
    <nav class="navbar navbar-expand-lg bg-white px-4 py-3">
      <a class="navbar-brand text-orange fw-bold" href="#">ProjectHub</a>
      <p v-if="user">Welcome {{ user.profile.email }}</p>
      <div class="ms-auto">
        <a class="nav-link d-inline me-3" href="#">Projects</a>
        <a class="nav-link d-inline me-3" href="#">Dashboard</a>
        <a class="nav-link d-inline me-3" href="#">Profile</a>
        <button id="signOut" @click="signOut">Log out</button>
      </div>
    </nav>

    <div class="container mt-4">
      <div class="search-bar">
        <div class="row g-2">
          <div class="col-md-6">
            <input type="text" class="form-control" placeholder="Search projects..." />
          </div>
          <div class="col-md-2">
            <select class="form-select">
              <option>Location</option>
            </select>
          </div>
          <div class="col-md-2">
            <select class="form-select">
              <option>Domain</option>
            </select>
          </div>
          <div class="col-md-2">
            <select class="form-select">
              <option>Duration</option>
            </select>
          </div>
        </div>
      </div>

      <h4 class="mt-5 fw-bold">Recommended Projects</h4>
      <div class="row mt-3">
        <div class="col-md-4 mb-4">
          <div class="project-card">
            <div class="project-icon">↺</div>
            <div class="project-body">
              <h6 class="fw-bold">Web App Development</h6>
              <p>Build a web application using React and Node.js with real-time features and cloud integration.</p>
              <button class="btn btn-sm btn-light border">View More</button>
              <button class="btn btn-sm btn-orange float-end">Join</button>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-4">
          <div class="project-card">
            <div class="project-icon">❯❮</div>
            <div class="project-body">
              <h6 class="fw-bold">Mobile App Design</h6>
              <p>Create intuitive and beautiful UI/UX designs for a health and wellness mobile application.</p>
              <button class="btn btn-sm btn-light border">View More</button>
              <button class="btn btn-sm btn-orange float-end">Join</button>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-4">
          <div class="project-card">
            <div class="project-icon">📊</div>
            <div class="project-body">
              <h6 class="fw-bold">Data Analysis Project</h6>
              <p>Analyze customer behavior data and create insightful visualizations for a retail company.</p>
              <button class="btn btn-sm btn-light border">View More</button>
              <button class="btn btn-sm btn-orange float-end">Join</button>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-between align-items-center">
        <h5 class="fw-bold">Explore More Projects</h5>
        <a href="#" class="text-orange fw-semibold">View All &gt;</a>
      </div>

      <div class="row mt-3">
        <div class="col-md-4 mb-4">
          <div class="project-card">
            <div class="project-icon">↺</div>
            <div class="project-body">
              <h6 class="fw-bold">Web App Development</h6>
              <p>Build a web application using React and Node.js with real-time features and cloud integration.</p>
              <button class="btn btn-sm btn-light border">
                <a href="./projectdetails.html">View More</a>
              </button>
              <button class="btn btn-sm btn-orange float-end">Join</button>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-4">
          <div class="project-card">
            <div class="project-icon">❯❮</div>
            <div class="project-body">
              <h6 class="fw-bold">Mobile App Design</h6>
              <p>Create intuitive and beautiful UI/UX designs for a health and wellness mobile application.</p>
              <button class="btn btn-sm btn-light border">View More</button>
              <button class="btn btn-sm btn-orange float-end">Join</button>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-4">
          <div class="project-card">
            <div class="project-icon">📊</div>
            <div class="project-body">
              <h6 class="fw-bold">Data Analysis Project</h6>
              <p>Analyze customer behavior data and create insightful visualizations for a retail company.</p>
              <button class="btn btn-sm btn-light border">View More</button>
              <button class="btn btn-sm btn-orange float-end">Join</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="footer text-center">
      <div class="container">
        <div class="d-flex justify-content-center align-items-center mb-3">
          <span class="fw-bold">OneRepo</span>
        </div>
        <p class="text-muted">&copy; 2025 OneRepo. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { userManager } from '../auth/oidc';
import { signOutRedirect } from '../auth/oidc';

const user = ref(null);

onMounted(async () => {
  const result = await userManager.signinCallback();
  user.value = result;
});


function signOut() {
  signOutRedirect();
}
</script>

<style scoped>
body { /* Note: 'body' styles should generally be in your global CSS (e.g., App.vue's style or main.css) */
  background-color: #353e58;
  font-family: 'Segoe UI', sans-serif;
}

.navbar {
  border-bottom: 1px solid #eee;
}
.search-bar {
  background-color: #ffeedd;
  padding: 20px;
  border-radius: 8px;
}
.project-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: transform 0.2s;
}
.project-card:hover {
  transform: scale(1.02);
}
.project-icon {
  background-color: #ffe0c7;
  padding: 30px;
  text-align: center;
  font-size: 30px;
}
.project-body {
  padding: 20px;
}

.btn-orange {
  background-color: #ff6600;
  color: white;

}
.btn-orange:hover {
  background-color: #e65c00;
}


.footer {
  background-color: #ffeedd;
  padding: 40px 0;
  margin-top: 40px;
}
.footer a {
  text-decoration: none;
  color: inherit;
}

/* Specific styling for the custom logout button */
#signOut {
  background-color: transparent;
  border: 1px solid #ff6600;
  color: #ff6600;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
}
#signOut:hover {
  background-color: #ff6600;
  color: white;
}
</style>