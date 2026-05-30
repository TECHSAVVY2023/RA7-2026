<template>
  <div class="page">
    <header class="topbar">
      <div class="container topbar__inner">
        <NuxtLink to="/" class="brand" aria-label="RA7 Resort">
          <div class="brand__mark" aria-hidden="true">RA7</div>
          <div class="brand__text">
            <div class="brand__name">RA7 Resort</div>
            <div class="brand__tag">Beach • Nature • Comfort</div>
          </div>
        </NuxtLink>

        <nav class="nav" aria-label="Primary">
          <NuxtLink class="nav__link" to="/">Home</NuxtLink>
          <a class="nav__link" href="/#stays">Stays</a>
          <a class="nav__link" href="/#amenities">Amenities</a>
          <NuxtLink class="nav__link is-active" to="/contact">Contact</NuxtLink>
        </nav>

        <div class="actions">
          <NuxtLink to="/#book" class="btn btn--primary">
            Book now
          </NuxtLink>
        </div>
      </div>
    </header>

    <main>
      <!-- Hero Section -->
      <section class="contact-hero">
        <div class="container">
          <div class="hero-content">
            <h1 class="hero-title">Let’s <span class="hero-title-accent">Connect</span></h1>
            <p class="hero-subtitle">
              Have questions about your stay? We’re here to help you plan your perfect RA7 escape.
              Reach out and we'll get back to you shortly.
            </p>
          </div>
        </div>
      </section>

      <section class="contact-grid section">
        <div class="container grid-layout">
          <!-- Contact Form -->
          <div class="form-container">
            <div class="glass-card contact-form">
              <h2 class="card-title">Send a Message</h2>
              <form @submit.prevent="submitForm">
                <div class="input-group">
                  <div class="field">
                    <label for="firstname">First Name</label>
                    <input v-model="form.firstname" id="firstname" type="text" placeholder="John" required />
                  </div>
                  <div class="field">
                    <label for="lastname">Last Name</label>
                    <input v-model="form.lastname" id="lastname" type="text" placeholder="Doe" required />
                  </div>
                </div>

                <div class="field">
                  <label for="email">Email Address</label>
                  <input v-model="form.contact_email" id="email" type="email" placeholder="john@example.com" required />
                </div>

                <div class="field">
                  <label for="phone">Phone Number</label>
                  <input v-model="form.contact_number" id="phone" type="tel" placeholder="+63 900 000 0000" />
                </div>

                <div class="field">
                  <label for="message">Message</label>
                  <textarea v-model="form.message" id="message" rows="4" placeholder="Tell us about your plans..." required></textarea>
                </div>

                <button type="submit" class="btn btn--primary btn--lg w-full" :disabled="isSubmitting">
                  {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                </button>

                <p v-if="successMsg" class="success-msg">{{ successMsg }}</p>
                <p v-if="errorMsg" class="error-msg">{{ errorMsg }}</p>
              </form>
            </div>
          </div>

          <!-- Contact Info & List -->
          <div class="info-container">
            <div class="info-stack">
              <div class="info-item">
                <div class="info-icon">📍</div>
                <div class="info-text">
                  <h3>Location</h3>
                  <p>Coastal Drive, RA7 Resort, Philippines</p>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon">📞</div>
                <div class="info-text">
                  <h3>Phone</h3>
                  <p>+63 912 345 6789</p>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon">✉️</div>
                <div class="info-text">
                  <h3>Email</h3>
                  <p>hello@ra7resort.com</p>
                </div>
              </div>
            </div>

            <!-- List Section (As requested) -->
            <div class="list-section">
              <div class="flex-between">
                <h2 class="sub-title">Recent Inquiries</h2>
                <button @click="fetchData" class="refresh-btn">↻ Refresh</button>
              </div>
              <div v-if="loading" class="loading-state">Loading records...</div>
              <div v-else-if="inquiries.length === 0" class="empty-state">No inquiries yet.</div>
              <div v-else class="record-list">
                <div v-for="item in inquiries.slice(0, 5)" :key="item.id" class="record-card">
                  <div class="record-header">
                    <span class="record-name">{{ item.firstname }} {{ item.lastname }}</span>
                    <span class="record-date">{{ formatDate(item.created_at) }}</span>
                  </div>
                  <p class="record-msg">{{ truncate(item.message) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container footer__inner">
        <div class="footer__brand">
          <div class="brand__mark brand__mark--sm" aria-hidden="true">RA7</div>
          <div>
            <div class="footer__name">RA7 Resort</div>
            <div class="footer__meta">© 2026 • Crafted for calm stays</div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

useHead({
  title: 'Contact Us | RA7 Resort',
  meta: [
    { name: 'description', content: 'Contact RA7 Resort for bookings and inquiries. We are here to help you plan your beach getaway.' }
  ]
})

const inquiries = ref([])
const loading = ref(true)
const isSubmitting = ref(false)
const successMsg = ref('')
const errorMsg = ref('')

const form = ref({
  firstname: '',
  lastname: '',
  contact_email: '',
  contact_number: '',
  message: ''
})

// Fetch data from Django API as requested
const fetchData = async () => {
  loading.value = true
  try {
    const response = await fetch('http://127.0.0.1:8000/api/ra7/contact/list/')
    if (!response.ok) throw new Error('Failed to fetch')
    inquiries.value = await response.json()
  } catch (err) {
    console.error('Error fetching list:', err)
  } finally {
    loading.value = false
  }
}

const submitForm = async () => {
  isSubmitting.value = true
  errorMsg.value = ''
  successMsg.value = ''
  
  try {
    const response = await fetch('http://127.0.0.1:8000/api/ra7/contact/create/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value)
    })
    
    if (response.ok) {
      successMsg.value = 'Thank you! Your message was sent successfully.'
      form.value = { firstname: '', lastname: '', contact_email: '', contact_number: '', message: '' }
      fetchData() // Refresh list
    } else {
      errorMsg.value = 'Something went wrong. Please try again.'
    }
  } catch (err) {
    errorMsg.value = 'Connection error. Is the server running?'
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  fetchData()
})

const formatDate = (dateStr: string) => {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

const truncate = (str: string) => {
  if (!str) return ''
  return str.length > 60 ? str.substring(0, 60) + '...' : str
}
</script>

<style scoped>
.page {
  --bg: #f5f7fb;
  --text: rgba(2, 6, 23, 0.92);
  --muted: rgba(2, 6, 23, 0.66);
  --muted2: rgba(2, 6, 23, 0.48);
  --accent: #f5c542;
  --accent2: #f59e0b;
  --shadow: 0 18px 60px rgba(2, 6, 23, 0.12);
  color: var(--text);
  background: radial-gradient(1200px 600px at 12% 6%, rgba(245, 197, 66, 0.1), transparent 58%),
    radial-gradient(900px 520px at 92% 12%, rgba(245, 158, 11, 0.08), transparent 58%),
    var(--bg);
  min-height: 100vh;
}

.container {
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
}

/* Reusing Topbar styles for consistency */
.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(14px);
  background: rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid rgba(2, 6, 23, 0.08);
  padding: 14px 0;
}

.topbar__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: inherit;
}

.brand__mark {
  height: 42px;
  width: 56px;
  border-radius: 14px;
  background: linear-gradient(135deg, #f5c542, #f59e0b);
  display: grid;
  place-items: center;
  font-weight: 800;
  color: white;
  box-shadow: 0 10px 20px rgba(245, 158, 11, 0.2);
}

.nav {
  display: flex;
  gap: 16px;
}

.nav__link {
  color: var(--muted);
  text-decoration: none;
  font-size: 14px;
  padding: 8px 12px;
  border-radius: 10px;
  transition: all 0.2s;
}

.nav__link:hover, .nav__link.is-active {
  color: var(--text);
  background: rgba(2, 6, 23, 0.04);
}

.btn {
  padding: 10px 20px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: transform 0.2s;
  text-decoration: none;
  display: inline-block;
  text-align: center;
}

.btn--primary {
  background: linear-gradient(135deg, #f5c542, #f59e0b);
  color: #291803;
  box-shadow: 0 10px 25px rgba(245, 158, 11, 0.15);
}

.btn--primary:hover {
  transform: translateY(-2px);
}

.btn--lg {
  padding: 14px 24px;
  font-size: 16px;
}

.w-full { width: 100%; }

/* Hero */
.contact-hero {
  padding: 80px 0 40px;
  text-align: center;
}

.hero-title {
  font-size: clamp(32px, 5vw, 56px);
  margin-bottom: 20px;
  letter-spacing: -1px;
}

.hero-title-accent {
  color: var(--accent2);
}

.hero-subtitle {
  color: var(--muted);
  max-width: 600px;
  margin: 0 auto;
  font-size: 18px;
  line-height: 1.6;
}

/* Grid Layout */
.contact-grid {
  padding-bottom: 100px;
}

.grid-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
}

@media (min-width: 860px) {
  .grid-layout {
    grid-template-columns: 1.2fr 0.8fr;
  }
}

/* Form Styles */
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(2, 6, 23, 0.08);
  border-radius: 24px;
  padding: 40px;
  box-shadow: var(--shadow);
}

.card-title {
  margin-bottom: 30px;
  font-size: 24px;
}

.input-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.field {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label {
  font-size: 14px;
  font-weight: 600;
  color: var(--muted);
}

input, textarea {
  padding: 14px;
  border-radius: 12px;
  border: 1px solid rgba(2, 6, 23, 0.1);
  background: rgba(255, 255, 255, 0.5);
  font-size: 15px;
  outline: none;
  transition: border-color 0.2s;
}

input:focus, textarea:focus {
  border-color: var(--accent2);
}

/* Info Section */
.info-stack {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 40px;
}

.info-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.info-icon {
  width: 48px;
  height: 48px;
  background: white;
  border-radius: 14px;
  display: grid;
  place-items: center;
  font-size: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.info-text h3 {
  font-size: 16px;
  margin: 0 0 4px;
}

.info-text p {
  color: var(--muted);
  margin: 0;
  font-size: 14px;
}

/* List Section */
.list-section {
  background: rgba(255, 255, 255, 0.4);
  border-radius: 24px;
  padding: 30px;
  border: 1px solid rgba(2, 6, 23, 0.05);
}

.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.sub-title {
  font-size: 18px;
  margin: 0;
}

.refresh-btn {
  background: none;
  border: none;
  color: var(--accent2);
  font-weight: 600;
  cursor: pointer;
  font-size: 13px;
}

.record-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.record-card {
  background: white;
  padding: 16px;
  border-radius: 16px;
  border: 1px solid rgba(2, 6, 23, 0.05);
}

.record-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
}

.record-name {
  font-weight: 700;
  font-size: 14px;
}

.record-date {
  font-size: 12px;
  color: var(--muted2);
}

.record-msg {
  font-size: 13px;
  color: var(--muted);
  margin: 0;
}

.loading-state, .empty-state {
  text-align: center;
  padding: 40px;
  color: var(--muted2);
  font-style: italic;
}

.success-msg { color: #059669; font-weight: 600; margin-top: 16px; text-align: center; }
.error-msg { color: #dc2626; font-weight: 600; margin-top: 16px; text-align: center; }

/* Footer */
.footer {
  border-top: 1px solid rgba(2, 6, 23, 0.08);
  padding: 40px 0;
  background: white;
}

.footer__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer__name { font-weight: 800; }
.footer__meta { color: var(--muted2); font-size: 12px; }
</style>