<script lang="ts" setup>
import { computed, ref } from 'vue';
import { game, isAdmin } from '../store';

const teamOneName = ref("Team One");
const teamTwoName = ref("Team Two");

const ready = computed(() => Object.keys(game.value.players || {}).length >= 2);
</script>
<template>
<div class="flex flex-col w-full mb-5">
    <div class="text-center w-full">
        <h3 class="text-5xl underline">Access Code</h3>
        <h2 class="text-9xl font-bold">{{ game.id }}</h2>
        <h4 class="text-2xl">Join at AIFeud.web.app</h4>
        <h3 class="text-5xl mt-10">Teams</h3>
    </div>
    <div class="flex flex-grow max-w-3xl w-full self-center mt-5 mb-3 text-center">
        <div class="w-1/2 px-5">
            <input v-model="teamOneName" type="text" class="input input-lg input-bordered shadow-lg w-full" />
            <ul>
                <li class="text-xl py-2">Player 1</li>
                <li class="text-xl py-2">Player 2</li>
                <li class="text-xl py-2">Player 3 dsafsdfa</li>
            </ul>
        </div>
        <div class="w-1/2 px-5">
            <input v-model="teamTwoName" type="text" class="input input-lg input-bordered shadow-lg w-full" />
            <ul>
                <li class="text-xl py-2">Player 1</li>
                <li class="text-xl py-2">Player 2</li>
                <li class="text-xl py-2">Player 3</li>
            </ul>
        </div>
    </div>
    <div class="text-center" v-if="isAdmin">
        <button class="btn btn-lg btn-primary mb-3" :class="{'shadow-lg': ready}" :disabled="!ready">Start Game</button>
    </div>
</div>
</template>