<script lang="ts" setup>
import { ref } from 'vue';

const isAdmin = true;
const isThinking = true; // TODO: Replace with logic

const question = ref<string>();
</script>
<template>
    <div v-if="isAdmin" class="flex flex-col self-center items-center w-full">
        <h2 class="text-6xl mb-4">Team one is thinking of a prompt.</h2>
        <div class="input-group justify-center">
            <span class="px-6 font-semibold">List 6</span>
            <input
            v-model="question"
            id="question"
            type="text"
            placeholder="Example: ways to relax on the weekend."
            class="input input-lg input-bordered shadow-lg max-w-lg w-full" maxlength="50" />
        </div>
        <div class="my-4">
            <button class="btn btn-lg btn-primary mx-3" :disabled="!question || question.length < 10">Pass</button>
            <button class="btn btn-lg btn-secondary mx-3" :disabled="!question || question.length < 10">Play</button>
        </div>
    </div>
    <div v-else class="self-center w-full text-center">
        <div v-if="isThinking">
            <h2 class="text-6xl">Think of a "List 6" prompt!</h2>
            <h3 class="text-3xl mt-4">You can choose to pass or play with this prompt.</h3>
            <h3 class="text-3xl mt-3">Examples:</h3>
            <ul>
                <li>List 6 of the best date ideas.</li>
                <li>List 6 ways to have fun on the weekend.</li>
                <li>List 6 things you would find in a supermarket.</li>
            </ul>
            <h3 class="text-3xl mt-12">Let the admin know when your prompt is ready.</h3>
        </div>
        <h2 v-else class="text-6xl">Team one is thinking of a prompt.</h2>
    </div>
</template>