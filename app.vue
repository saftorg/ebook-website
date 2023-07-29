<template>
  <div
    class="bg-[#3445CE] min-h-screen isolate grid place-content-center px-4 md:px-0"
  >
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
    <div class="max-w-4xl text-center">
      <div class="relative grid place-items-center h-7 md:h-10">
        <div
          class="col-start-1 row-start-1 rounded-[50%] border border-white mix-blend-overlay w-60 h-10 mx-auto -rotate-6"
        />
        <h3
          class="col-start-1 row-start-1 font-tenor-sans uppercase text-xl md:text-3xl"
        >
          Free
        </h3>
      </div>
      <h2 class="font-joyride text-5xl md:text-8xl uppercase">Ebook</h2>
    </div>
    <div
      class="border border-white/50 rounded-lg bg-white/10 backdrop-blur p-6 -mt-5 md:-mt-10"
    >
      <h3 class="text-center text-2xl md:text-3xl mb-4">
        Get your <b>free</b> ebook!
      </h3>
      <Input title="name" class="my-4" />
      <Input title="email" />
      <button
        class="mt-8 bg-white transition shadow-black/10 shadow-lg hover:scale-[1.02] text-lg py-2 px-6 text-[#060E53] rounded w-full"
      >
        Get Ebook
      </button>
    </div>
  </div>
</template>

<style lang="scss">
@import url("assets/fonts/joyride/joyride.css");

.font-joyride {
  font-family: "Joyride EXT";
}

body {
  @apply font-["Manrope"];
  @apply text-white;
  @apply overflow-hidden;
}
</style>
