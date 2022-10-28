<script lang="ts" setup>
import { router } from './router';

const confirmLeave = (e: any) => {
  if(!confirm("Are you sure you want to leave this page?")) {
    e.preventDefault();
  }
};
</script>
<template>
  <div class="flex flex-col min-h-screen bg-base-200">
    <div class="navbar" v-if="router.currentRoute.value.path !== '/'">
      <a href="/" class="text-xl font-bold ml-4" @click="confirmLeave">AI FEUD</a>
    </div>
    <div class="flex flex-grow">
      <router-view></router-view>
    </div>
  </div>
</template>