<template>
  <div class="min-h-screen bg-white/50">
    <!-- Back Button -->
    <div class="sticky top-0 z-50 border-b border-slate-950/10 bg-white/95 backdrop-blur-sm">
      <div class="mx-auto flex max-w-7xl items-center px-6 py-4">
        <button
          class="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-slate-950/80 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-950"
          @click="goBackToStays('Super Deluxe')"
        >
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to stays
        </button>
      </div>
    </div>

    <!-- Page Content -->
    <div class="mx-auto max-w-7xl space-y-8 px-6 py-12">
      <!-- Room Photo Gallery -->
      <!-- @ts-ignore motion-v type incompatibility -->
      <Motion
        as="div"
        :initial="sectionInitial"
        :while-in-view="sectionInView"
        :in-view-options="cardInViewOptions"
        :transition="sectionTransition"
      >
        <div class="mb-5 grid gap-2">
          <h2 class="m-0 text-4xl font-bold tracking-[-0.4px] text-slate-950/92">Super Deluxe Gallery</h2>
          <p class="m-0 max-w-[70ch] text-base leading-normal text-slate-950/66">Explore the luxury and comfort of our premium rooms designed for an exceptional stay.</p>
        </div>

        <div class="grid grid-cols-1 gap-3 min-[860px]:grid-cols-2">
          <!-- @ts-ignore motion-v type incompatibility -->
          <Motion
            v-for="(item, index) in superDeluxeGalleryItems"
            :key="item.title"
            as="article"
            :initial="cardInitial"
            :while-in-view="cardInView"
            :in-view-options="cardInViewOptions"
            :transition="staggerTransition(index)"
            class="group overflow-hidden rounded-[22px] border border-slate-950/10 bg-white/86 shadow-[0_20px_55px_rgba(2,6,23,0.1)] transition-shadow duration-300 hover:shadow-[0_24px_64px_rgba(245,158,11,0.16)]"
          >
            <div class="relative h-60 min-[860px]:h-70 overflow-hidden rounded-t-[22px] bg-slate-100">
              <img :src="item.image" :alt="item.title" class="block w-full h-full object-cover object-center transition duration-500 group-hover:scale-110">
              <div class="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.01)_0%,rgba(2,6,23,0.15)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div class="p-5">
              <p class="m-0 text-xs font-bold uppercase tracking-[0.24em] text-amber-600">{{ item.tag }}</p>
              <h4 class="m-0 mt-3 text-lg font-bold text-slate-950/92">{{ item.title }}</h4>
              <p class="m-0 mt-2 text-sm leading-normal text-slate-950/66">{{ item.desc }}</p>
            </div>
          </Motion>
        </div>
      </Motion>

      <!-- Room Content Layout Section -->
      <!-- @ts-ignore motion-v type incompatibility -->
      <Motion
        as="div"
        :initial="sectionInitial"
        :while-in-view="sectionInView"
        :in-view-options="cardInViewOptions"
        :transition="sectionTransition"
        class="overflow-hidden rounded-[28px] border border-slate-950/10 bg-linear-to-br from-white/92 to-white/78 shadow-[0_20px_55px_rgba(2,6,23,0.1)] backdrop-blur-[6px]"
      >
        <div class="grid grid-cols-1 gap-6 p-6 min-[860px]:p-8 min-[860px]:grid-cols-[1.2fr_0.8fr] min-[860px]:gap-8">
          <!-- Content -->
          <div class="flex flex-col justify-between">
            <div>
              <p class="m-0 text-xs font-bold uppercase tracking-[0.24em] text-amber-600">Premium Accommodation</p>
              <h3 class="m-0 mt-3 text-3xl font-bold tracking-[-0.6px] text-slate-950/92">Garden View Room</h3>
              <p class="m-0 mt-4 text-base leading-relaxed text-slate-950/72">Experience spacious luxury with premium garden views and complimentary breakfast. Perfect for those seeking elevated comfort and refined amenities during their island escape.</p>
              
              <!-- Key Features -->
              <div class="mt-6 space-y-2">
                <div class="flex items-center gap-3 text-sm text-slate-950/72">
                  <span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-100/60 text-amber-700 text-xs font-bold">👥</span>
                  <span><strong>Capacity:</strong> 4 guests</span>
                </div>
                <div class="flex items-center gap-3 text-sm text-slate-950/72">
                  <span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-100/60 text-amber-700 text-xs font-bold">🛏️</span>
                  <span><strong>Beds:</strong> 1 King + 1 Queen (extra bed available at ₱300)</span>
                </div>
                <div class="flex items-center gap-3 text-sm text-slate-950/72">
                  <span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-100/60 text-amber-700 text-xs font-bold">🌳</span>
                  <span><strong>View:</strong> Garden view with private balcony</span>
                </div>
              </div>
            </div>

            <!-- CTA Button -->
            <button :class="[buttonBaseClass, buttonPrimaryClass, 'mt-6 min-[860px]:mt-0']" type="button" @click="scrollTo('book')">
              Reserve your stay
            </button>
          </div>

          <!-- Pricing Card -->
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-1 rounded-[20px] border border-amber-200/50 bg-linear-to-br from-amber-50/80 to-amber-50/40 p-6 shadow-[0_12px_32px_rgba(245,158,11,0.12)]">
              <p class="m-0 text-xs font-bold uppercase tracking-[0.2em] text-amber-700/80">Starting price</p>
              <div class="mt-2">
                <span class="text-4xl font-black tracking-[-0.8px] text-amber-950">₱0,00</span>
                <span class="ml-2 text-sm font-semibold text-amber-900/72">/ night</span>
              </div>
            </div>

            <!-- Inclusions Badge -->
            <div class="rounded-[18px] border border-slate-950/8 bg-white/70 p-4">
              <p class="m-0 mb-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-950/48">Includes</p>
              <div class="space-y-2">
                <div class="flex items-center gap-2.5 text-sm text-slate-950/72">
                  <span class="text-lg">🍳</span>
                  <span>Complimentary breakfast</span>
                </div>
                <div class="flex items-center gap-2.5 text-sm text-slate-950/72">
                  <span class="text-lg">📶</span>
                  <span>High-speed WiFi</span>
                </div>
                <div class="flex items-center gap-2.5 text-sm text-slate-950/72">
                  <span class="text-lg">🧖</span>
                  <span>Premium toiletries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Motion>

      <!-- Room Layout Visual & Amenities -->
      <div class="grid grid-cols-1 gap-3.5 min-[860px]:grid-cols-2">
        <!-- Room Floor Plan -->
        <!-- @ts-ignore motion-v type incompatibility -->
        <Motion
          as="div"
          :initial="cardInitial"
          :while-in-view="cardInView"
          :in-view-options="cardInViewOptions"
          :transition="sectionTransition"
          class="relative overflow-hidden rounded-[22px] border border-slate-950/10 bg-white/86 shadow-[0_20px_55px_rgba(2,6,23,0.1)] p-6"
        >
          <div class="mb-4">
            <h3 class="m-0 text-xl font-bold text-slate-950/92">Room Floor Plan</h3>
          </div>
          <div class="space-y-3 text-sm">
            <div class="rounded-lg bg-amber-50/60 p-4 border border-amber-200/40">
              <div class="font-bold text-amber-900/80 mb-2">🚪 Entrance Lobby</div>
              <div class="text-slate-950/66">Small welcoming entrance space with direct access to all room areas.</div>
            </div>
            <div class="rounded-lg bg-amber-50/60 p-4 border border-amber-200/40">
              <div class="font-bold text-amber-900/80 mb-2">🛋️ Sala (Living Area)</div>
              <div class="text-slate-950/66">Dedicated sitting and relaxation space with comfortable seating.</div>
            </div>
            <div class="rounded-lg bg-amber-50/60 p-4 border border-amber-200/40">
              <div class="font-bold text-amber-900/80 mb-2">🛏️ Bedroom</div>
              <div class="text-slate-950/66">Separate designated space for rest with premium bedding.</div>
            </div>
            <div class="rounded-lg bg-amber-50/60 p-4 border border-amber-200/40">
              <div class="font-bold text-amber-900/80 mb-2">🚿 Bathroom (CR)</div>
              <div class="text-slate-950/66">Modern shower facility with premium bathroom fixtures and amenities.</div>
            </div>
          </div>
        </Motion>

        <!-- Room Amenities -->
        <!-- @ts-ignore motion-v type incompatibility -->
        <Motion
          as="div"
          :initial="cardInitial"
          :while-in-view="cardInView"
          :in-view-options="cardInViewOptions"
          :transition="staggerTransition(1)"
          class="overflow-hidden rounded-[22px] border border-slate-950/10 bg-white/86 shadow-[0_20px_55px_rgba(2,6,23,0.1)] p-6"
        >
          <div class="mb-4">
            <h3 class="m-0 text-xl font-bold text-slate-950/92">Room Amenities</h3>
          </div>
          <div class="space-y-3">
            <div class="flex items-start gap-3 rounded-lg bg-linear-to-r from-amber-50/80 to-amber-50/40 p-4 border border-amber-200/40">
              <div class="text-2xl">❄️</div>
              <div>
                <div class="font-bold text-slate-950/92">Air Conditioning</div>
                <div class="text-sm text-slate-950/66">Full climate control for year-round comfort</div>
              </div>
            </div>
            <div class="flex items-start gap-3 rounded-lg bg-linear-to-r from-amber-50/80 to-amber-50/40 p-4 border border-amber-200/40">
              <div class="text-2xl">📺</div>
              <div>
                <div class="font-bold text-slate-950/92">Television</div>
                <div class="text-sm text-slate-950/66">Entertainment at your leisure</div>
              </div>
            </div>
            <div class="flex items-start gap-3 rounded-lg bg-linear-to-r from-amber-50/80 to-amber-50/40 p-4 border border-amber-200/40">
              <div class="text-2xl">👔</div>
              <div>
                <div class="font-bold text-slate-950/92">Wardrobes</div>
                <div class="text-sm text-slate-950/66">Ample storage for your belongings</div>
              </div>
            </div>
            <div class="flex items-start gap-3 rounded-lg bg-linear-to-r from-amber-50/80 to-amber-50/40 p-4 border border-amber-200/40">
              <div class="text-2xl">🍽️</div>
              <div>
                <div class="font-bold text-slate-950/92">Complimentary Breakfast</div>
                <div class="text-sm text-slate-950/66">Fresh daily breakfast included with your stay</div>
              </div>
            </div>
            <div class="flex items-start gap-3 rounded-lg bg-linear-to-r from-amber-50/80 to-amber-50/40 p-4 border border-amber-200/40">
              <div class="text-2xl">📶</div>
              <div>
                <div class="font-bold text-slate-950/92">Free WiFi</div>
                <div class="text-sm text-slate-950/66">High-speed internet throughout the room</div>
              </div>
            </div>
          </div>
        </Motion>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Motion } from 'motion-v'



