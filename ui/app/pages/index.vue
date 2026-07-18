<template>
  <div
      id="home"
    class="min-h-screen bg-[#f5f7fb] text-slate-950/92 [background:radial-gradient(1200px_600px_at_12%_6%,rgba(245, 197, 66, 0.04),transparent_58%),radial-gradient(900px_520px_at_92%_12%,rgba(245,158,11,0.16),transparent_58%),radial-gradient(820px_520px_at_55%_92%,rgba(154,107,18,0.08),transparent_60%),radial-gradient(600px_360px_at_30%_55%,rgba(255, 255, 255, 0.36),transparent_60%),#f5f7fb]"
  >

    <main>
      <Motion
        as="section"
        :initial="heroInitial"
        :animate="heroAnimate"
        :transition="heroTransition"
        class="relative overflow-hidden border-b border-slate-950/8 py-11 pb-5.5 min-[860px]:py-16 min-[860px]:pb-7 w-screen h-screen"
        aria-label="Welcome to RA7 Resort"
      >
        <div
          class="absolute inset-0 saturate-[1.08] contrast-[1.05] after:absolute after:inset-0 after:bg-[linear-gradient(180deg,rgba(245,247,251,0.1)_0%,rgba(245,247,251,0.2)_46%,rgba(245,247,251,0.42)_100%),radial-gradient(900px_500px_at_80%_10%,rgba(245,197,66,0.08),transparent_60%),radial-gradient(900px_520px_at_22%_0%,rgba(245,158,11,0.07),transparent_62%),radial-gradient(700px_420px_at_50%_60%,rgba(255,255,255,0.16),transparent_62%)] after:content-['']"
          aria-hidden="true"
        >
          <video
            class="block h-full w-full object-cover object-center"
            :src="heroVideoUrl"
            :poster="heroPosterUrl"
            autoplay
            muted
            loop
            playsinline
          />
        </div>
        <div
          :class="[
            containerClass,
            'relative grid grid-cols-1 items-center gap-5.5 min-[860px]:grid-cols-[1.05fr_0.95fr] min-[860px]:gap-6.5',
          ]"
        >
          <div>
            <p :class="[pillClass, 'mt-8 min-[860px]:mt-12']">
              <span
  class="h-2.5 w-2.5 rounded-full bg-[radial-gradient(circle_at_30%_30%,#4ade80,#16a34a)] shadow-[0_0_0_4px_rgba(74,222,128,0.4),0_0_12px_rgba(22,163,74,0.8)]"
  aria-hidden="true"
