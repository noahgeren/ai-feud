<script lang="ts" setup>
import { user } from "../../store";
</script>
<template>
    <h1>Hello {{ user?.uid }}</h1>
</template>