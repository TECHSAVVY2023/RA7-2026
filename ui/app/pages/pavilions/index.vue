<template>
  <div class="min-h-screen bg-white/50">
    <!-- Back Button -->
    <div class="sticky top-0 z-50 border-b border-slate-950/10 bg-white/95 backdrop-blur-sm">
      <div class="mx-auto flex max-w-7xl items-center px-6 py-4">
        <button
          class="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-slate-950/80 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-950"
          @click="goBackToStays('Pavilions')"
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
          <h2 class="m-0 text-4xl font-bold tracking-[-0.4px] text-slate-950/92">Luxury Pavilion Gallery</h2>
          <p class="m-0 max-w-[70ch] text-base leading-normal text-slate-950/66">Indulge in ultimate luxury with our exclusive Pavilion accommodations featuring private amenities and expansive living spaces.</p>
        </div>

        <div class="grid grid-cols-1 gap-3 min-[860px]:grid-cols-2">
          <!-- @ts-ignore motion-v type incompatibility -->
          <Motion
            v-for="(item, index) in pavilionGalleryItems"
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
              <p class="m-0 text-xs font-bold uppercase tracking-[0.24em] text-amber-600">Exclusive Luxury</p>
              <h3 class="m-0 mt-3 text-3xl font-bold tracking-[-0.6px] text-slate-950/92">Luxury Pavilion</h3>
              <p class="m-0 mt-4 text-base leading-relaxed text-slate-950/72">Experience unparalleled luxury in our exclusive Pavilions. With sprawling private spaces, premium amenities including a private pool, and personalized butler service, these are perfect for families or guests seeking the ultimate resort experience.</p>
              
              <!-- Key Features -->
              <div class="mt-6 space-y-2">
                <div class="flex items-center gap-3 text-sm text-slate-950/72">
                  <span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-100/60 text-amber-700 text-xs font-bold">👥</span>
                  <span><strong>Capacity:</strong> 4+ guests (Family-friendly)</span>
                </div>
                <div class="flex items-center gap-3 text-sm text-slate-950/72">
                  <span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-100/60 text-amber-700 text-xs font-bold">🛏️</span>
                  <span><strong>Beds:</strong> 2 King Beds + Multi-room Configuration</span>
                </div>
                <div class="flex items-center gap-3 text-sm text-slate-950/72">
                  <span class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-100/60 text-amber-700 text-xs font-bold">📐</span>
                  <span><strong>Size:</strong> 120 m²</span>
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
                  <span class="text-lg">🏊</span>
                  <span>Private pool access</span>
                </div>
                <div class="flex items-center gap-2.5 text-sm text-slate-950/72">
                  <span class="text-lg">🍽️</span>
                  <span>Private dining area</span>
                </div>
                <div class="flex items-center gap-2.5 text-sm text-slate-950/72">
                  <span class="text-lg">👔</span>
                  <span>Butler service</span>
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
            <h3 class="m-0 text-xl font-bold text-slate-950/92">Pavilion Layout</h3>
          </div>
          <div class="space-y-3 text-sm">
            <div class="rounded-lg bg-amber-50/60 p-4 border border-amber-200/40">
              <div class="font-bold text-amber-900/80 mb-2">🚪 Grand Entrance</div>
              <div class="text-slate-950/66">Spacious foyer with direct access to all pavilion areas.</div>
            </div>
            <div class="rounded-lg bg-amber-50/60 p-4 border border-amber-200/40">
              <div class="font-bold text-amber-900/80 mb-2">🛋️ Sala & Living Area</div>
              <div class="text-slate-950/66">Expansive living and entertainment space for relaxation.</div>
            </div>
            <div class="rounded-lg bg-amber-50/60 p-4 border border-amber-200/40">
              <div class="font-bold text-amber-900/80 mb-2">🛏️ Master Bedroom Suite</div>
              <div class="text-slate-950/66">Luxurious master bedroom with premium furnishings.</div>
            </div>
            <div class="rounded-lg bg-amber-50/60 p-4 border border-amber-200/40">
              <div class="font-bold text-amber-900/80 mb-2">🏊 Private Pool Deck</div>
              <div class="text-slate-950/66">Exclusive outdoor area with private swimming pool.</div>
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
            <h3 class="m-0 text-xl font-bold text-slate-950/92">Pavilion Amenities</h3>
          </div>
          <div class="space-y-3">
            <div class="flex items-start gap-3 rounded-lg bg-linear-to-r from-amber-50/80 to-amber-50/40 p-4 border border-amber-200/40">
              <div class="text-2xl">🏊</div>
              <div>
                <div class="font-bold text-slate-950/92">Private Pool</div>
                <div class="text-sm text-slate-950/66">Exclusive swimming pool for pavilion guests</div>
              </div>
            </div>
            <div class="flex items-start gap-3 rounded-lg bg-linear-to-r from-amber-50/80 to-amber-50/40 p-4 border border-amber-200/40">
              <div class="text-2xl">👔</div>
              <div>
                <div class="font-bold text-slate-950/92">Butler Service</div>
                <div class="text-sm text-slate-950/66">Personalized butler assistance 24/7</div>
              </div>
            </div>
            <div class="flex items-start gap-3 rounded-lg bg-linear-to-r from-amber-50/80 to-amber-50/40 p-4 border border-amber-200/40">
              <div class="text-2xl">🍽️</div>
              <div>
                <div class="font-bold text-slate-950/92">Private Dining Area</div>
                <div class="text-sm text-slate-950/66">Exclusive dining space and kitchen facilities</div>
              </div>
            </div>
            <div class="flex items-start gap-3 rounded-lg bg-linear-to-r from-amber-50/80 to-amber-50/40 p-4 border border-amber-200/40">
              <div class="text-2xl">🛁</div>
              <div>
                <div class="font-bold text-slate-950/92">Luxury Spa Bath</div>
                <div class="text-sm text-slate-950/66">Premium bathroom with soaking tub and rainfall shower</div>
              </div>
            </div>
            <div class="flex items-start gap-3 rounded-lg bg-linear-to-r from-amber-50/80 to-amber-50/40 p-4 border border-amber-200/40">
              <div class="text-2xl">🎬</div>
              <div>
                <div class="font-bold text-slate-950/92">Home Theater System</div>
                <div class="text-sm text-slate-950/66">State-of-the-art entertainment system</div>
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

