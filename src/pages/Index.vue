<script lang="ts" setup></script>
<template>
    <div class="hero min-h-full">
        <div class="hero-content text-center">
            <div class="max-w-lg">
                <h1 class="text-8xl font-bold">AI Feud</h1>
                <p class="py-5">A Family Feud inspired game that uses GPT-3 to generate answers.</p>
                <div class="flex justify-center mx-auto max-w-xs">
                    <router-link to="/start" class="btn btn-primary shadow-lg mx-3 w-1/2">Start Game</router-link>
                    <router-link to="/join" class="btn btn-secondary shadow-lg mx-3 w-1/2">Join Game</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