/>
              Now welcoming guests
            </p>
            <Motion
              as="h1"
              :initial="{ opacity: 0, y: 20 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.6, ease: 'easeOut' }"
              class="my-0 mb-2.5 mt-12 text-[clamp(34px,5vw,56px)] leading-[1.02] tracking-[-0.8px]"
            >
              Your next
              <span
                class="bg-[linear-gradient(135deg,rgba(245,197,66,1)_0%,rgba(245,158,11,1)_60%,rgba(154,107,18,1)_100%)] bg-clip-text text-transparent"
              >
                sunrise escape
              </span>
              starts here.
            </Motion>
            <p class="m-0 max-w-[58ch] rounded-2xl bg-white/30 px-3.5 py-2.5 text-[15px] leading-normal text-slate-950/88 shadow-[0_12px_32px_rgba(2,6,23,0.14)] backdrop-blur-[6px]">
              RA7 is a modern island resort experience—calm mornings, bright afternoons, and
              cozy nights. Designed for weekend getaways, family trips, and quiet resets.
            </p>

          </div>

        </div>

        <div
          :class="[
            containerClass,
            'absolute inset-x-0 bottom-16 z-1 grid grid-cols-1 gap-5.5 min-[860px]:bottom-24 min-[860px]:grid-cols-[1.05fr_0.95fr] min-[860px]:gap-6.5',
          ]"
        >
          <div class="flex flex-col gap-3.5">
            <div class="flex flex-wrap gap-2.5">
              <button :class="[buttonBaseClass, buttonPrimaryClass, buttonLgClass]" type="button" @click="scrollTo('book')">
                Check availability
              </button>
              <button :class="[buttonBaseClass, buttonGhostClass, buttonLgClass]" type="button" @click="scrollTo('gallery')">
                Explore the resort
              </button>
            </div>

            <dl class="grid grid-cols-1 gap-2.5 min-[860px]:grid-cols-3" aria-label="Resort highlights">
              <Motion
                v-for="(stat, index) in heroStats"
                :key="stat.label"
                as="div"
                :initial="cardInitial"
                :animate="cardInView"
                :transition="staggerTransition(index, 0.32)"
                class="rounded-2xl border border-slate-950/10 bg-white/78 p-3"
              >
                <dt class="m-0 text-xs text-slate-950/48">{{ stat.label }}</dt>
                <dd class="m-0 mt-1.5 font-bold">{{ stat.value }}</dd>
              </Motion>
            </dl>
          </div>
        </div>
      </Motion>

      <div id="highlights" class="mt-8">
        &nbsp;
      </div>
      <Motion
        id=""
        as="section"
        :initial="sectionInitial"
        :while-in-view="sectionInView"
        :in-view-options="sectionInViewOptions"
        :transition="sectionTransition"
        class="py-11.5"
      >
        <div :class="containerClass">
          <div class="mb-4.5 grid gap-2.5">
            <h2 :class="sectionTitleClass">Why guests love RA7</h2>
            <p :class="sectionDescClass">Simple comforts, thoughtful design, and a resort rhythm you’ll want to keep.</p>
          </div>

          <div class="grid grid-cols-1 gap-3 min-[860px]:grid-cols-4 min-[860px]:gap-3.5">
            <Motion
              v-for="(item, index) in highlights"
              :key="item.title"
              as="article"
              :initial="cardInitial"
              :while-in-view="cardInView"
              :in-view-options="cardInViewOptions"
              :transition="staggerTransition(index)"
              class="rounded-4.5 border border-slate-950/10 bg-white/82 p-4 shadow-[0_18px_48px_rgba(2,6,23,0.08)]"
            >
              <div :class="iconBoxClass" aria-hidden="true">{{ item.icon }}</div>
              <h3 class="my-0 mb-1.5 mt-3 text-base font-bold">{{ item.title }}</h3>
              <p class="m-0 text-sm leading-normal text-slate-950/66">{{ item.text }}</p>
            </Motion>
          </div>
        </div>
      </Motion>

      <div id="stays" class="mt-8">
        &nbsp;
      </div>
      <Motion
        id=""
        as="section"
        :initial="sectionInitial"
        :while-in-view="sectionInView"
        :in-view-options="sectionInViewOptions"
        :transition="sectionTransition"
        class="border-y border-slate-950/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.62),rgba(255,255,255,0.42))] py-11.5"
        aria-label="Stays and offers"
      >
        <div :class="containerClass">
          <div class="mb-4.5 grid items-end gap-2.5 min-[860px]:grid-cols-[1fr_auto]">
            <div>
              <h2 :class="sectionTitleClass">Stays that fit your mood</h2>
              <p :class="sectionDescClass"><strong>Super Deluxe</strong>—Premium comfort with premium views. <strong>Deluxe</strong>—Great value with all essentials. <strong>Standard</strong>—Cozy retreats for intimate stays.</p>
            </div>
            <div class="flex flex-wrap items-center justify-center gap-3 rounded-4xl bg-[linear-gradient(135deg,rgba(255,246,197,0.72)_0%,rgba(245,197,66,0.68)_40%,rgba(245,158,11,0.64)_100%)] backdrop-blur-md p-4 shadow-[0_20px_50px_rgba(245,158,11,0.25),inset_0_1px_0_rgba(255,255,255,0.5)]" role="tablist" aria-label="Stay categories">
              <button
                v-for="tab in stayTabs"
                :key="tab"
                :class="[
                  segmentedButtonClass,
                  selectedStayTab === tab ? 'border-2 border-white/80 bg-white/95 text-amber-900 shadow-[0_12px_32px_rgba(2,6,23,0.18),inset_0_1px_2px_rgba(255,255,255,0.8)]' : 'border border-white/40 bg-white/32 text-amber-900/72 hover:bg-white/45 hover:border-white/60',
                ]"
                type="button"
                role="tab"
                :aria-selected="selectedStayTab === tab"
                @click="selectedStayTab = tab"
              >
                {{ tab }}
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-3.5 min-[860px]:grid-cols-3">
            <Motion
              v-for="(stay, index) in filteredStays"
              :key="stay.name"
              as="article"
              :initial="cardInitial"
              :while-in-view="cardInView"
              :in-view-options="cardInViewOptions"
              :transition="staggerTransition(index)"
              class="overflow-hidden rounded-[22px] border border-slate-950/10 bg-white/86 shadow-[0_20px_55px_rgba(2,6,23,0.1)]"
            >
              <div
                class="relative h-37.5 after:absolute after:inset-0 after:bg-[linear-gradient(to_bottom,rgba(245,247,251,0.1),rgba(2,6,23,0.15))] after:content-['']"
                :style="{ background: stay.tint }"
                aria-hidden="true"
              >
                <div class="absolute left-3 top-3 z-1 rounded-full border border-slate-950/12 bg-white/78 px-2.5 py-1.75 text-xs font-extrabold">{{ stay.badge }}</div>
              </div>
              <div class="px-3.5 pb-4 pt-3.5">
                <h3 class="m-0 text-base font-bold">{{ stay.name }}</h3>
                <p class="m-0 mt-2 text-sm leading-normal text-slate-950/66">{{ stay.desc }}</p>
                <div class="mt-3 flex flex-wrap gap-2">
                  <span :class="pillSoftClass">{{ stay.guests }}</span>
                  <span :class="pillSoftClass">{{ stay.beds }}</span>
                  <span :class="pillSoftClass">{{ stay.view }}</span>
                </div>
                <div class="mt-3.5 flex items-center justify-between gap-2.5">
                  <div>
                    <span class="text-xs font-bold text-slate-950/48">From</span>
                    <span class="ml-2 inline-block font-black tracking-[-0.2px]">{{ stay.price }}</span>
                    <span class="ml-1.5 text-xs text-slate-950/48">/ night</span>
                  </div>
                  <button :class="[buttonBaseClass, buttonPrimaryClass]" type="button" @click="scrollTo('book')">
                    Reserve
                  </button>
                </div>
              </div>
            </Motion>
          </div>
        </div>
      </Motion>

      <div id="amenities" class="mt-8">
        &nbsp;
      </div>
      <Motion
        id=""
        as="section"
        :initial="sectionInitial"
        :while-in-view="sectionInView"
        :in-view-options="sectionInViewOptions"
        :transition="sectionTransition"
        class="py-11.5"
        aria-label="Amenities"
      >
        <div :class="containerClass">
          <div class="mb-4.5 grid gap-2.5">
            <h2 :class="sectionTitleClass">Amenities</h2>
            <p :class="sectionDescClass">
              Everything you need to arrive, unwind, and stay present—without overthinking the details.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-3 min-[860px]:grid-cols-3">
            <Motion
              v-for="(a, index) in amenities"
              :key="a.name"
              as="div"
              :initial="cardInitial"
              :while-in-view="cardInView"
              :in-view-options="cardInViewOptions"
              :transition="staggerTransition(index)"
              class="flex items-start gap-3 rounded-4.5 border border-slate-950/10 bg-white/82 p-3.5"
            >
              <div :class="[iconBoxClass, 'shrink-0']" aria-hidden="true">{{ a.icon }}</div>
              <div>
                <div class="font-extrabold">{{ a.name }}</div>
                <div class="mt-1 text-sm leading-normal text-slate-950/66">{{ a.desc }}</div>
              </div>
            </Motion>
          </div>
        </div>
      </Motion>

      <div id="gallery" class="mt-8">
        &nbsp;
      </div>
      <Motion
        id=""
        as="section"
        :initial="sectionInitial"
        :while-in-view="sectionInView"
        :in-view-options="sectionInViewOptions"
        :transition="sectionTransition"
        class="border-y border-slate-950/8 bg-[linear-gradient(180deg,rgba(255, 255, 255, 0.21),rgba(255, 255, 255, 0.23))] py-11.5"
        aria-label="Gallery"
      >
        <div :class="containerClass">
          <div class="mb-4.5 grid gap-2.5">
            <h2 :class="sectionTitleClass">A peek inside RA7</h2>
            <p :class="sectionDescClass">A calm palette, natural textures, and spaces that breathe.</p>
          </div>

          <div class="grid grid-cols-1 gap-3 min-[860px]:grid-cols-12 min-[860px]:gap-3.5">
            <Motion
              v-for="(g, index) in gallery"
              :key="g.title"
              as="div"
              :initial="cardInitial"
              :while-in-view="cardInView"
              :in-view-options="cardInViewOptions"
              :transition="staggerTransition(index)"
              class="relative min-h-37.5 overflow-hidden rounded-[22px] border border-white bg-cover bg-center shadow-[0_22px_60px_rgba(2,6,23,0.1)] after:absolute after:inset-0 after:bg-[linear-gradient(to_top,rgba(245,247,251,0.55),rgba(245,247,251,0.08))] after:content-[''] min-[860px]:nth-1:col-span-7 min-[860px]:nth-1:min-h-55 min-[860px]:nth-2:col-span-5 min-[860px]:nth-2:min-h-55 min-[860px]:nth-3:col-span-5 min-[860px]:nth-3:min-h-52.5 min-[860px]:nth-4:col-span-7 min-[860px]:nth-4:min-h-52.5 min-[860px]:nth-5:col-span-12 min-[860px]:nth-5:min-h-55"
              :style="{ backgroundImage: `url(${g.image})` }"
            >
              <div class="absolute inset-x-3.5 bottom-3.5 z-1 rounded-2xl border border-slate-950/8 bg-white/75 p-3 backdrop-trans-sm">
                <div class="flex items-center justify-between gap-2">
                  <div class="font-black tracking-[-0.2px]">{{ g.title }}</div>
                  <NuxtLink
                    :to="`/${g.slug}`"
                    class="inline-flex items-center gap-1 rounded-full border border-slate-950/10 bg-white/80 px-2 py-0.5 text-[11px] font-normal text-slate-950/72 transition-colors duration-150 hover:bg-white/95 hover:text-slate-950/92 motion-reduce:transition-none"
                  >
                    explore
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m13 5 7 7-7 7" />
                    </svg>
                  </NuxtLink>
                </div>
                <div class="mt-1 text-[13px] text-slate-950/66">{{ g.text }}</div>
              </div>
            </Motion>
          </div>
        </div>
      </Motion>

      <div id="location" class="mt-8">
        &nbsp;
      </div>
      <Motion
        id="location"
        as="section"
        :initial="sectionInitial"
        :while-in-view="sectionInView"
        :in-view-options="sectionInViewOptions"
        :transition="sectionTransition"
        class="py-11.5"
        aria-label="Location"
      >
        <div :class="[containerClass, 'grid grid-cols-1 items-center gap-3.5 min-[860px]:grid-cols-2 min-[860px]:gap-4.5']">
          <div>
            <h2 :class="sectionTitleClass">Easy to reach, hard to leave</h2>
            <p :class="sectionDescClass">
              Share your exact address and we’ll plug it in—meanwhile, here’s a clean preview section for directions,
              nearby spots, and travel time.
            </p>

            <div class="mt-4 grid grid-cols-1 gap-2.5 min-[860px]:grid-cols-3">
              <div class="rounded-4.5 border border-white/10 bg-white/4 p-3">
                <div class="text-xs font-extrabold text-slate-950/48">Check-in</div>
                <div class="mt-1.5 font-extrabold">2:00 PM</div>
              </div>
              <div class="rounded-4.5 border border-white/10 bg-white/4 p-3">
                <div class="text-xs font-extrabold text-slate-950/48">Check-out</div>
                <div class="mt-1.5 font-extrabold">12:00 PM</div>
              </div>
              <div class="rounded-4.5 border border-white/10 bg-white/4 p-3">
                <div class="text-xs font-extrabold text-slate-950/48">Front desk</div>
                <div class="mt-1.5 font-extrabold">7am - 10pm support</div>
              </div>
            </div>
          </div>

         <!-- 1. The main parent card wrapper -->
