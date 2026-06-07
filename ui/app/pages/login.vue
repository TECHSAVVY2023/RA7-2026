<template>
  <Motion
    as="div"
    :initial="pageInitial"
    :animate="pageAnimate"
    :transition="pageTransition"
    class="min-h-dvh bg-white lg:flex"
  >
    <Motion
      as="div"
      :initial="leftPanelInitial"
      :animate="panelAnimate"
      :transition="panelTransition(0)"
      class="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-amber-50 via-orange-50 to-white items-center justify-center p-12 relative overflow-hidden"
    >
      <Motion
        as="div"
        :initial="fadeInitial"
        :animate="fadeAnimate"
        :transition="softTransition(0.2)"
        class="absolute inset-0"
      >
        <Motion
          as="div"
          :initial="{ opacity: 0, scale: 0.85, x: 40, y: -30 }"
          :animate="{ opacity: 0.6, scale: 1, x: 0, y: 0 }"
          :transition="blobTransition(0.15)"
          class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-200/30 to-transparent rounded-full blur-3xl opacity-60 animate-pulse"
        />
        <Motion
          as="div"
          :initial="{ opacity: 0, scale: 0.85, x: -40, y: 30 }"
          :animate="{ opacity: 0.6, scale: 1, x: 0, y: 0 }"
          :transition="blobTransition(0.28)"
          class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-200/30 to-transparent rounded-full blur-3xl opacity-60 animate-pulse"
        />
      </Motion>

      <Motion
        as="div"
        :initial="contentInitial"
        :animate="contentAnimate"
        :transition="softTransition(0.18)"
        class="relative w-full max-w-lg text-center"
      >
        <div class="space-y-6">
          <Motion
            as="div"
            :initial="riseInitial"
            :animate="riseAnimate"
            :transition="staggerTransition(0)"
            class="flex justify-center"
          >
            <NuxtLink
              to="/"
              class="inline-flex h-44 w-44 items-center justify-center overflow-hidden rounded-full bg-white shadow-xl shadow-amber-200/30 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              aria-label="Go to RA7 Resort home"
            >
              <img 
                src="/ra7-logo.png" 
                alt="RA7 Resort Paradise" 
                class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </NuxtLink>
          </Motion>
          <Motion
            as="div"
            :initial="riseInitial"
            :animate="riseAnimate"
            :transition="staggerTransition(1)"
          >
            <h2 class="text-5xl font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent leading-tight mb-3">
              Escape to Paradise
            </h2>
            <p class="text-xl text-slate-600 font-light">Experience luxury redefined at RA7 Resort</p>
          </Motion>

          <Motion
            as="div"
            :initial="riseInitial"
            :animate="riseAnimate"
            :transition="staggerTransition(2)"
            class="grid grid-cols-2 gap-4 pt-4"
          >
            <Motion
              v-for="(feature, index) in featureCards"
              :key="feature.title"
              as="div"
              :initial="cardInitial"
              :animate="cardAnimate"
              :while-hover="cardHover"
              :transition="staggerTransition(index, 0.34)"
              class="bg-white/70 backdrop-blur-md rounded-2xl p-4 border border-white/50 hover:bg-white/90 transition-all"
            >
              <Motion
                as="div"
                :initial="{ scale: 0.7, rotate: -8 }"
                :animate="{ scale: 1, rotate: 0 }"
                :transition="staggerTransition(index, 0.48)"
                class="text-3xl mb-2"
              >
                {{ feature.icon }}
              </Motion>
              <p class="text-sm font-semibold text-slate-900">{{ feature.title }}</p>
              <p class="text-xs text-slate-600">{{ feature.text }}</p>
            </Motion>
          </Motion>

          <Motion
            as="div"
            :initial="riseInitial"
            :animate="riseAnimate"
            :transition="staggerTransition(3)"
            class="flex items-center justify-center gap-6 pt-4"
          >
            <Motion as="div" :initial="cardInitial" :animate="cardAnimate" :transition="staggerTransition(0, 0.52)" class="text-center">
              <p class="text-2xl font-bold text-amber-600">4.9★</p>
              <p class="text-xs text-slate-600">1.2K Reviews</p>
            </Motion>
            <Motion as="div" :initial="{ opacity: 0, scaleY: 0 }" :animate="{ opacity: 1, scaleY: 1 }" :transition="softTransition(0.62)" class="w-px h-12 bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
            <Motion as="div" :initial="cardInitial" :animate="cardAnimate" :transition="staggerTransition(1, 0.52)" class="text-center">
              <p class="text-2xl font-bold text-amber-600">15K+</p>
              <p class="text-xs text-slate-600">Happy Guests</p>
            </Motion>
          </Motion>
        </div>
      </Motion>
    </Motion>
    <Motion
      as="div"
      :initial="rightPanelInitial"
      :animate="panelAnimate"
      :transition="panelTransition(0.12)"
      class="relative w-full lg:w-1/2 bg-white flex min-h-dvh flex-col items-center justify-start lg:justify-center px-6 pt-16 pb-6 sm:px-8 sm:pt-20 sm:pb-8 lg:px-12 lg:py-10"
    >
      <Motion
        as="div"
        :initial="{ opacity: 0, x: -16 }"
        :animate="{ opacity: 1, x: 0 }"
        :transition="softTransition(0.28)"
        class="absolute left-6 top-6 sm:left-8 lg:left-12"
      >
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-amber-300 hover:text-amber-700 hover:shadow-md"
          aria-label="Return to home page"
        >
          <Icon name="lucide:arrow-left" class="h-4 w-4" aria-hidden="true" />
          <span>Home</span>
        </NuxtLink>
      </Motion>
      <Motion
        as="div"
        :initial="contentInitial"
        :animate="contentAnimate"
        :transition="softTransition(0.22)"
        class="w-full max-w-md"
      >
        <Motion
          as="div"
          :initial="riseInitial"
          :animate="riseAnimate"
          :transition="staggerTransition(0)"
          class="mb-4 sm:mb-8 lg:mb-10 text-center"
        >

          <p class="mb-1 sm:mb-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">RA7 Resort</p>
          <h1 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-2 sm:mb-3">Welcome!</h1>
          <p class="text-slate-600 text-base sm:text-lg">Sign in to access exclusive offers</p>
        </Motion>

        <Motion
          as="div"
          :initial="riseInitial"
          :animate="riseAnimate"
          :transition="staggerTransition(1)"
          class="space-y-4 sm:space-y-6"
        >
          <Motion
            v-if="error" 
            as="div"
            :initial="{ opacity: 0, y: -12, scale: 0.98 }"
            :animate="{ opacity: 1, y: 0, scale: 1 }"
            :transition="softTransition(0)"
            class="p-4 bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 rounded-lg"
          >
            <div class="flex items-center gap-3">
              <svg class="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
              <p class="text-red-800 font-medium">{{ error }}</p>
            </div>
          </Motion>

          <Motion
            as="div"
            :initial="cardInitial"
            :animate="cardAnimate"
            :while-hover="{ y: -2, scale: 1.01 }"
            :transition="staggerTransition(2)"
          >
            <button
              @click="handleGoogleLogin"
              :disabled="isLoading"
              type="button"
              class="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 p-px transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <div class="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div class="relative flex items-center justify-center gap-3 px-6 py-4 bg-white group-hover:bg-transparent transition-colors duration-300">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <span class="font-semibold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent group-hover:text-white transition-colors duration-300">
                  <span v-if="isLoading">✨ Signing in...</span>
                  <span v-else>Continue with Google</span>
                </span>
              </div>
            </button>
          </Motion>

          <Motion as="div" :initial="fadeInitial" :animate="fadeAnimate" :transition="staggerTransition(3)" class="relative py-3 sm:py-6">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-slate-200"></div>
            </div>
            <div class="relative flex justify-center">
              <span class="px-4 bg-white text-sm font-medium text-slate-500">One-click secure login</span>
            </div>
          </Motion>

          <Motion as="div" :initial="riseInitial" :animate="riseAnimate" :transition="staggerTransition(4)" class="space-y-2 sm:space-y-3">
            <Motion
              v-for="(benefit, index) in loginBenefits"
              :key="benefit"
              as="div"
              :initial="{ opacity: 0, x: -14 }"
              :animate="{ opacity: 1, x: 0 }"
              :transition="staggerTransition(index, 0.48)"
              class="flex items-center gap-3 text-sm"
            >
              <div class="flex-shrink-0">
                <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <p class="text-slate-600">{{ benefit }}</p>
            </Motion>
          </Motion>

          <Motion as="p" :initial="fadeInitial" :animate="fadeAnimate" :transition="staggerTransition(5)" class="text-center text-xs text-slate-500 leading-relaxed pt-2 sm:pt-4">
            By signing in, you agree to our
            <NuxtLink to="/terms" class="text-amber-600 hover:text-amber-700 font-semibold">
              Terms
            </NuxtLink>
            and
            <NuxtLink to="/privacy" class="text-amber-600 hover:text-amber-700 font-semibold">
              Privacy Policy
            </NuxtLink>
          </Motion>
        </Motion>

      </Motion>

      <Motion
        as="div"
        :initial="fadeInitial"
        :animate="fadeAnimate"
        :transition="staggerTransition(6)"
        class="w-full max-w-md mt-auto pt-4 sm:pt-6 lg:pt-8 border-t border-slate-100 text-center"
      >
        <p class="text-xs sm:text-sm text-slate-500">
          <span class="font-semibold text-slate-700">RA7 Resort</span> • Luxury Redefined
        </p>
        <p class="text-xs text-slate-400 mt-1 sm:mt-2">© 2026 RA7 Resort. All rights reserved.</p>
      </Motion>
    </Motion>
  </Motion>
