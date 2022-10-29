<script lang="ts" setup>
const getIndex = (idx: number) => {
    if (idx % 2) {
        return (idx - 1) / 2 + 4;
    } else {
        return (idx / 2) + 1;
    }
};

const data = ["Watch a movie", "Go for a walk", "Have a picnic", "Go to the beach", "Go camping", "Go fishing"];
</script>
<template>
    <div class="flex flex-col flex-grow">
        <h1 class="w-full text-4xl font-bold text-center">List 6 ways to relax on the weekend.</h1>
        <div class="grid grid-rows-6 grid-cols-1 md:grid-cols-2 md:grid-rows-3 flex-grow px-8">
            <div v-for="(answer, idx) in data" class="flex items-center bg-secondary m-6 rounded-lg shadow-lg p-4">
                <h4 class="text-4xl font-bold text-center w-full">{{ answer }}</h4>
                <button class="btn btn-lg ml-4">Show</button>
            </div>
        </div>
        <h1 class="text-4xl text-center">Noah is thinking of an answer</h1>
        <div class="flex justify-center items-center my-3">
            <div v-for="idx in 3" class="border-4 border-error rounded-xl px-3 mx-3 text-9xl text-error" :class="{hidden: idx > 1}">X</div>
            <button class="btn btn-lg btn-error absolute right-16">Incorrect</button>
        </div>
    </div>
</template>