<div class="relative w-full h-[400px] rounded-3xl overflow-hidden border border-slate-950/10">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.016757839492!2d123.86563439999999!3d8.2010653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255abc87a3542db%3A0x32ae5dfd164e9a27!2sRA7%20Beach%20Resort!5e0!3m2!1sen!2sph!4v1784368761382!5m2!1sen!2sph" 
    class="w-full h-full border-0" 
    allowfullscreen 
    loading="lazy" 
    referrerpolicy="strict-origin-when-cross-origin">
  </iframe>


  <div class="absolute inset-x-4.5 bottom-4.5 pointer-events-none">
    <a 
      href="https://maps.google.com/?q=RA7+Beach+Resort+Clarin+Misamis+Occidental" 
      target="_blank" 
      class="block rounded-4.5 border border-slate-950/12 bg-white/74 p-3.5 backdrop-blur-[10px] pointer-events-auto hover:bg-white/90 transition-colors cursor-pointer">
      
      <div class="font-bold text-slate-950">RA7 Resort</div>
      <div class="mt-1 text-[13px] text-slate-950/66 flex items-center gap-1">
        Coastal drive • Scenic route 
        <span class="text-[11px]">↗</span>
      </div>

    </a>

  </div>

</div>
        </div>
      </Motion>

      <Motion
        id="book"
        as="section"
        :initial="sectionInitial"
        :while-in-view="sectionInView"
        :in-view-options="sectionInViewOptions"
        :transition="sectionTransition"
        class="pb-12.5 pt-8.5"
        aria-label="Book now"
      >
        <div
          :class="[
            containerClass,
            'grid grid-cols-1 gap-3.5 rounded-[26px] border border-slate-950/10 bg-[radial-gradient(800px_280px_at_10%_0%,rgba(245,197,66,0.18),transparent_55%),radial-gradient(600px_240px_at_100%_40%,rgba(245,158,11,0.14),transparent_58%),rgba(255,255,255,0.82)] px-4.5 py-5.5 shadow-[0_18px_60px_rgba(2,6,23,0.12)] min-[860px]:grid-cols-[1fr_auto] min-[860px]:items-center min-[860px]:px-6 min-[860px]:py-5.5',
          ]"
        >
          <div>
            <h2 class="m-0 text-2xl tracking-[-0.4px]">Ready for your RA7 getaway?</h2>
            <p class="m-0 mt-2.5 max-w-[70ch] text-sm leading-normal text-slate-950/66">
              Tap “Book now” to continue to your reservation flow (hook this up to your backend when ready).
            </p>
          </div>
          <div class="flex flex-wrap items-center justify-start gap-2.5 min-[860px]:justify-end">
            <button :class="[buttonBaseClass, buttonPrimaryClass, buttonXlClass]" type="button" @click="onBookNow">
              Book now
            </button>
            <button :class="[buttonBaseClass, buttonGhostClass, buttonXlClass]" type="button" @click="scrollTo('highlights')">
              Browse details
            </button>
          </div>
        </div>
      </Motion>
    </main>

  </div>
