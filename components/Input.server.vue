<script lang="ts" setup>
import { sentenceCase } from "change-case";

const props = withDefaults(
  defineProps<{
    title: string;
  }>(),
  {},
);
</script>
<template>
  <label class="grid text-lg" :for="props.title">
    {{ sentenceCase(props.title) }}
    <input
      class="rounded border placeholder:text-white/25 bg-transparent py-2 px-5 [&:not(:placeholder-shown)]:invalid:[&:not(:focus)]:border-red-500"
      :id="props.title"
      :name="props.title"
      v-bind="$attrs"
    />
  </label>
</template>
