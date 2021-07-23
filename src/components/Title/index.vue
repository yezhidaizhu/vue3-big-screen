<template>
  <div class="flex justify-between  h-full items-center">
    <DvDecoration8 style="width:300px;height:50px;" />
    <DvDecoration7>
      <span class=" text-3xl font-bold p-2">
        {{title}}
      </span>
    </DvDecoration7>

    <DvDecoration8 :reverse="true"
                   style="width:300px;height:50px;" />
  </div>
  <DvDecoration2 :dur='8'
                 style="width:85%;height:5px;"
                 class="m-auto" />
</template>
<script setup>
import { title } from '@/config/index';

</script>
