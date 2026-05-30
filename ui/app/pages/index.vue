<template>
  <div class="page">
    <header class="topbar">
      <div class="container topbar__inner">
        <div class="brand" aria-label="RA7 Resort">
          <div class="brand__mark" aria-hidden="true">RA7</div>
          <div class="brand__text">
            <div class="brand__name">RA7 Resort</div>
            <div class="brand__tag">Beach • Nature • Comfort</div>
          </div>
        </div>

        <nav class="nav" aria-label="Primary">
          <a class="nav__link" href="#highlights">Highlights</a>
          <a class="nav__link" href="#stays">Stays</a>
          <a class="nav__link" href="#amenities">Amenities</a>
          <a class="nav__link" href="#gallery">Gallery</a>
          <a class="nav__link" href="#location">Location</a>
        </nav>

        <div class="actions">
          <button class="btn btn--ghost" type="button" @click="scrollTo('stays')">
            View rooms
          </button>
          <button class="btn btn--primary" type="button" @click="scrollTo('book')">
            Book now
          </button>
        </div>
      </div>
    </header>

    <main>
      <section class="hero" aria-label="Welcome to RA7 Resort">
        <div class="hero__bg" aria-hidden="true">
          <video
            class="hero__video"
            :src="heroVideoUrl"
            :poster="heroPosterUrl"
            autoplay
            muted
            loop
            playsinline
          />
        </div>
        <div class="container hero__grid">
          <div class="hero__copy">
            <p class="pill">
              <span class="pill__dot" aria-hidden="true" />
              Now welcoming guests
            </p>
            <h1 class="hero__title">
              Your next
              <span class="hero__title-accent">sunset escape</span>
              starts here.
            </h1>
            <p class="hero__subtitle">
              RA7 is a modern island resort experience—calm mornings, bright afternoons, and
              cozy nights. Designed for weekend getaways, family trips, and quiet resets.
            </p>

            <div class="hero__cta">
              <button class="btn btn--primary btn--lg" type="button" @click="scrollTo('book')">
                Check availability
              </button>
              <button class="btn btn--ghost btn--lg" type="button" @click="scrollTo('gallery')">
                Explore the resort
              </button>
            </div>

            <dl class="stats" aria-label="Resort highlights">
              <div class="stat">
                <dt class="stat__label">Best for</dt>
                <dd class="stat__value">Relaxation</dd>
              </div>
              <div class="stat">
                <dt class="stat__label">Vibe</dt>
                <dd class="stat__value">Tropical modern</dd>
              </div>
              <div class="stat">
                <dt class="stat__label">Signature</dt>
                <dd class="stat__value">Sunset deck</dd>
              </div>
            </dl>
          </div>

          <div class="hero__visual" aria-hidden="true">
            <div class="heroCard heroCard--main">
              <div class="heroCard__label">Ocean breeze</div>
              <div class="heroCard__value">All-day calm</div>
            </div>
            <div class="heroCard heroCard--side">
              <div class="heroCard__label">Pool & lounge</div>
              <div class="heroCard__value">Golden hour views</div>
            </div>
            <div class="heroCard heroCard--chip">Free Wi‑Fi • Breakfast • Parking</div>
          </div>
        </div>
      </section>

      <section id="highlights" class="section">
        <div class="container">
          <div class="section__head">
            <h2 class="section__title">Why guests love RA7</h2>
            <p class="section__desc">Simple comforts, thoughtful design, and a resort rhythm you’ll want to keep.</p>
          </div>

          <div class="cards">
            <article v-for="item in highlights" :key="item.title" class="card">
              <div class="card__icon" aria-hidden="true">{{ item.icon }}</div>
              <h3 class="card__title">{{ item.title }}</h3>
              <p class="card__text">{{ item.text }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="stays" class="section section--alt" aria-label="Stays and offers">
        <div class="container">
          <div class="section__head section__head--split">
            <div>
              <h2 class="section__title">Stays that fit your mood</h2>
              <p class="section__desc">Pick a room type, then tailor the experience with add-ons and activities.</p>
            </div>
            <div class="segmented" role="tablist" aria-label="Stay categories">
              <button
                v-for="tab in stayTabs"
                :key="tab"
                class="segmented__btn"
                type="button"
                role="tab"
                :aria-selected="selectedStayTab === tab"
                :class="{ 'is-active': selectedStayTab === tab }"
                @click="selectedStayTab = tab"
              >
                {{ tab }}
              </button>
            </div>
          </div>

          <div class="stayGrid">
            <article v-for="stay in filteredStays" :key="stay.name" class="stay">
              <div class="stay__media" :style="{ '--tint': stay.tint }" aria-hidden="true">
                <div class="stay__badge">{{ stay.badge }}</div>
              </div>
              <div class="stay__body">
                <h3 class="stay__title">{{ stay.name }}</h3>
                <p class="stay__text">{{ stay.desc }}</p>
                <div class="stay__meta">
                  <span class="pill pill--soft">{{ stay.guests }}</span>
                  <span class="pill pill--soft">{{ stay.beds }}</span>
                  <span class="pill pill--soft">{{ stay.view }}</span>
                </div>
                <div class="stay__footer">
                  <div class="stay__price">
                    <span class="stay__priceLabel">From</span>
                    <span class="stay__priceValue">{{ stay.price }}</span>
                    <span class="stay__priceNote">/ night</span>
                  </div>
                  <button class="btn btn--primary" type="button" @click="scrollTo('book')">
                    Reserve
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="amenities" class="section" aria-label="Amenities">
        <div class="container">
          <div class="section__head">
            <h2 class="section__title">Amenities</h2>
            <p class="section__desc">
              Everything you need to arrive, unwind, and stay present—without overthinking the details.
            </p>
          </div>

          <div class="amenities">
            <div v-for="a in amenities" :key="a.name" class="amenity">
              <div class="amenity__icon" aria-hidden="true">{{ a.icon }}</div>
              <div class="amenity__body">
                <div class="amenity__name">{{ a.name }}</div>
                <div class="amenity__desc">{{ a.desc }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" class="section section--alt" aria-label="Gallery">
        <div class="container">
          <div class="section__head">
            <h2 class="section__title">A peek inside RA7</h2>
            <p class="section__desc">A calm palette, natural textures, and spaces that breathe.</p>
          </div>

          <div class="gallery">
            <div
              v-for="g in gallery"
              :key="g.title"
              class="shot"
              :style="{ backgroundImage: `url(${g.image})` }"
            >
              <div class="shot__overlay">
                <div class="shot__title">{{ g.title }}</div>
                <div class="shot__text">{{ g.text }}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="location" class="section" aria-label="Location">
        <div class="container location">
          <div class="location__copy">
            <h2 class="section__title">Easy to reach, hard to leave</h2>
            <p class="section__desc">
              Share your exact address and we’ll plug it in—meanwhile, here’s a clean preview section for directions,
              nearby spots, and travel time.
            </p>

            <div class="location__facts">
              <div class="fact">
                <div class="fact__k">Check-in</div>
                <div class="fact__v">2:00 PM</div>
              </div>
              <div class="fact">
                <div class="fact__k">Check-out</div>
                <div class="fact__v">12:00 PM</div>
              </div>
              <div class="fact">
                <div class="fact__k">Front desk</div>
                <div class="fact__v">24/7 support</div>
              </div>
            </div>
          </div>

          <div class="mapMock" aria-hidden="true">
            <div class="mapMock__pin" />
            <div class="mapMock__label">
              <div class="mapMock__name">RA7 Resort</div>
              <div class="mapMock__meta">Coastal drive • Scenic route</div>
            </div>
          </div>
        </div>
      </section>

      <section id="book" class="cta" aria-label="Book now">
        <div class="container cta__inner">
          <div class="cta__copy">
            <h2 class="cta__title">Ready for your RA7 getaway?</h2>
            <p class="cta__text">
              Tap “Book now” to continue to your reservation flow (hook this up to your backend when ready).
            </p>
          </div>
          <div class="cta__actions">
            <button class="btn btn--primary btn--xl" type="button" @click="onBookNow">
              Book now
            </button>
            <button class="btn btn--ghost btn--xl" type="button" @click="scrollTo('highlights')">
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

<style scoped>
.page {
  --bg: #f5f7fb;
  --panel: rgba(255, 255, 255, 0.78);
  --panel2: rgba(255, 255, 255, 0.92);
  --border: rgba(2, 6, 23, 0.1);
  --text: rgba(2, 6, 23, 0.92);
  --muted: rgba(2, 6, 23, 0.66);
  --muted2: rgba(2, 6, 23, 0.48);
  --accent: #f5c542;
  --accent2: #f59e0b;
  --goldDeep: #9a6b12;
  --goldSoft: rgba(245, 197, 66, 0.55);
  --shadow: 0 18px 60px rgba(2, 6, 23, 0.12);
  color: var(--text);
  background: radial-gradient(1200px 600px at 12% 6%, rgba(245, 197, 66, 0.18), transparent 58%),
    radial-gradient(900px 520px at 92% 12%, rgba(245, 158, 11, 0.16), transparent 58%),
    radial-gradient(820px 520px at 55% 92%, rgba(154, 107, 18, 0.08), transparent 60%),
    radial-gradient(600px 360px at 30% 55%, rgba(255, 255, 255, 0.55), transparent 60%), var(--bg);
  min-height: 100vh;
}

.container {
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(14px);
  background: linear-gradient(to bottom, rgba(245, 247, 251, 0.92), rgba(245, 247, 251, 0.7));
  border-bottom: 1px solid rgba(2, 6, 23, 0.08);
}

.topbar__inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
  padding: 14px 0;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 240px;
}

.brand__mark {
  height: 42px;
  width: 56px;
  border-radius: 14px;
  background: linear-gradient(
    135deg,
    rgba(255, 246, 197, 0.92) 0%,
    rgba(245, 197, 66, 0.98) 38%,
    rgba(245, 158, 11, 0.92) 68%,
    rgba(154, 107, 18, 0.92) 100%
  );
  display: grid;
  place-items: center;
  font-weight: 800;
  letter-spacing: 0.5px;
  color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 12px 26px rgba(245, 158, 11, 0.22), 0 8px 18px rgba(245, 197, 66, 0.18);
}

.brand__name {
  font-weight: 700;
  letter-spacing: 0.2px;
}

.brand__tag {
  margin-top: 2px;
  font-size: 12px;
  color: var(--muted2);
}

.nav {
  display: none;
  gap: 16px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.nav__link {
  color: var(--muted);
  text-decoration: none;
  font-size: 13px;
  padding: 8px 10px;
  border-radius: 12px;
  transition: background 180ms ease, color 180ms ease;
}

.nav__link:hover {
  color: var(--text);
  background: rgba(2, 6, 23, 0.04);
}

.actions {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
}

.btn {
  appearance: none;
  border: 1px solid rgba(255, 255, 255, 0.92);
  background: rgba(255, 255, 255, 0.8);
  color: var(--text);
  border-radius: 14px;
  padding: 10px 12px;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  transition: transform 120ms ease, background 150ms ease, border-color 150ms ease;
}

.btn:hover {
  transform: translateY(-1px);
  background: rgba(255, 255, 255, 0.95);
  border-color: rgba(255, 255, 255, 0.98);
}

.btn:active {
  transform: translateY(0);
}

.btn--primary {
  border-color: rgba(245, 158, 11, 0.34);
  background: linear-gradient(
    135deg,
    rgba(255, 246, 197, 0.96) 0%,
    rgba(245, 197, 66, 0.96) 32%,
    rgba(245, 158, 11, 0.92) 62%,
    rgba(154, 107, 18, 0.92) 100%
  );
  color: rgba(41, 24, 3, 0.92);
  box-shadow: 0 16px 40px rgba(245, 158, 11, 0.18), 0 10px 22px rgba(245, 197, 66, 0.14);
  position: relative;
  overflow: hidden;
}

.btn--primary:hover {
  background: linear-gradient(
    135deg,
    rgba(255, 246, 197, 0.98) 0%,
    rgba(245, 197, 66, 0.99) 32%,
    rgba(245, 158, 11, 0.95) 62%,
    rgba(154, 107, 18, 0.95) 100%
  );
}

.btn--primary::after {
  content: '';
  position: absolute;
  inset: -2px;
  background: linear-gradient(105deg, transparent 0%, rgba(255, 255, 255, 0.55) 42%, transparent 62%);
  transform: translateX(-140%);
  transition: transform 650ms ease;
  pointer-events: none;
  mix-blend-mode: overlay;
}

.btn--primary:hover::after {
  transform: translateX(140%);
}

.btn--ghost {
  background: transparent;
}

.btn--lg {
  padding: 12px 16px;
  border-radius: 16px;
  font-size: 14px;
}

.btn--xl {
  padding: 14px 18px;
  border-radius: 18px;
  font-size: 14px;
}

.hero {
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid rgba(2, 6, 23, 0.08);
  padding: 44px 0 22px;
}

.hero__bg {
  position: absolute;
  inset: 0;
  filter: saturate(1.08) contrast(1.05);
}

.hero__video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.hero__bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
      180deg,
      rgba(245, 247, 251, 0.38) 0%,
      rgba(245, 247, 251, 0.58) 46%,
      rgba(245, 247, 251, 0.86) 100%
    ),
    radial-gradient(900px 500px at 80% 10%, rgba(245, 197, 66, 0.2), transparent 60%),
    radial-gradient(900px 520px at 22% 0%, rgba(245, 158, 11, 0.16), transparent 62%),
    radial-gradient(700px 420px at 50% 60%, rgba(255, 255, 255, 0.45), transparent 62%);
}

