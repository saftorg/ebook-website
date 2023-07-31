<template>
  <div class="grid place-content-center isolate h-screen">
    <div class="max-w-4xl text-center z-[-1]">
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
    <form
      class="border border-white/50 rounded-lg bg-white/10 backdrop-blur p-6 -mt-5 md:-mt-10"
      action="/api/details"
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
    </form>
  </div>
</template>
