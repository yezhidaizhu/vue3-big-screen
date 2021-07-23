<template>
  <DvFullScreenContainer>
    <div class="h-full flex flex-col">
      <!-- title -->
      <div class="h-16">
        <Title />
      </div>

      <!-- content -->
      <div class="flex-1">
        <slot />
      </div>
    </div>
  </DvFullScreenContainer>
</template>
<script setup>
import Title from '@/components/Title/index.vue';

</script>