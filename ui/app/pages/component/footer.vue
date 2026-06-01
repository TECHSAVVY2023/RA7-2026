<template>
  <footer class="border-t border-[rgba(2,6,23,0.08)] bg-white/55 pt-5 pb-7">
    <div
      class="mx-auto flex w-[min(1120px,calc(100%-40px))] flex-col items-start justify-between gap-3.5 min-[860px]:flex-row min-[860px]:items-center"
    >
      <div class="flex items-center gap-3">
        <div
          aria-hidden="true"
          class="grid h-8.5 w-11.5 place-items-center rounded-xl bg-[linear-gradient(135deg,rgba(255,246,197,0.92)_0%,rgba(245,197,66,0.98)_38%,rgba(245,158,11,0.92)_68%,rgba(154,107,18,0.92)_100%)] text-[13px] font-extrabold tracking-[0.5px] text-white/95 shadow-[0_12px_26px_rgba(245,158,11,0.22),0_8px_18px_rgba(245,197,66,0.18)]"
        >
          RA7
        </div>
        <div>
          <div class="font-extrabold text-[rgba(2,6,23,0.92)]">RA7 Resort</div>
          <div class="mt-0.5 text-xs text-[rgba(2,6,23,0.48)]">
            © {{ year }} • Crafted for calm stays
          </div>
        </div>
      </div>

      <div aria-label="Footer links" class="flex flex-wrap gap-2.5">
        <a
          class="rounded-xl border border-[rgba(2,6,23,0.1)] bg-white/75 px-2.5 py-2 text-[13px] font-bold text-[rgba(2,6,23,0.66)] no-underline hover:bg-white/95 hover:text-[rgba(2,6,23,0.92)]"
          href="#stays"
        >
          Rooms
        </a>
        <a
          class="rounded-xl border border-[rgba(2,6,23,0.1)] bg-white/75 px-2.5 py-2 text-[13px] font-bold text-[rgba(2,6,23,0.66)] no-underline hover:bg-white/95 hover:text-[rgba(2,6,23,0.92)]"
          href="#amenities"
        >
          Amenities
        </a>
        <a
          class="rounded-xl border border-[rgba(2,6,23,0.1)] bg-white/75 px-2.5 py-2 text-[13px] font-bold text-[rgba(2,6,23,0.66)] no-underline hover:bg-white/95 hover:text-[rgba(2,6,23,0.92)]"
          href="#location"
        >
          Location
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

