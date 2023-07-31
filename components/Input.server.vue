<script lang="ts" setup>
import { sentenceCase } from "change-case";
import { InputHTMLAttributes } from "nuxt/dist/app/compat/capi";

const props = withDefaults(
  defineProps<{ title: string; type: InputHTMLAttributes["type"] }>(),
  {
    type: "text",
  },
);
</script>
<template>
  <label class="grid text-lg" :for="props.title">
    {{ sentenceCase(props.title) }}
    <input
      class="rounded border bg-transparent py-2 px-5"
      :type="props.type"
      :id="props.title"
      :name="props.title"
    />
  </label>
</template>
