<template>
  <div class="min-h-screen bg-[#f5f7fb] text-slate-950/92 [background:radial-gradient(1200px_600px_at_12%_6%,rgba(245,197,66,0.08),transparent_58%),radial-gradient(900px_520px_at_92%_12%,rgba(245,158,11,0.06),transparent_58%),#f5f7fb]">
    <main class="px-4 py-6 sm:px-6 lg:px-8">
      <div :class="containerClass">
        <NuxtLink
          to="/#gallery"
          class="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition duration-200 hover:border-amber-300 hover:text-amber-700"
        >
          ← Back to gallery
        </NuxtLink>

        <section class="mt-12 rounded-[32px] border border-slate-950/10 bg-white/82 p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-[10px] sm:p-10 lg:p-14">
          <div class="max-w-3xl">
            <p class="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">Lobby & welcome</p>
            <h1 class="mt-4 text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-5xl">Lobby gallery</h1>
            <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
              Explore the lobby in a rich gallery of arrival moments, welcome details, and cozy lounge scenes.
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
              <p class="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Lobby highlights</p>
              <p class="mt-2 text-base text-slate-900">A warm welcome, curated lounge areas, and a calm arrival atmosphere.</p>
            </div>
            <NuxtLink
              to="/"
              class="inline-flex items-center justify-center rounded-2xl bg-amber-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(245,158,11,0.18)] transition hover:bg-amber-600"
            >
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
  title: 'Lobby & welcome | RA7 Resort',
  meta: [
    { name: 'description', content: 'Browse the RA7 lobby gallery with arrival scenes, lounge spaces, and welcome details.' }
  ]
})

const containerClass = 'mx-auto w-[min(1120px,calc(100%_-_40px))]'

const galleryItems = [
  {
    title: 'Sunlit arrival lounge',
    tag: 'Welcome lounge',
    desc: 'Natural light and warm textures create a calm first impression for every guest.',
    image: '/images/landscape14.jpg',
  },
  {
    title: 'Quiet seating nook',
    tag: 'Soft retreat',
    desc: 'A comfortable lounge corner with cozy seating for pre-check-in relaxation.',
    image: '/images/landscape15.jpg',
  },
  {
    title: 'Service desk details',
    tag: 'Smooth arrival',
    desc: 'A welcoming desk experience features thoughtful design and quick check-in service.',
    image: '/images/landscape16.jpg',
  },
  {
    title: 'Lobby artwork',
    tag: 'Local character',
    desc: 'Curated art and natural accents bring the RA7 lobby to life with a gentle island palette.',
    image: '/images/landscape1.jpg',
  },
]
</script>
