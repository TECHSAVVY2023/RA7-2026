<template>
  <div class="min-h-screen bg-[#f5f7fb] text-slate-950/92 [background:radial-gradient(1200px_600px_at_12%_6%,rgba(245,197,66,0.08),transparent_58%),radial-gradient(900px_520px_at_92%_12%,rgba(245,158,11,0.06),transparent_58%),#f5f7fb]">
    <main class="px-4 py-6 sm:px-6 lg:px-8">
      <div :class="containerClass">
        <NuxtLink to="/#gallery" class="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition duration-200 hover:border-amber-300 hover:text-amber-700">
          ← Back to gallery
        </NuxtLink>

        <section class="mt-12 rounded-[32px] border border-slate-950/10 bg-white/82 p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-[10px] sm:p-10 lg:p-14">
          <div class="max-w-3xl">
            <p class="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">Pool at dusk</p>
            <h1 class="mt-4 text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-5xl">A poolside gallery</h1>
            <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
              Browse the pool at dusk with soft lighting, calm water, and lounge moments captured in thoughtful gallery cards.
            </p>
          </div>

          <div class="mt-10 grid gap-6 grid-cols-1">
            <article v-for="item in galleryItems" :key="item.title" class="group overflow-hidden rounded-[28px] border border-slate-950/10 bg-white/90 shadow-sm transition hover:shadow-md">
              <div class="relative h-[300px] sm:h-[360px] lg:h-[420px] bg-slate-100 rounded-t-[14px] overflow-hidden border-b border-slate-950/8">
                <img :src="item.image" :alt="item.title" class="block w-full h-full object-cover object-center transition duration-300 group-hover:scale-105" />
              </div>
              <div class="p-6">
                <p class="text-xs font-semibold uppercase tracking-[0.28em] text-amber-600">{{ item.tag }}</p>
                <h2 class="mt-3 text-lg font-semibold text-slate-950">{{ item.title }}</h2>
                <p class="mt-2 text-sm leading-6 text-slate-700">{{ item.desc }}</p>
              </div>
            </article>
          </div>

          <div class="mt-10 flex flex-col gap-4 rounded-3xl border border-slate-950/10 bg-gradient-to-r from-amber-50 via-white to-orange-50 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Pool highlights</p>
              <p class="mt-2 text-base text-slate-900">Soft lighting, calm water, and thoughtful lounge details for sunset moments.</p>
            </div>
            <NuxtLink to="/" class="inline-flex items-center justify-center rounded-2xl bg-amber-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(245,158,11,0.18)] transition hover:bg-amber-600">
              Return home
            </NuxtLink>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Pool at dusk | RA7 Resort',
  meta: [
    { name: 'description', content: 'Explore the RA7 pool at dusk through a visual gallery of calm water, evening seating, and resort details.' }
  ]
})

const containerClass = 'mx-auto w-[min(1120px,calc(100%_-_40px))]'

const galleryItems = [
  { title: 'Evening glow by the pool', tag: 'Golden hour', desc: 'Warm ambient lighting transforms the pool edge into a soft, inviting relaxation zone.', image: '/images/landscape5.jpg' },
  { title: 'Lounge seats at dusk', tag: 'Quiet comfort', desc: 'Plush lounge seating and calm views make it easy to unwind as the evening cools.', image: '/images/landscape6.jpg' },
  { title: 'Terrace reflections', tag: 'Still water', desc: 'Light touches the water surface gently while the deck offers an open, tranquil view.', image: '/images/landscape11.jpg' },
  { title: 'Poolside path', tag: 'Resort rhythm', desc: 'Soft pathways and warm resort lights guide guests to a peaceful poolside retreat.', image: '/images/landscape7.jpg' },
]
</script>
