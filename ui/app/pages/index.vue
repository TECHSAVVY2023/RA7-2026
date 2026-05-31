<template>
  <div
    class="min-h-screen bg-[#f5f7fb] text-slate-950/92 [background:radial-gradient(1200px_600px_at_12%_6%,rgba(245,197,66,0.18),transparent_58%),radial-gradient(900px_520px_at_92%_12%,rgba(245,158,11,0.16),transparent_58%),radial-gradient(820px_520px_at_55%_92%,rgba(154,107,18,0.08),transparent_60%),radial-gradient(600px_360px_at_30%_55%,rgba(255,255,255,0.55),transparent_60%),#f5f7fb]"
  >
    <SiteNavbar />

    <main>
      <section
        class="relative overflow-hidden border-b border-slate-950/8 py-11 pb-5.5 min-[860px]:py-16 min-[860px]:pb-7"
        aria-label="Welcome to RA7 Resort"
      >
        <div
          class="absolute inset-0 saturate-[1.08] contrast-[1.05] after:absolute after:inset-0 after:bg-[linear-gradient(180deg,rgba(245,247,251,0.38)_0%,rgba(245,247,251,0.58)_46%,rgba(245,247,251,0.86)_100%),radial-gradient(900px_500px_at_80%_10%,rgba(245,197,66,0.2),transparent_60%),radial-gradient(900px_520px_at_22%_0%,rgba(245,158,11,0.16),transparent_62%),radial-gradient(700px_420px_at_50%_60%,rgba(255,255,255,0.45),transparent_62%)] after:content-['']"
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
            <p :class="pillClass">
              <span
                class="h-2.5 w-2.5 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.95),rgba(255,255,255,0.35))] shadow-[0_0_0_4px_rgba(245,197,66,0.18),0_10px_26px_rgba(245,158,11,0.14)]"
                aria-hidden="true"
              />
              Now welcoming guests
            </p>
            <h1 class="my-0 mb-2.5 mt-3.5 text-[clamp(34px,5vw,56px)] leading-[1.02] tracking-[-0.8px]">
              Your next
              <span
                class="bg-[linear-gradient(135deg,rgba(245,197,66,1)_0%,rgba(245,158,11,1)_60%,rgba(154,107,18,1)_100%)] bg-clip-text text-transparent"
              >
                sunset escape
              </span>
              starts here.
            </h1>
            <p class="m-0 max-w-[58ch] text-[15px] leading-normal text-slate-950/66">
              RA7 is a modern island resort experience—calm mornings, bright afternoons, and
              cozy nights. Designed for weekend getaways, family trips, and quiet resets.
            </p>

            <div class="mt-4.5 flex flex-wrap gap-2.5">
              <button :class="[buttonBaseClass, buttonPrimaryClass, buttonLgClass]" type="button" @click="scrollTo('book')">
                Check availability
              </button>
              <button :class="[buttonBaseClass, buttonGhostClass, buttonLgClass]" type="button" @click="scrollTo('gallery')">
                Explore the resort
              </button>
            </div>

            <dl class="mt-4.5 grid grid-cols-1 gap-2.5 pt-1.5 min-[860px]:grid-cols-3" aria-label="Resort highlights">
              <div class="rounded-2xl border border-slate-950/10 bg-white/78 p-3">
                <dt class="m-0 text-xs text-slate-950/48">Best for</dt>
                <dd class="m-0 mt-1.5 font-bold">Relaxation</dd>
              </div>
              <div class="rounded-2xl border border-slate-950/10 bg-white/78 p-3">
                <dt class="m-0 text-xs text-slate-950/48">Vibe</dt>
                <dd class="m-0 mt-1.5 font-bold">Tropical modern</dd>
              </div>
              <div class="rounded-2xl border border-slate-950/10 bg-white/78 p-3">
                <dt class="m-0 text-xs text-slate-950/48">Signature</dt>
                <dd class="m-0 mt-1.5 font-bold">Sunset deck</dd>
              </div>
            </dl>
          </div>

          <div
            class="relative h-80 overflow-hidden rounded-[26px] border border-slate-950/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,255,255,0.62))] shadow-[0_18px_60px_rgba(2,6,23,0.12)] before:absolute before:right-20 before:top-30 before:h-85 before:w-85 before:rotate-12 before:bg-[radial-gradient(circle_at_30%_30%,rgba(245,197,66,0.24),transparent_62%)] before:content-[''] after:absolute after:bottom-35 after:left-30 after:h-105 after:w-105 after:rotate-[-18deg] after:bg-[radial-gradient(circle_at_30%_30%,rgba(245,158,11,0.18),transparent_64%)] after:content-['']"
            aria-hidden="true"
          >
            <div :class="[heroCardClass, 'left-5.5 top-6 w-[min(320px,72%)]']">
              <div class="text-xs font-bold text-slate-950/48">Ocean breeze</div>
              <div class="mt-1.5 font-extrabold tracking-[-0.2px]">All-day calm</div>
            </div>
            <div :class="[heroCardClass, 'bottom-6.5 right-5.5 w-[min(260px,68%)]']">
              <div class="text-xs font-bold text-slate-950/48">Pool & lounge</div>
              <div class="mt-1.5 font-extrabold tracking-[-0.2px]">Golden hour views</div>
            </div>
            <div :class="[heroCardClass, 'bottom-5.5 left-5.5 rounded-full px-3 py-2.5 text-xs font-bold text-slate-950/72']">
              Free Wi‑Fi • Breakfast • Parking
            </div>
          </div>
        </div>
      </section>

      <section id="highlights" class="py-11.5">
        <div :class="containerClass">
          <div class="mb-4.5 grid gap-2.5">
            <h2 :class="sectionTitleClass">Why guests love RA7</h2>
            <p :class="sectionDescClass">Simple comforts, thoughtful design, and a resort rhythm you’ll want to keep.</p>
          </div>

          <div class="grid grid-cols-1 gap-3 min-[860px]:grid-cols-4 min-[860px]:gap-3.5">
            <article v-for="item in highlights" :key="item.title" class="rounded-4.5 border border-slate-950/10 bg-white/82 p-4 shadow-[0_18px_48px_rgba(2,6,23,0.08)]">
              <div :class="iconBoxClass" aria-hidden="true">{{ item.icon }}</div>
              <h3 class="my-0 mb-1.5 mt-3 text-base font-bold">{{ item.title }}</h3>
              <p class="m-0 text-sm leading-normal text-slate-950/66">{{ item.text }}</p>
            </article>
          </div>
        </div>
      </section>

      <section
        id="stays"
        class="border-y border-slate-950/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.62),rgba(255,255,255,0.42))] py-11.5"
        aria-label="Stays and offers"
      >
        <div :class="containerClass">
          <div class="mb-4.5 grid items-end gap-2.5 min-[860px]:grid-cols-[1fr_auto]">
            <div>
              <h2 :class="sectionTitleClass">Stays that fit your mood</h2>
              <p :class="sectionDescClass">Pick a room type, then tailor the experience with add-ons and activities.</p>
            </div>
            <div class="grid grid-cols-3 gap-2 rounded-4.5 border border-slate-950/10 bg-white/78 p-2" role="tablist" aria-label="Stay categories">
              <button
                v-for="tab in stayTabs"
                :key="tab"
                :class="[
                  segmentedButtonClass,
                  selectedStayTab === tab ? 'border-slate-950/12 bg-slate-950/4 text-slate-950/92' : 'border-transparent bg-transparent text-slate-950/66',
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
            <article v-for="stay in filteredStays" :key="stay.name" class="overflow-hidden rounded-[22px] border border-slate-950/10 bg-white/86 shadow-[0_20px_55px_rgba(2,6,23,0.1)]">
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
            </article>
          </div>
        </div>
      </section>

      <section id="amenities" class="py-11.5" aria-label="Amenities">
        <div :class="containerClass">
          <div class="mb-4.5 grid gap-2.5">
            <h2 :class="sectionTitleClass">Amenities</h2>
            <p :class="sectionDescClass">
              Everything you need to arrive, unwind, and stay present—without overthinking the details.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-3 min-[860px]:grid-cols-3">
            <div v-for="a in amenities" :key="a.name" class="flex items-start gap-3 rounded-4.5 border border-slate-950/10 bg-white/82 p-3.5">
              <div :class="[iconBoxClass, 'shrink-0']" aria-hidden="true">{{ a.icon }}</div>
              <div>
                <div class="font-extrabold">{{ a.name }}</div>
                <div class="mt-1 text-sm leading-normal text-slate-950/66">{{ a.desc }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="gallery"
        class="border-y border-slate-950/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.62),rgba(255,255,255,0.42))] py-11.5"
        aria-label="Gallery"
      >
        <div :class="containerClass">
          <div class="mb-4.5 grid gap-2.5">
            <h2 :class="sectionTitleClass">A peek inside RA7</h2>
            <p :class="sectionDescClass">A calm palette, natural textures, and spaces that breathe.</p>
          </div>

          <div class="grid grid-cols-1 gap-3 min-[860px]:grid-cols-12 min-[860px]:gap-3.5">
            <div
              v-for="g in gallery"
              :key="g.title"
              class="relative min-h-37.5 overflow-hidden rounded-[22px] border border-slate-950/10 bg-cover bg-center shadow-[0_22px_60px_rgba(2,6,23,0.1)] after:absolute after:inset-0 after:bg-[linear-gradient(to_top,rgba(245,247,251,0.55),rgba(245,247,251,0.08))] after:content-[''] min-[860px]:nth-1:col-span-7 min-[860px]:nth-1:min-h-55 min-[860px]:nth-2:col-span-5 min-[860px]:nth-2:min-h-55 min-[860px]:nth-3:col-span-5 min-[860px]:nth-3:min-h-52.5 min-[860px]:nth-4:col-span-7 min-[860px]:nth-4:min-h-52.5 min-[860px]:nth-5:col-span-12 min-[860px]:nth-5:min-h-55"
              :style="{ backgroundImage: `url(${g.image})` }"
            >
              <div class="absolute inset-x-3.5 bottom-3.5 z-1 rounded-2xl border border-slate-950/8 bg-white/72 p-3 backdrop-blur-sm">
                <div class="font-black tracking-[-0.2px]">{{ g.title }}</div>
                <div class="mt-1 text-[13px] text-slate-950/66">{{ g.text }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="location" class="py-11.5" aria-label="Location">
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
                <div class="mt-1.5 font-extrabold">24/7 support</div>
              </div>
            </div>
          </div>

          <div
            class="relative h-65 overflow-hidden rounded-[26px] border border-slate-950/10 bg-[radial-gradient(800px_280px_at_10%_20%,rgba(245,197,66,0.14),transparent_60%),radial-gradient(700px_240px_at_95%_30%,rgba(245,158,11,0.12),transparent_58%),linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,255,255,0.62))] shadow-[0_18px_60px_rgba(2,6,23,0.12)] before:absolute before:inset-0 before:bg-[linear-gradient(rgba(2,6,23,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(2,6,23,0.06)_1px,transparent_1px)] before:bg-size:36px_36px] before:opacity-25 before:content-['']"
            aria-hidden="true"
          >
            <div class="absolute left-[55%] top-[52%] h-4.5 w-4.5 rounded-full bg-amber-500/95 shadow-[0_0_0_8px_rgba(245,158,11,0.18),0_18px_45px_rgba(0,0,0,0.18)]" />
            <div class="absolute inset-x-4.5 bottom-4.5 rounded-4.5 border border-slate-950/12 bg-white/74 p-3.5 backdrop-blur-[10px]">
              <div class="font-black">RA7 Resort</div>
              <div class="mt-1 text-[13px] text-slate-950/66">Coastal drive • Scenic route</div>
            </div>
          </div>
        </div>
      </section>

      <section id="book" class="pb-12.5 pt-8.5" aria-label="Book now">
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
      </section>
    </main>

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import SiteFooter from './component/footer.vue'
import SiteNavbar from './component/navbar.vue'

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
type StayTab = 'Popular' | 'Family' | 'Couples'
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
const heroCardClass =
  'absolute rounded-4.5 border border-slate-950/12 bg-white/70 p-3.5 backdrop-blur-[10px]'
const sectionTitleClass = 'm-0 text-[26px] tracking-[-0.4px]'
const sectionDescClass = 'm-0 max-w-[70ch] text-sm leading-normal text-slate-950/66'
const iconBoxClass =
  'grid h-10 w-10 place-items-center rounded-[14px] border border-slate-950/8 bg-slate-950/3 text-lg'
const segmentedButtonClass =
  'cursor-pointer rounded-[14px] border px-2.5 py-2.5 text-[13px] font-bold transition-colors duration-150 motion-reduce:transition-none'

const landscapes = Array.from({ length: 16 }, (_, i) => `/images/landscape${i + 1}.jpg`)
const heroVideoUrl = '/videos/ra7.mp4'
const heroPosterUrl = landscapes[0]

const highlights: Highlight[] = [
  { icon: '🌅', title: 'Sunset deck', text: 'Unwind with wide-open sky views and soft evening lights.' },
  { icon: '🏝️', title: 'Quiet shoreline', text: 'A calmer stretch for slow walks, morning swims, and shade.' },
  { icon: '🍽️', title: 'All-day dining', text: 'Fresh, simple favorites—perfect after beach time or pool time.' },
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

const stayTabs: StayTab[] = ['Popular', 'Family', 'Couples']
const selectedStayTab = ref<StayTab>('Popular')

const stays: Stay[] = [
  {
    name: 'Coastal Deluxe',
    desc: 'A bright room with a breezy layout and a cozy corner for slow mornings.',
    badge: 'Popular',
    guests: '2 guests',
    beds: '1 queen',
    view: 'Garden view',
    price: '₱3,990',
    tab: 'Popular',
    tint: 'linear-gradient(135deg, #1dd3b0, #60a5fa)',
  },
  {
    name: 'Poolside Suite',
    desc: 'Steps from the pool with extra space to lounge and reset.',
    badge: 'Top pick',
    guests: '2–3 guests',
    beds: '1 king',
    view: 'Pool view',
    price: '₱5,490',
    tab: 'Popular',
    tint: 'linear-gradient(135deg, #fbbf24, #fb7185)',
  },
  {
    name: 'Family Haven',
    desc: 'Designed for together time: roomy, practical, and easy to settle into.',
    badge: 'Family',
    guests: '4 guests',
    beds: '2 double',
    view: 'Courtyard view',
    price: '₱6,290',
    tab: 'Family',
    tint: 'linear-gradient(135deg, #a78bfa, #22c55e)',
  },
  {
    name: 'Barkada Villa',
    desc: 'A shareable space for friends with a living area and extra breathing room.',
    badge: 'Group',
    guests: '6 guests',
    beds: '3 double',
    view: 'Resort view',
    price: '₱8,990',
    tab: 'Family',
    tint: 'linear-gradient(135deg, #60a5fa, #34d399)',
  },
  {
    name: 'Sunset King',
    desc: 'Soft lighting and a warm palette—made for evening chats and slower nights.',
    badge: 'Couples',
    guests: '2 guests',
    beds: '1 king',
    view: 'Sunset view',
    price: '₱6,990',
    tab: 'Couples',
    tint: 'linear-gradient(135deg, #fb7185, #f59e0b)',
  },
  {
    name: 'Private Nook',
    desc: 'A quiet, tucked-away room with a minimalist feel and deep rest energy.',
    badge: 'Quiet',
    guests: '2 guests',
    beds: '1 queen',
    view: 'Nature view',
    price: '₱4,790',
    tab: 'Couples',
    tint: 'linear-gradient(135deg, #22c55e, #06b6d4)',
  },
]

const filteredStays = computed(() => stays.filter((s) => s.tab === selectedStayTab.value))

const gallery = [
  { title: 'Lobby & welcome', text: 'Clean lines and warm textures.', image: landscapes[1] },
  { title: 'Pool at dusk', text: 'Soft light and calm water.', image: landscapes[2] },
  { title: 'Room comfort', text: 'Rest-forward design details.', image: landscapes[3] },
  { title: 'Dining corner', text: 'Fresh plates, easy mornings.', image: landscapes[4] },
  { title: 'Sunset deck', text: 'The signature RA7 view.', image: landscapes[5] },
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