const superDeluxeGalleryItems = [
  { title: 'Premium king suite', tag: 'Spacious comfort', desc: 'Luxurious sleeping quarters with premium bedding and sophisticated decor.', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop' },
  { title: 'Garden view balcony', tag: 'Scenic vistas', desc: 'Private outdoor space overlooking lush gardens and resort grounds.', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop' },
  { title: 'Spa-inspired bathroom', tag: 'Luxury amenities', desc: 'Rainfall shower and premium toiletries for ultimate relaxation.', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop' },
  { title: 'Living room lounge', tag: 'Entertainment hub', desc: 'Comfortable seating area with entertainment system and ambient lighting.', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop' },
]

const sectionInitial = { opacity: 0, y: 20 } as const
const sectionInView = { opacity: 1, y: 0 } as const
const cardInitial = { opacity: 0, scale: 0.95 } as const
const cardInView = { opacity: 1, scale: 1 } as const
const cardInViewOptions = { once: true, margin: '0px 0px -8% 0px' } as const
const sectionTransition = { type: 'spring' as const, stiffness: 100, damping: 15, duration: 0.6 } as const

function staggerTransition(index: number) {
  return {
    type: 'spring' as const,
    stiffness: 100,
    damping: 15,
    duration: 0.6,
    delay: index * 0.1,
  } as const
}

function scrollTo(id: string) {
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function goBackToStays(tab: string) {
  if (import.meta.client) {
    localStorage.setItem('selectedStayTab', tab)
  }
  navigateTo('/#stays')
}

const buttonBaseClass = 'inline-flex items-center justify-center gap-2 rounded-[14px] px-6 py-3 text-sm font-semibold transition-all duration-200 cursor-pointer'
const buttonPrimaryClass = 'border border-white/92 bg-gradient-to-b from-amber-300 to-amber-400 text-slate-950 hover:-translate-y-px hover:border-white/98 active:translate-y-0'
</script>
