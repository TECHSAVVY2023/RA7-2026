<template>
  <div
    class="min-h-screen bg-[#f5f7fb] text-slate-950/92 [background:radial-gradient(1200px_600px_at_12%_6%,rgba(245,197,66,0.1),transparent_58%),radial-gradient(900px_520px_at_92%_12%,rgba(245,158,11,0.08),transparent_58%),#f5f7fb]"
  >
    <SiteNavbar />

    <main>
      <section class="px-0 pb-10 pt-20 text-center">
        <div :class="containerClass">
          <div>
            <h1 class="mb-5 text-[clamp(32px,5vw,56px)] tracking-[-1px]">
              Let’s <span class="text-amber-500">Connect</span>
            </h1>
            <p class="mx-auto my-0 max-w-150 text-lg leading-[1.6] text-slate-950/66">
              Have questions about your stay? We’re here to help you plan your perfect RA7 escape.
              Reach out and we'll get back to you shortly.
            </p>
          </div>
        </div>
      </section>

      <section class="pb-25">
        <div :class="[containerClass, 'grid grid-cols-1 gap-10 min-[860px]:grid-cols-[1.2fr_0.8fr]']">
          <div>
            <div :class="glassCardClass">
              <h2 class="mb-7.5 text-2xl font-bold">Send a Message</h2>
              <form @submit.prevent="submitForm">
                <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div class="mb-5 flex flex-col gap-2">
                    <label :class="labelClass" for="firstname">First Name</label>
                    <input id="firstname" v-model="form.firstname" :class="fieldClass" type="text" placeholder="John" required>
                  </div>
                  <div class="mb-5 flex flex-col gap-2">
                    <label :class="labelClass" for="lastname">Last Name</label>
                    <input id="lastname" v-model="form.lastname" :class="fieldClass" type="text" placeholder="Doe" required>
                  </div>
                </div>

                <div class="mb-5 flex flex-col gap-2">
                  <label :class="labelClass" for="email">Email Address</label>
                  <input id="email" v-model="form.contact_email" :class="fieldClass" type="email" placeholder="john@example.com" required>
                </div>

                <div class="mb-5 flex flex-col gap-2">
                  <label :class="labelClass" for="phone">Phone Number</label>
                  <input id="phone" v-model="form.contact_number" :class="fieldClass" type="tel" placeholder="+63 900 000 0000">
                </div>

                <div class="mb-5 flex flex-col gap-2">
                  <label :class="labelClass" for="message">Message</label>
                  <textarea id="message" v-model="form.message" :class="fieldClass" rows="4" placeholder="Tell us about your plans..." required />
                </div>

                <button type="submit" :class="[buttonBaseClass, buttonPrimaryClass, buttonLgClass, 'w-full disabled:cursor-not-allowed disabled:opacity-70']" :disabled="isSubmitting">
                  {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                </button>

                <p v-if="successMsg" class="mt-4 text-center font-semibold text-emerald-600">{{ successMsg }}</p>
                <p v-if="errorMsg" class="mt-4 text-center font-semibold text-red-600">{{ errorMsg }}</p>
              </form>
            </div>
          </div>

          <div>
            <div class="mb-10 flex flex-col gap-6">
              <div class="flex items-start gap-4">
                <div :class="infoIconClass">📍</div>
                <div>
                  <h3 class="m-0 mb-1 text-base font-bold">Location</h3>
                  <p class="m-0 text-sm text-slate-950/66">Coastal Drive, RA7 Resort, Philippines</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div :class="infoIconClass">📞</div>
                <div>
                  <h3 class="m-0 mb-1 text-base font-bold">Phone</h3>
                  <p class="m-0 text-sm text-slate-950/66">+63 912 345 6789</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div :class="infoIconClass">✉️</div>
                <div>
                  <h3 class="m-0 mb-1 text-base font-bold">Email</h3>
                  <p class="m-0 text-sm text-slate-950/66">hello@ra7resort.com</p>
                </div>
              </div>
            </div>

            <div class="rounded-3xl border border-slate-950/5 bg-white/40 p-7.5">
              <div class="mb-5 flex items-center justify-between">
                <h2 class="m-0 text-lg font-bold">Recent Inquiries</h2>
                <button class="cursor-pointer border-0 bg-transparent text-[13px] font-semibold text-amber-500" @click="fetchData">↻ Refresh</button>
              </div>
              <div v-if="loading" class="p-10 text-center italic text-slate-950/48">Loading records...</div>
              <div v-else-if="inquiries.length === 0" class="p-10 text-center italic text-slate-950/48">No inquiries yet.</div>
              <div v-else class="flex flex-col gap-3">
                <div v-for="item in inquiries.slice(0, 5)" :key="item.id" class="rounded-2xl border border-slate-950/5 bg-white p-4">
                  <div class="mb-1 flex justify-between gap-3">
                    <span class="text-sm font-bold">{{ item.firstname }} {{ item.lastname }}</span>
                    <span class="text-xs text-slate-950/48">{{ formatDate(item.created_at) }}</span>
                  </div>
                  <p class="m-0 text-[13px] text-slate-950/66">{{ truncate(item.message) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="border-t border-slate-950/8 bg-white py-10">
      <div :class="[containerClass, 'flex items-center justify-between']">
        <div class="flex items-center gap-3">
          <div :class="brandMarkClass" aria-hidden="true">RA7</div>
          <div>
            <div class="font-extrabold">RA7 Resort</div>
            <div class="text-xs text-slate-950/48">© 2026 • Crafted for calm stays</div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SiteNavbar from './component/navbar.vue'

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
const config = useRuntimeConfig()
const apiBase = String(config.public.apiBase).replace(/\/?$/, '/')

const containerClass = 'mx-auto w-[min(1120px,calc(100%_-_40px))]'
const brandMarkClass =
  'grid h-10.5 w-14 place-items-center rounded-[14px] bg-[linear-gradient(135deg,#f5c542,#f59e0b)] font-extrabold text-white shadow-[0_10px_20px_rgba(245,158,11,0.2)]'
const buttonBaseClass =
  'inline-block cursor-pointer rounded-xl border-0 px-5 py-2.5 text-center font-semibold no-underline transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transition-none'
const buttonPrimaryClass =
  'bg-[linear-gradient(135deg,#f5c542,#f59e0b)] text-[#291803] shadow-[0_10px_25px_rgba(245,158,11,0.15)]'
const buttonLgClass = 'px-6 py-3.5 text-base'
const glassCardClass =
  'rounded-3xl border border-slate-950/8 bg-white/70 p-6 shadow-[0_18px_60px_rgba(2,6,23,0.12)] backdrop-blur-[10px] sm:p-10'
const labelClass = 'text-sm font-semibold text-slate-950/66'
const fieldClass =
  'rounded-xl border border-slate-950/10 bg-white/50 p-3.5 text-[15px] outline-none transition-colors duration-200 focus:border-amber-500 motion-reduce:transition-none'
const infoIconClass =
  'grid h-12 w-12 shrink-0 place-items-center rounded-[14px] bg-white text-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)]'

const form = ref({
  contact_id: 'CID' + Date.now().toString(),
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
    const response = await fetch(`${apiBase}contact/list/`)
    if (!response.ok) throw new Error('Failed to fetch')
    inquiries.value = await response.json()
  } catch (err) {
    console.error('Error fetching list:', err)
    errorMsg.value = 'Unable to load recent inquiries.'
  } finally {
    loading.value = false
  }
}

const submitForm = async () => {
  isSubmitting.value = true
  errorMsg.value = ''
  successMsg.value = ''
  
  try {
    const response = await fetch(`${apiBase}contact/list/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value)
    })
    
    if (response.ok) {
      successMsg.value = 'Thank you! Your message was sent successfully.'
      form.value = {
        contact_id: 'CID' + Date.now().toString(),
        firstname: '',
        lastname: '',
        contact_email: '',
        contact_number: '',
        message: ''
      }
      fetchData() // Refresh list
    } else {
      errorMsg.value = 'Something went wrong. Please try again.'
    }
  } catch {
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