</template>

<script setup lang="ts">
import { Motion } from 'motion-v'
import type { MotionProps } from 'motion-v'
import { useGoogleAuth } from '~/composables/useGoogleAuth'

const { isLoading, error, handleGoogleLogin } = useGoogleAuth()

definePageMeta({
  layout: 'blank'
})

type MotionTransition = MotionProps['transition']

const pageInitial = { opacity: 0 }
const pageAnimate = { opacity: 1 }
const pageTransition: MotionTransition = { duration: 0.42, ease: [0.22, 1, 0.36, 1] }
const leftPanelInitial = { opacity: 0, x: -34 }
const rightPanelInitial = { opacity: 0, x: 34 }
const panelAnimate = { opacity: 1, x: 0 }
const fadeInitial = { opacity: 0 }
const fadeAnimate = { opacity: 1 }
const contentInitial = { opacity: 0, y: 20, scale: 0.985 }
const contentAnimate = { opacity: 1, y: 0, scale: 1 }
const riseInitial = { opacity: 0, y: 18 }
const riseAnimate = { opacity: 1, y: 0 }
const cardInitial = { opacity: 0, y: 16, scale: 0.96 }
const cardAnimate = { opacity: 1, y: 0, scale: 1 }
const cardHover = { y: -4, scale: 1.025 }

const featureCards = [
  { icon: '🌅', title: 'Sunrise Views', text: 'From every room' },
  { icon: '🌴', title: 'Tropical Bliss', text: 'Pure paradise' },
  { icon: '⭐', title: 'Luxury Service', text: '5-star experience' },
  { icon: '🏖️', title: 'Private Beach', text: 'Exclusive access' },
]

const loginBenefits = [
  'Bank-level encryption',
  'Your data is never shared',
  'Verified by Google',
]

function panelTransition(delay = 0): MotionTransition {
  return { duration: 0.78, delay, ease: [0.22, 1, 0.36, 1] }
}

function softTransition(delay = 0): MotionTransition {
  return { duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] }
}

function blobTransition(delay = 0): MotionTransition {
  return { duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }
}

function staggerTransition(index: number, baseDelay = 0.16): MotionTransition {
  return {
    duration: 0.56,
    delay: baseDelay + Math.min(index * 0.075, 0.36),
    ease: [0.22, 1, 0.36, 1],
  }
}
</script>