</template>

<script setup lang="ts">
import { Motion } from 'motion-v'
import type { MotionProps } from 'motion-v'

useHead({
  title: 'RA7 Resort',
  meta: [
    {
      name: 'description',
      content:
        'RA7 Resort landing page — modern tropical comfort, stays, amenities, gallery, and booking call-to-action.',
    },
  ],
})

type Highlight = { icon: string; title: string; text: string }
type Amenity = { icon: string; name: string; desc: string }
type StayTab = 'Super Deluxe' | 'Deluxe' | 'Standard' | 'Pavilions'
type MotionTransition = MotionProps['transition']
type MotionInViewOptions = NonNullable<MotionProps['inViewOptions']>
type Stay = {
  name: string
  desc: string
  badge: string
  guests: string
  beds: string
  view: string
  price: string
  tab: StayTab
  tint: string
}

const containerClass = 'mx-auto w-[min(1120px,calc(100%_-_40px))]'
const buttonBaseClass =
  'relative cursor-pointer appearance-none rounded-[14px] border border-white/92 bg-white/80 px-3 py-2.5 text-[13px] font-semibold text-slate-950/92 transition duration-150 hover:-translate-y-px hover:border-white/98 hover:bg-white/95 active:translate-y-0 motion-reduce:transition-none'
