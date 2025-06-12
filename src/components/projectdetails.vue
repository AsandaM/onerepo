<template>
  <div class="project-hub-page">
    <nav class="navbar navbar-expand-lg bg-white px-4 py-3 border-bottom">
      <a class="navbar-brand text-orange fw-bold" href="#"> OneRepo</a>
      <div class="ms-auto">
        <a class="nav-link d-inline me-3" href="./index.html">Projects</a>
        <a class="nav-link d-inline me-3" href="#">Dashboard</a>
        <a class="nav-link d-inline me-3" href="#">Profile</a>
        <a class="nav-link d-inline" href="./login.html">Logout</a>
      </div>
    </nav>

    <div class="container my-5">
      <div class="project-header mb-4">
        <div>
          <a href="./index.html" class="back-link mb-2 d-inline-block">&larr; Back to Projects</a>
          <h3 class="fw-bold mt-2">Web App Development</h3>
          <span class="badge bg-success me-2">Active</span>
          <span class="badge bg-primary">Remote</span>
        </div>
        <button class="btn btn-orange mt-2">Join Project</button>
      </div>

      <div class="row" style="min-height: 100%;">
        <div class="col-md-8 d-flex">
          <div class="project-card mb-4 w-100">
            <h5 class="fw-bold">Project Details</h5>
            <p>
              Build a modern web application using React and Node.js with real-time features and cloud integration.
              This project aims to create a collaborative platform for remote teams with features like task management,
              file sharing, and real-time communication. The application will be deployed on AWS and will include CI/CD pipelines for seamless updates.
            </p>

            <h6 class="fw-semibold mt-4">Required Skills</h6>
            <span class="badge badge-skill">React</span>
            <span class="badge badge-skill">Node.js</span>
            <span class="badge badge-skill">MongoDB</span>
            <span class="badge badge-skill">AWS</span>
            <span class="badge badge-skill">Docker</span>
            <span class="badge badge-skill">CI/CD</span>

            <div class="row mt-4">
              <div class="col-sm-6">
                <p><strong>Duration:</strong> 4 months</p>
                <p><strong>Team Size:</strong> 5–7 members</p>
              </div>
              <div class="col-sm-6">
                <p><strong>Location:</strong> Remote</p>
                <p><strong>Start Date:</strong> January 15, 2024</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4 d-flex">
          <div class="owner-card w-100">
            <h6 class="fw-bold">Project Owner</h6>
            <div class="d-flex align-items-center mb-3">
              <div class="avatar">👤</div>
              <div class="ms-3">
                <strong>Alex Johnson</strong><br>
                <small>Senior Full Stack Developer</small>
              </div>
            </div>
            <p>
              Alex has over 8 years of experience in web development and has led multiple successful projects. Specializes in scalable architecture and cloud solutions.
            </p>

            <h6 class="fw-bold mt-4">Other Projects by Owner</h6>
            <div class="other-projects">
              <a href="#">
                E-commerce Platform
                <span>View Project</span>
              </a>
              <a href="#">
                API Gateway Implementation
                <span>View Project</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-4">
      <div class="d-flex justify-content-between align-items-center">
        <h5 class="fw-bold">Similar Projects You Might Like</h5>
      </div>

      <div class="row mt-3">
        <div class="col-md-4 mb-4">
          <div class="project-card">
            <div class="project-icon">
              ↺
            </div>
            <div class="project-body">
              <h6 class="fw-bold">Web App Development</h6>
              <p>Build a web application using React and Node.js with real-time features and cloud integration.</p>
              <button class="btn btn-sm btn-light border"> <a href="./projectdetails.html">View More</a></button>
              <button class="btn btn-sm btn-orange float-end">Join</button>
            </div>
          </div>
        </div>

        <div class="col-md-4 mb-4">
          <div class="project-card">
            <div class="project-icon">
              ❯❮
            </div>
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
            <div class="project-icon">
              📊
            </div>
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
        <div class="d-flex justify-content-center gap-4 mt-3">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// No specific reactive data or methods are needed for this static conversion,
// but this is where your Vue 3 composition API logic would go.
</script>

<style scoped>
/* Importing Bootstrap CSS */
@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';

body {
  background-color: #fffaf6;
  font-family: 'Segoe UI', sans-serif;
}
.btn-orange {
  background-color: #ff6600;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 500;
}
.btn-orange:hover {
  background-color: #e65c00;
}
.badge-skill {
  background-color: #ffe5d1;
  color: #333;
  margin: 4px;
  font-weight: 500;
  font-size: 1rem;
  padding: 8px 14px;
}
.project-card, .owner-card {
  background-color: #ffeee0;
  border-radius: 12px;
  padding: 20px;
  height: 100%;
}
.avatar {
  background-color: #ff6600;
  color: white;
  width: 50px;
  height: 50px;
  font-size: 24px;
  border-radius: 50%;
  text-align: center;
  line-height: 50px;
}
.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}
.back-link {
  color: #ff6600;
  text-decoration: none;
  font-size: 0.95rem;
}
.other-projects a {
  display: block;
  background: white;
  padding: 10px;
  border-radius: 6px;
  text-decoration: none;
  color: #000;
  margin-bottom: 10px;
  font-weight: 500;
}
.other-projects a span {
  display: block;
  font-size: 0.85rem;
  color: #ff6600;
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
</style>