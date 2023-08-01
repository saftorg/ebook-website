<script lang="ts" setup>
import gsap from "gsap";

onMounted(() => {
  const tl = gsap.timeline({
    autoplay: true,
    loop: false,
    delay: 0.5,
  });

  gsap.set("#free-ebook-parent", { translateY: "100%" });
  gsap.set(".path", { opacity: 0.5 });

  tl.fromTo(
    "#free",
    { scale: 1.1, opacity: 0, ease: "expo.out" },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
    },
  );

  tl.fromTo(
    "#ebook",
    { scale: 1.1 },
    {
      scale: 1,
      opacity: 1,
      ease: "expo.out",
      duration: 1,
    },
    0.15,
  );

  tl.fromTo(
    ".path",
    { strokeDashoffset: 1 },
    {
      strokeDashoffset: 0,
      autoRound: false,
      ease: "expo.inOut",
      duration: 2,
    },
    0.3,
  );

  tl.to("#free-ebook-parent", {
    translateY: "0%",
    ease: "expo.inOut",
    duration: 2,
  });

  tl.fromTo(
    "#form",
    { opacity: 0, filter: "blur(20px)" },
    {
      opacity: 1,
      filter: "blur(0px)",
      ease: "expo.inOut",
      duration: 2,
    },
    2.5,
  );
});
</script>

<template>
  <div class="grid place-content-center isolate h-screen">
    <div id="free-ebook-parent" class="max-w-4xl text-center z-[-1]">
      <div class="relative grid place-items-center h-10 mb-3 md:mb-4">
        <div class="col-start-1 row-start-1 w-50 h-10 mx-auto mb-8">
          <svg
            width="282"
            height="67"
            viewBox="0 0 282 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M281.092 10.5515C281.321 11.957 280.707 13.5516 279.13 15.3347C277.557 17.1119 275.089 19.0041 271.786 20.9748C265.184 24.9135 255.355 29.1035 243.012 33.2919C218.333 41.6662 183.694 50.0044 144.947 56.316C106.201 62.6276 70.7063 65.7137 44.6456 65.6046C31.6112 65.55 20.9606 64.696 13.45 63.0561C9.69212 62.2356 6.75086 61.2247 4.69588 60.0383C2.63414 58.848 1.54575 57.5307 1.3168 56.1252C1.08786 54.7198 1.70193 53.1252 3.27932 51.3421C4.85154 49.5648 7.31991 47.6727 10.6231 45.702C17.225 41.7633 27.0539 37.5733 39.3972 33.3849C64.076 25.0106 98.715 16.6723 137.462 10.3607C176.208 4.04915 211.703 0.963056 237.763 1.07219C250.798 1.12677 261.448 1.98074 268.959 3.62062C272.717 4.44113 275.658 5.45207 277.713 6.63848C279.775 7.82879 280.863 9.14604 281.092 10.5515Z"
              stroke="white"
              stroke-dasharray="1"
              stroke-dashoffset="1"
              pathLength="1"
              class="path opacity-0 mix-blend-overlay bg-white"
            />
          </svg>
        </div>
        <h3
          class="col-start-1 row-start-1 font-tenor-sans uppercase text-2xl md:text-3xl opacity-0"
          id="free"
        >
          Free
        </h3>
      </div>
      <h2
        id="ebook"
        class="font-joyride text-5xl md:text-8xl uppercase opacity-0"
      >
        Ebook
      </h2>
    </div>
    <form
      id="form"
      class="border border-white/50 rounded-lg bg-white/10 backdrop-blur p-6 -mt-5 md:-mt-10 opacity-0"
      action="/api/details"
    >
      <h3 class="text-center text-2xl md:text-3xl mb-4">
        Get your <b>free</b> ebook!
      </h3>
      <Input title="name" type="text" class="my-4" />
      <Input title="email" type="email" />
      <button
        class="mt-8 bg-white transition shadow-black/10 shadow-lg hover:scale-[1.02] text-lg py-2 px-6 text-[#060E53] rounded w-full"
      >
        Get Ebook
      </button>
    </form>
  </div>
</template>