useHead({
  title: 'Luxury Pavilion - RA7 Resort',
  meta: [
    { name: 'description', content: 'Experience ultimate luxury in our Pavilion. 120 m² of exclusive space with private pool, butler service, and premium amenities for families.' },
    { property: 'og:title', content: 'Luxury Pavilion - RA7 Resort' },
    { property: 'og:description', content: 'Ultimate luxury with private pool, butler service, and exclusive amenities. Perfect for family vacations.' },
  ],
})

const pavilionGalleryItems = [
  { title: 'Master suite opulence', tag: 'Ultra-luxury', desc: 'Expansive bedroom with premium linens and luxurious furnishings throughout.', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop' },
  { title: 'Private resort pool', tag: 'Exclusive amenity', desc: 'Your own private swimming pool with stunning views and complete privacy.', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop' },
  { title: 'Spa-inspired luxury bath', tag: 'Premium facilities', desc: 'Sophisticated bathroom with soaking tub, rainfall shower, and premium toiletries.', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop' },
  { title: 'Grand living pavilion', tag: 'Entertainment hub', desc: 'Spacious living area with state-of-the-art entertainment and panoramic views.', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop' },
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
  if (process.client) {
    localStorage.setItem('selectedStayTab', tab)
  }
  navigateTo('/#stays')
}

const buttonBaseClass = 'inline-flex items-center justify-center gap-2 rounded-[14px] px-6 py-3 text-sm font-semibold transition-all duration-200 cursor-pointer'
const buttonPrimaryClass = 'border border-white/92 bg-gradient-to-b from-amber-300 to-amber-400 text-slate-950 hover:-translate-y-px hover:border-white/98 active:translate-y-0'
</script>
