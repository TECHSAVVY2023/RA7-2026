<template>
  <footer class="border-t border-[rgba(2,6,23,0.08)] bg-white/55 pt-5 pb-7">
    <div
      class="mx-auto flex w-[min(1120px,calc(100%-40px))] flex-col items-start justify-between gap-3.5 min-[860px]:flex-row min-[860px]:items-center"
    >
      <div class="flex items-center gap-3">
      
        <div class="flex flex-col items-start gap-0.5">
          <img src="/images/RA7.jpg" alt="RA7 Resort Logo" class="w-40 h-40 rounded-full object-cover" />
          
        </div>
      </div>
     <div class="flex gap-70 items-start">
      <div class="">
        <section class="font-extrabold text-m text-[rgba(2,6,23,0.92)]">
          Navigate
        </section>
          <a class="block text-sm text-gray-600 hover:text-black py-1 " href="#home">
             Home
          </a>
           <a class="block text-sm text-gray-600 hover:text-black py-1 " href="#highlights">
            Highlights
           </a>
           <a class="block text-sm text-gray-600 hover:text-black py-1 " href="#stays">
            Stays
           </a>
             <a class="block text-sm text-gray-600 hover:text-black py-1 " href="#amenities">
            Amenities
           </a>
             <a class="block text-sm text-gray-600 hover:text-black py-1" href="#gallery">
            Gallery
           </a>
             <a class="block text-sm text-gray-600 hover:text-black py-1" href="#location">
            Location
           </a>
      </div> 

    <div class="flex flex-col items-start gap-1">
        <section class="font-extrabold text-m text-[rgba(2,6,23,0.92)]">
            Find Us
          </section>
          <div class="flex items-center gap-2">
            <img src="/images/fb.png" alt="Facebook Icon" class="w-5 h-5 object-contain brightness-50 contrast-125 opacity-70" />
            <a class="block text-sm text-gray-600 hover:text-black py-1" href="#facebook">
              Facebook Page
            </a>
          </div>
            <div class="flex items-center gap-2">
            <img src="/images/telephone.png" alt="Telephone Icon" class="w-5 h-5 object-contain brightness-50 contrast-125 opacity-70" />
            <a class="block text-sm text-gray-600 hover:text-black py-1" href="#phone"   >
             Phone Number: 09123456789
            </a>
            </div>
            <div class="flex items-center gap-2"> 
            <img src="/images/location.png" alt="Location Icon" class="w-5 h-5 object-contain brightness-50 contrast-125 opacity-70" />
            <a class="block text-sm text-gray-600 hover:text-black py-1" href="#address">
              Workflow Co-Working Space
              Mercury Drug/SSS, Ozamiz City
            </a>
            </div>
           </div>       
    </div>   
   </div>
    
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