.hero__grid {
  display: grid;
  gap: 22px;
  grid-template-columns: 1fr;
  align-items: center;
  position: relative;
}

.pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(2, 6, 23, 0.1);
  color: var(--muted);
  font-weight: 600;
  font-size: 13px;
}

.pill--soft {
  background: rgba(255, 255, 255, 0.72);
  border-color: rgba(2, 6, 23, 0.09);
  font-weight: 600;
  font-size: 12px;
  padding: 7px 10px;
}

.pill__dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.35));
  box-shadow: 0 0 0 4px rgba(245, 197, 66, 0.18), 0 10px 26px rgba(245, 158, 11, 0.14);
}

.hero__title {
  margin: 14px 0 10px;
  font-size: clamp(34px, 5vw, 56px);
  line-height: 1.02;
  letter-spacing: -0.8px;
}

.hero__title-accent {
  background: linear-gradient(135deg, rgba(245, 197, 66, 1) 0%, rgba(245, 158, 11, 1) 60%, rgba(154, 107, 18, 1) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero__subtitle {
  margin: 0;
  color: var(--muted);
  max-width: 58ch;
  line-height: 1.5;
  font-size: 15px;
}

.hero__cta {
  margin-top: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.stats {
  margin: 18px 0 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  padding-top: 6px;
}

.stat {
  padding: 12px 12px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(2, 6, 23, 0.1);
  border-radius: 16px;
}

.stat__label {
  color: var(--muted2);
  font-size: 12px;
  margin: 0;
}

.stat__value {
  margin: 6px 0 0;
  font-weight: 700;
}

.hero__visual {
  position: relative;
  height: 320px;
  border-radius: 26px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.62));
  border: 1px solid rgba(2, 6, 23, 0.1);
  overflow: hidden;
  box-shadow: var(--shadow);
}

.hero__visual::before {
  content: '';
  position: absolute;
  inset: -120px -80px auto auto;
  width: 340px;
  height: 340px;
  background: radial-gradient(circle at 30% 30%, rgba(245, 197, 66, 0.24), transparent 62%);
  transform: rotate(12deg);
}

.hero__visual::after {
  content: '';
  position: absolute;
  inset: auto auto -140px -120px;
  width: 420px;
  height: 420px;
  background: radial-gradient(circle at 30% 30%, rgba(245, 158, 11, 0.18), transparent 64%);
  transform: rotate(-18deg);
}

.heroCard {
  position: absolute;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(2, 6, 23, 0.12);
  backdrop-filter: blur(10px);
  padding: 14px 14px;
}

.heroCard__label {
  color: var(--muted2);
  font-size: 12px;
  font-weight: 700;
}

.heroCard__value {
  margin-top: 6px;
  font-weight: 800;
  letter-spacing: -0.2px;
}

.heroCard--main {
  inset: 24px auto auto 22px;
  width: min(320px, 72%);
}

.heroCard--side {
  inset: auto 22px 26px auto;
  width: min(260px, 68%);
}

.heroCard--chip {
  inset: auto auto 22px 22px;
  padding: 10px 12px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 12px;
  color: rgba(2, 6, 23, 0.72);
}

.section {
  padding: 46px 0;
}

.section--alt {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.62), rgba(255, 255, 255, 0.42));
  border-top: 1px solid rgba(2, 6, 23, 0.08);
  border-bottom: 1px solid rgba(2, 6, 23, 0.08);
}

