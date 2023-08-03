<template>
  <div class="isolate px-4 md:px-0 overflow-hidden relative">
    <img
      src="~/assets/purple-blurb.svg"
      alt="purple blurb"
      class="absolute -top-[16%] -left-1/4 lg:-top-1/2 lg:-left-1/3 w-full z-[-1]"
    />
    <img
      src="~/assets/blue-blurb.svg"
      alt="blue blurb"
      class="absolute -bottom-[16%] lg:-bottom-1/2 w-full z-[-1]"
    />
    <nuxt-page />
  </div>
</template>

<style lang="scss">
@import url("assets/fonts/joyride/joyride.css");

html {
  font-size: 16px;
}

.font-joyride {
  font-family: "Joyride EXT";
}

body {
  @apply font-["Manrope"];
  @apply text-white;
  @apply h-screen;
  @apply w-screen;
  @apply overflow-hidden;
  @apply bg-[#3445ce];
}
</style>
