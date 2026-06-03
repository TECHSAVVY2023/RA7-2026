<template>
  <div class="min-h-screen bg-white flex">
    <div class="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-amber-50 via-orange-50 to-white items-center justify-center p-12 relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-200/30 to-transparent rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-200/30 to-transparent rounded-full blur-3xl opacity-60 animate-pulse"></div>
      </div>

      <div class="relative z-10 text-center space-y-12 max-w-lg">
        <div class="space-y-6">
          <div>
            <div class="flex justify-center items-center w-full">hi
  <Link to="/">
    <img 
      src="/images/landscape1.jpg" 
      alt="Logo" 
      class="h-10 w-auto object-contain transition duration-150 hover:scale-105 active:scale-95"
    />
  </Link>
</div>
            <h2 class="text-5xl font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent leading-tight mb-3">
              Escape to Paradise
            </h2>
            <p class="text-xl text-slate-600 font-light">Experience luxury redefined at RA7 Resort</p>
          </div>

          <div class="grid grid-cols-2 gap-4 pt-4">
            <div class="bg-white/70 backdrop-blur-md rounded-2xl p-4 border border-white/50 hover:bg-white/90 transition-all">
              <div class="text-3xl mb-2">🌅</div>
              <p class="text-sm font-semibold text-slate-900">Sunrise Views</p>
              <p class="text-xs text-slate-600">From every room</p>
            </div>
            <div class="bg-white/70 backdrop-blur-md rounded-2xl p-4 border border-white/50 hover:bg-white/90 transition-all">
              <div class="text-3xl mb-2">🌴</div>
              <p class="text-sm font-semibold text-slate-900">Tropical Bliss</p>
              <p class="text-xs text-slate-600">Pure paradise</p>
            </div>
            <div class="bg-white/70 backdrop-blur-md rounded-2xl p-4 border border-white/50 hover:bg-white/90 transition-all">
              <div class="text-3xl mb-2">⭐</div>
              <p class="text-sm font-semibold text-slate-900">Luxury Service</p>
              <p class="text-xs text-slate-600">5-star experience</p>
            </div>
            <div class="bg-white/70 backdrop-blur-md rounded-2xl p-4 border border-white/50 hover:bg-white/90 transition-all">
              <div class="text-3xl mb-2">🏖️</div>
              <p class="text-sm font-semibold text-slate-900">Private Beach</p>
              <p class="text-xs text-slate-600">Exclusive access</p>
            </div>
          </div>

          <div class="flex items-center justify-center gap-6 pt-4">
            <div class="text-center">
              <p class="text-2xl font-bold text-amber-600">4.9★</p>
              <p class="text-xs text-slate-600">1.2K Reviews</p>
            </div>
            <div class="w-px h-12 bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
            <div class="text-center">
              <p class="text-2xl font-bold text-amber-600">15K+</p>
              <p class="text-xs text-slate-600">Happy Guests</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full lg:w-1/2 bg-white flex flex-col items-center justify-center px-6 py-12 sm:px-8 lg:px-12">
      <div class="w-full max-w-md">
        <div class="text-center mb-12 lg:hidden">
          <h1 class="text-4xl font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent mb-2">
            RA7 Resort
          </h1>
          <p class="text-slate-600">Step into luxury</p>
        </div>

        <div class="text-center mb-10">
          <h1 class="text-4xl font-bold text-slate-900 mb-3">Welcome!</h1>
          <p class="text-slate-600 text-lg">Sign in to access exclusive offers</p>
        </div>

        <div class="space-y-6">
          <div 
            v-if="error" 
            class="p-4 bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 rounded-lg"
          >
            <div class="flex items-center gap-3">
              <svg class="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
              <p class="text-red-800 font-medium">{{ error }}</p>
            </div>
          </div>

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

          <div class="relative py-6">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-slate-200"></div>
            </div>
            <div class="relative flex justify-center">
              <span class="px-4 bg-white text-sm font-medium text-slate-500">One-click secure login</span>
            </div>
          </div>

          <div class="space-y-3">
            <div class="flex items-center gap-3 text-sm">
              <div class="flex-shrink-0">
                <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <p class="text-slate-600">Bank-level encryption</p>
            </div>
            <div class="flex items-center gap-3 text-sm">
              <div class="flex-shrink-0">
                <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <p class="text-slate-600">Your data is never shared</p>
            </div>
            <div class="flex items-center gap-3 text-sm">
              <div class="flex-shrink-0">
                <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
              <p class="text-slate-600">Verified by Google</p>
            </div>
          </div>

          <p class="text-center text-xs text-slate-500 leading-relaxed pt-4">
            By signing in, you agree to our
            <NuxtLink to="/terms" class="text-amber-600 hover:text-amber-700 font-semibold">
              Terms
            </NuxtLink>
            and
            <NuxtLink to="/privacy" class="text-amber-600 hover:text-amber-700 font-semibold">
              Privacy Policy
            </NuxtLink>
          </p>
        </div>

        <div class="mt-12 pt-8 border-t border-slate-100 text-center">
          <p class="text-sm text-slate-500">
            <span class="font-semibold text-slate-700">RA7 Resort</span> • Luxury Redefined
          </p>
          <p class="text-xs text-slate-400 mt-2">© 2026 RA7 Resort. All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGoogleAuth } from '~/composables/useGoogleAuth'

const { isLoading, error, handleGoogleLogin } = useGoogleAuth()

definePageMeta({
  layout: 'blank'
})
</script>