const buttonPrimaryClass =
  'overflow-hidden border-amber-500/34 bg-[linear-gradient(135deg,rgba(255,246,197,0.96)_0%,rgba(245,197,66,0.96)_32%,rgba(245,158,11,0.92)_62%,rgba(154,107,18,0.92)_100%)] text-[#291803]/92 shadow-[0_16px_40px_rgba(245,158,11,0.18),0_10px_22px_rgba(245,197,66,0.14)] after:pointer-events-none after:absolute after:-inset-0.5 after:-translate-x-[140%] after:bg-[linear-gradient(105deg,transparent_0%,rgba(255,255,255,0.55)_42%,transparent_62%)] after:mix-blend-overlay after:transition-transform after:duration-[650ms] after:content-[\'\'] hover:bg-[linear-gradient(135deg,rgba(255,246,197,0.98)_0%,rgba(245,197,66,0.99)_32%,rgba(245,158,11,0.95)_62%,rgba(154,107,18,0.95)_100%)] hover:after:translate-x-[140%] motion-reduce:after:transition-none'
const buttonGhostClass = 'bg-transparent'
const buttonLgClass = 'rounded-2xl px-4 py-3 text-sm'
const buttonXlClass = 'rounded-4.5 px-4.5 py-3.5 text-sm'
const pillClass =
  'inline-flex items-center gap-2.5 rounded-full border border-slate-950/10 bg-white/80 px-3 py-2 text-[13px] font-semibold text-slate-950/66'
