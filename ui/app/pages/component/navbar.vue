<template>
  <header
    class="sticky top-0 z-10 border-b border-slate-950/8 bg-gradient-to-b from-[#f5f7fb]/92 to-[#f5f7fb]/70 backdrop-blur-[14px]"
  >
    <div
      class="mx-auto grid w-[min(1120px,calc(100%_-_40px))] grid-cols-1 gap-3.5 py-3.5 min-[860px]:grid-cols-[1fr_auto_1fr] min-[860px]:items-center"
    >
      <div class="flex min-w-60 items-center gap-3" aria-label="RA7 Resort">
        <NuxtLink
          to="/#homepage"
          class="grid h-[42px] w-14 place-items-center rounded-[14px] bg-[linear-gradient(135deg,rgba(255,246,197,0.92)_0%,rgba(245,197,66,0.98)_38%,rgba(245,158,11,0.92)_68%,rgba(154,107,18,0.92)_100%)] font-extrabold tracking-[0.5px] text-white/95 shadow-[0_12px_26px_rgba(245,158,11,0.22),0_8px_18px_rgba(245,197,66,0.18)] cursor-pointer transition duration-150 hover:brightness-105"
        >
          RA7
        </NuxtLink>
        <div>
          <div class="font-bold tracking-[0.2px] text-slate-950/92">RA7 Resort</div>
          <div class="mt-0.5 text-xs text-slate-950/48">Beach • Nature • Comfort</div>
        </div>
      </div>

      <nav class="hidden flex-wrap items-center justify-center gap-4 min-[860px]:flex" aria-label="Primary">
        <a
          v-for="link in navLinks"
          :key="link.href"
          class="rounded-xl px-2.5 py-2 text-[13px] text-slate-950/66 no-underline transition-colors duration-200 hover:bg-slate-950/4 hover:text-slate-950/92 motion-reduce:transition-none"
          :href="link.href"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="flex items-center justify-start gap-2.5 min-[860px]:justify-end">
        <router-link to="/contact" custom v-slot="{ navigate }">
          <button
            class="inline-flex items-center gap-1.5 cursor-pointer rounded-[14px] border border-white/92 bg-transparent px-3 py-2.5 text-[13px] font-semibold text-slate-950/92 transition duration-150 hover:-translate-y-px hover:border-white/98 hover:bg-white/95 active:translate-y-0 motion-reduce:transition-none"
            type="button"
            @click="navigate"
          >
            <Icon name="lucide:phone" class="w-3.5 h-3.5 stroke-[2.5]" />
            
            Contact
          </button>
        </router-link>
        <button
          class="relative cursor-pointer overflow-hidden rounded-[14px] border border-amber-500/34 bg-[linear-gradient(135deg,rgba(255,246,197,0.96)_0%,rgba(245,197,66,0.96)_32%,rgba(245,158,11,0.92)_62%,rgba(154,107,18,0.92)_100%)] px-3 py-2.5 text-[13px] font-semibold text-[#291803]/92 shadow-[0_16px_40px_rgba(245,158,11,0.18),0_10px_22px_rgba(245,197,66,0.14)] transition duration-150 after:pointer-events-none after:absolute after:-inset-0.5 after:-translate-x-[140%] after:bg-[linear-gradient(105deg,transparent_0%,rgba(255,255,255,0.55)_42%,transparent_62%)] after:mix-blend-overlay after:transition-transform after:duration-[650ms] hover:-translate-y-px hover:bg-[linear-gradient(135deg,rgba(255,246,197,0.98)_0%,rgba(245,197,66,0.99)_32%,rgba(245,158,11,0.95)_62%,rgba(154,107,18,0.95)_100%)] hover:after:translate-x-[140%] active:translate-y-0 motion-reduce:transition-none motion-reduce:after:transition-none"
          type="button"
          @click="scrollTo('book')"
        >
          Login
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const navLinks = [
  { label: 'Highlights', href: '/#highlights' },
  { label: 'Stays', href: '/#stays' },
  { label: 'Amenities', href: '/#amenities' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Location', href: '/#location' },
]

function scrollTo(id: string) {
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>
