<template>
  <DvFullScreenContainer>
    <div class="h-full flex flex-col">
      <!-- title -->
      <div class="h-16">
        <Title />
      </div>

      <!-- content -->
      <div class="flex-1 p-4">
        <Demo />
      </div>
    </div>
  </DvFullScreenContainer>
</template>

<script setup>
import Title from '@/components/Title/index.vue';
import Demo from '@/pages/Demo.vue';

</script>