.section__head {
  display: grid;
  gap: 10px;
  margin-bottom: 18px;
}

.section__head--split {
  align-items: end;
}

.section__title {
  margin: 0;
  font-size: 26px;
  letter-spacing: -0.4px;
}

.section__desc {
  margin: 0;
  color: var(--muted);
  max-width: 70ch;
  line-height: 1.5;
  font-size: 14px;
}

.cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

.card {
  border: 1px solid rgba(2, 6, 23, 0.1);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.82);
  padding: 16px 16px;
  box-shadow: 0 18px 48px rgba(2, 6, 23, 0.08);
}

.card__icon {
  width: 40px;
  height: 40px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: rgba(2, 6, 23, 0.03);
  border: 1px solid rgba(2, 6, 23, 0.08);
  font-size: 18px;
}

.card__title {
  margin: 12px 0 6px;
  font-size: 16px;
}

.card__text {
  margin: 0;
  color: var(--muted);
  line-height: 1.5;
  font-size: 14px;
}

.segmented {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(2, 6, 23, 0.1);
  border-radius: 18px;
}

.segmented__btn {
  border: 1px solid transparent;
  background: transparent;
  color: var(--muted);
  font-weight: 700;
  font-size: 13px;
  border-radius: 14px;
  padding: 10px 10px;
  cursor: pointer;
  transition: background 150ms ease, color 150ms ease, border-color 150ms ease;
}