const pillSoftClass =
  'inline-flex items-center rounded-full border border-slate-950/9 bg-white/72 px-2.5 py-[7px] text-xs font-semibold text-slate-950/66'
const sectionTitleClass = 'm-0 text-[26px] tracking-[-0.4px]'
const sectionDescClass = 'm-0 max-w-[70ch] text-sm leading-normal text-slate-950/66'
const iconBoxClass =
  'grid h-10 w-10 place-items-center rounded-[14px] border border-slate-950/8 bg-slate-950/3 text-lg'
const segmentedButtonClass =
  'cursor-pointer rounded-full px-4.5 py-2.5 text-sm font-bold transition-all duration-200 motion-reduce:transition-none whitespace-nowrap'

const landscapes = Array.from({ length: 16 }, (_, i) => `/images/landscape${i + 1}.jpg`)
const heroVideoUrl = '/videos/ra7.mp4'
const heroPosterUrl = landscapes[0]
const heroInitial = { opacity: 0, y: 28, scale: 0.99 }
const heroAnimate = { opacity: 1, y: 0, scale: 1 }
const heroTransition: MotionTransition = { duration: 0.82, ease: [0.22, 1, 0.36, 1] }
const sectionInitial = { opacity: 0, y: 42, scale: 0.985 }
const sectionInView = { opacity: 1, y: 0, scale: 1 }
const sectionTransition: MotionTransition = { duration: 0.68, ease: [0.22, 1, 0.36, 1] }
const sectionInViewOptions: MotionInViewOptions = { amount: 0.22, margin: '0px 0px -12% 0px', once: false }
const cardInitial = { opacity: 0, y: 24, scale: 0.97 }
const cardInView = { opacity: 1, y: 0, scale: 1 }
const cardInViewOptions: MotionInViewOptions = { amount: 0.18, margin: '0px 0px -8% 0px', once: false }
const heroStats = [
  { label: 'Best for', value: 'Relaxation' },
  { label: 'Vibe', value: 'Screen-Flash Pool' },
  { label: 'Signature', value: 'Sunrise Deck' },
]

function staggerTransition(index: number, baseDelay = 0): MotionTransition {
  return {
    duration: 0.56,
    delay: baseDelay + Math.min(index * 0.075, 0.32),
    ease: [0.22, 1, 0.36, 1],
  }
}

const highlights: Highlight[] = [
  { icon: '🌅', title: 'Sunrise deck', text: 'Experience the perfect balance of island life—where vibrant morning skies seamlessly fade into soft evening lights under a wide-open canopy.' },
  { icon: '🏝️', title: 'Quiet shoreline', text: 'A calmer stretch for slow walks, morning swims, and shade.' },
  { icon: '🍽️', title: 'Complimentary Breakfast for Deluxe Rooms', text: 'Fresh, simple morning favorites—perfectly paired with your sunrise escape.' },
  { icon: '🛏️', title: 'Rest-first rooms', text: 'Cool tones, comfy beds, and thoughtful space for your things.' },
]

const amenities: Amenity[] = [
  { icon: '🏊‍♀️', name: 'Pool & lounge', desc: 'Daybeds, umbrellas, and a relaxed pool-side mood.' },
  { icon: '🍳', name: 'Breakfast option', desc: 'Grab-and-go or slow brunch—choose your pace.' },
  { icon: '📶', name: 'Fast Wi‑Fi', desc: 'Stream, work, or post—solid connection across the resort.' },
  { icon: '🚗', name: 'Easy parking', desc: 'Arrive smoothly with convenient on-site parking.' },
  { icon: '🧖', name: 'Spa corner', desc: 'Massage-ready space for recovery and calm.' },
  { icon: '🛶', name: 'Activities', desc: 'Light adventures—water, sand, and nearby nature.' },
]

const stayTabs: StayTab[] = ['Super Deluxe', 'Deluxe', 'Standard', 'Pavilions']
const selectedStayTab = ref<StayTab>('Super Deluxe')

