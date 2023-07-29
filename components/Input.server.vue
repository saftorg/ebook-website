<script lang="ts" setup>
import { sentenceCase } from "change-case";

const props = defineProps<{ title: string }>();
</script>
<template>
  <label class="grid text-lg" :for="props.title">
    {{ sentenceCase(props.title) }}
    <input
      class="rounded border bg-transparent py-2 px-5"
      type="text"
      :id="props.title"
    />
  </label>
</template>