.segmented__btn.is-active {
  background: rgba(2, 6, 23, 0.04);
  border-color: rgba(2, 6, 23, 0.12);
  color: var(--text);
}

.stayGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
}

.stay {
  overflow: hidden;
  border-radius: 22px;
  border: 1px solid rgba(2, 6, 23, 0.1);
  background: rgba(255, 255, 255, 0.86);
  box-shadow: 0 20px 55px rgba(2, 6, 23, 0.1);
}

.stay__media {
  height: 150px;
  background: var(--tint);
  position: relative;
}

.stay__media::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(245, 247, 251, 0.1), rgba(2, 6, 23, 0.15));
}

.stay__badge {
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 1;
  padding: 7px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(2, 6, 23, 0.12);
  font-weight: 800;
  font-size: 12px;
}

.stay__body {
  padding: 14px 14px 16px;
}

.stay__title {
  margin: 0;
  font-size: 16px;
}

.stay__text {
  margin: 8px 0 0;
  color: var(--muted);
  line-height: 1.5;
  font-size: 14px;
}

.stay__meta {
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.stay__footer {
  margin-top: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.stay__priceLabel {
  color: var(--muted2);
  font-size: 12px;
  font-weight: 700;
}

.stay__priceValue {
  display: inline-block;
  margin-left: 8px;
  font-weight: 900;
  letter-spacing: -0.2px;
}

.stay__priceNote {
  color: var(--muted2);
  font-size: 12px;
  margin-left: 6px;
}

.amenities {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

.amenity {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 14px 14px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(2, 6, 23, 0.1);
}

.amenity__icon {
  width: 40px;
  height: 40px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: rgba(2, 6, 23, 0.03);
  border: 1px solid rgba(2, 6, 23, 0.08);
  font-size: 18px;
  flex: 0 0 auto;
}

.amenity__name {
  font-weight: 800;
}

.amenity__desc {
  margin-top: 4px;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.5;
}

.gallery {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

.shot {
  position: relative;
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid rgba(2, 6, 23, 0.1);
  min-height: 150px;
  background-position: center;
  background-size: cover;
  box-shadow: 0 22px 60px rgba(2, 6, 23, 0.1);
}

.shot::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(245, 247, 251, 0.55), rgba(245, 247, 251, 0.08));
}

.shot__overlay {
  position: absolute;
  inset: auto 14px 14px 14px;
  z-index: 1;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(2, 6, 23, 0.08);
  border-radius: 16px;
  padding: 12px 12px;
  backdrop-filter: blur(8px);
}

.shot__title {
  font-weight: 900;
  letter-spacing: -0.2px;
}

.shot__text {
  margin-top: 4px;
  color: rgba(2, 6, 23, 0.66);
  font-size: 13px;
}

.location {
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
  align-items: center;
}

.location__facts {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 16px;
}

.fact {
  padding: 12px 12px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.fact__k {
  color: var(--muted2);
  font-weight: 800;
  font-size: 12px;
}

.fact__v {
  margin-top: 6px;
  font-weight: 800;
}

.mapMock {
  position: relative;
  border-radius: 26px;
  height: 260px;
  border: 1px solid rgba(2, 6, 23, 0.1);
  background: radial-gradient(800px 280px at 10% 20%, rgba(245, 197, 66, 0.14), transparent 60%),
    radial-gradient(700px 240px at 95% 30%, rgba(245, 158, 11, 0.12), transparent 58%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.62));
  overflow: hidden;
  box-shadow: var(--shadow);
}

.mapMock::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(2, 6, 23, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(2, 6, 23, 0.06) 1px, transparent 1px);
  background-size: 36px 36px;
  opacity: 0.25;
}

.mapMock__pin {
  position: absolute;
  left: 55%;
  top: 52%;
  width: 18px;
  height: 18px;
  border-radius: 999px;
  background: rgba(245, 158, 11, 0.95);
  box-shadow: 0 0 0 8px rgba(245, 158, 11, 0.18), 0 18px 45px rgba(0, 0, 0, 0.18);
}

.mapMock__label {
  position: absolute;
  left: 18px;
  bottom: 18px;
  right: 18px;
  padding: 14px 14px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.74);
  border: 1px solid rgba(2, 6, 23, 0.12);
  backdrop-filter: blur(10px);
}