const stays: Stay[] = [
  {
    name: 'Coastal Deluxe',
    desc: 'A bright room with a breezy layout and a cozy corner for slow mornings.',
    badge: 'Popular',
    guests: '2 guests',
    beds: '1 queen',
    view: 'Garden view',
    price: '₱0,000',
    tab: 'Super Deluxe',
    tint: "url('/images/landscape5.jpg') center / cover no-repeat",
  },
  {
    name: 'Poolside Suite',
    desc: 'Steps from the pool with extra space to lounge and reset.',
    badge: 'Top pick',
    guests: '2–3 guests',
    beds: '1 king',
    view: 'Pool view',
    price: '₱0,000',
    tab: 'Super Deluxe',
    tint: "url('/images/landscape10.jpg') center / cover no-repeat",
  },
  {
    name: 'Family Haven',
    desc: 'Designed for together time: roomy, practical, and easy to settle into.',
    badge: 'Family',
    guests: '4 guests',
    beds: '2 double',
    view: 'Courtyard view',
    price: '0,000',
    tab: 'Deluxe',
    tint: "url('/images/landscape8.jpg') center / cover no-repeat",
  },
  {
    name: 'Barkada Villa',
    desc: 'A shareable space for friends with a living area and extra breathing room.',
    badge: 'Group',
    guests: '6 guests',
    beds: '3 double',
    view: 'Resort view',
    price: '₱0,000',
    tab: 'Deluxe',
    tint: "url('/images/landscape8.jpg') center / cover no-repeat",
  },
  {
    name: 'Sunset King',
    desc: 'Soft lighting and a warm palette—made for evening chats and slower nights.',
    badge: 'Couples',
    guests: '2 guests',
    beds: '1 king',
    view: 'Sunset view',
    price: '₱0,000',
    tab: 'Standard',
    tint: "url('/images/landscape8.jpg') center / cover no-repeat",
  },
  {
    name: 'Private Nook',
    desc: 'A quiet, tucked-away room with a minimalist feel and deep rest energy.',
    badge: 'Quiet',
    guests: '2 guests',
    beds: '1 queen',
    view: 'Nature view',
    price: '₱0,000',
    tab: 'Standard',
    tint: "url('/images/landscape8.jpg') center / cover no-repeat",
  },
  {
    name: 'Garden Cottage',
    desc: 'Charming standalone cottage with private entrance, perfect for families or small groups seeking privacy.',
    badge: 'Cottage',
    guests: '4 guests',
    beds: '2 bedrooms',
    view: 'Garden view',
    price: '₱0,000',
    tab: 'Pavilions',
    tint: "url('/images/landscape9.jpg') center / cover no-repeat",
  },
  {
    name: 'Beachfront Cottage',
    desc: 'Exclusive beachside cottage with direct sand access, ideal for romantic escapes or close-knit retreats.',
    badge: 'Beachfront',
    guests: '4 guests',
    beds: '2 bedrooms',
    view: 'Beach view',
    price: '₱0,000',
    tab: 'Pavilions',
    tint: "url('/images/landscape12.jpg') center / cover no-repeat",
  },
  {
    name: 'Function Hall',
    desc: 'Versatile event space with flexible layout, catering kitchen, and outdoor terrace for celebrations and gatherings.',
    badge: 'Events',
    guests: 'Up to 150 guests',
    beds: 'Flexible setup',
    view: 'Resort view',
    price: 'Custom pricing',
    tab: 'Pavilions',
    tint: "url('/images/landscape13.jpg') center / cover no-repeat",
  },
]

const filteredStays = computed(() => stays.filter((s) => s.tab === selectedStayTab.value))

const gallery = [
  { slug: 'lobby', title: 'Lobby & welcome', text: 'Clean lines and warm textures.', image: landscapes[14] },
  { slug: 'poolAtDusk', title: 'Pool at dusk', text: 'Soft light and calm water.', image: landscapes[5] },
  { slug: 'roomComfort', title: 'Room comfort', text: 'Rest-forward design details.', image: landscapes[4] },
  { slug: 'diningCorner', title: 'Dining corner', text: 'Fresh plates, easy mornings.', image: landscapes[6] },
  { slug: 'sunsetDeck', title: 'Sunset deck', text: 'The signature RA7 view.', image: landscapes[11] },
]

function scrollTo(id: string) {
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function onBookNow() {
  // Placeholder action for now; wire to a booking route/modal when ready.
  scrollTo('book')
}
</script>