.mapMock__name {
  font-weight: 900;
}

.mapMock__meta {
  margin-top: 4px;
  color: var(--muted);
  font-size: 13px;
}

.cta {
  padding: 34px 0 50px;
}

.cta__inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
  padding: 22px 18px;
  border-radius: 26px;
  border: 1px solid rgba(2, 6, 23, 0.1);
  background: radial-gradient(800px 280px at 10% 0%, rgba(245, 197, 66, 0.18), transparent 55%),
    radial-gradient(600px 240px at 100% 40%, rgba(245, 158, 11, 0.14), transparent 58%),
    rgba(255, 255, 255, 0.82);
  box-shadow: var(--shadow);
}

.cta__title {
  margin: 0;
  font-size: 24px;
  letter-spacing: -0.4px;
}

.cta__text {
  margin: 10px 0 0;
  color: var(--muted);
  max-width: 70ch;
  line-height: 1.5;
  font-size: 14px;
}

.cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
}

@media (min-width: 860px) {
  .topbar__inner {
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
  }

  .nav {
    display: flex;
  }

  .actions {
    justify-content: flex-end;
  }

  .hero {
    padding: 64px 0 28px;
  }

  .hero__grid {
    grid-template-columns: 1.05fr 0.95fr;
    gap: 26px;
  }

  .stats {
    grid-template-columns: repeat(3, 1fr);
  }

  .cards {
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
  }

  .section__head--split {
    grid-template-columns: 1fr auto;
  }

  .stayGrid {
    grid-template-columns: repeat(3, 1fr);
  }

  .amenities {
    grid-template-columns: repeat(3, 1fr);
  }

  .gallery {
    grid-template-columns: repeat(12, 1fr);
    gap: 14px;
  }

  .shot:nth-child(1) {
    grid-column: span 7;
    min-height: 220px;
  }

  .shot:nth-child(2) {
    grid-column: span 5;
    min-height: 220px;
  }

  .shot:nth-child(3) {
    grid-column: span 5;
    min-height: 210px;
  }

  .shot:nth-child(4) {
    grid-column: span 7;
    min-height: 210px;
  }

  .shot:nth-child(5) {
    grid-column: span 12;
    min-height: 220px;
  }

  .location {
    grid-template-columns: 1fr 1fr;
    gap: 18px;
  }

  .location__facts {
    grid-template-columns: repeat(3, 1fr);
  }

  .cta__inner {
    grid-template-columns: 1fr auto;
    align-items: center;
    padding: 26px 24px;
  }

  .cta__actions {
    justify-content: flex-end;
  }
}
@media (prefers-reduced-motion: reduce) {
  .btn,
  .nav__link {
    transition: none;
  }
}
</style>
