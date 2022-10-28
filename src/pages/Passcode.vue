<script lang="ts" setup>
import { computed, ref } from "vue";

const props = defineProps<{
    start: boolean
}>();

const passcode = ref<string>();

const apiKey = ref<string>();

const charset = "ABDEJKLMNOPQRVWXYZ";

const randomPasscode = () => {
    let temp = "";
    for (let i = 0; i < 5; i++) {
        temp += charset.at(Math.random() * charset.length);
    }
    passcode.value = temp;
};

const error = ref(false);

const valid = computed(() => {
    const val = passcode.value;
    return val && val.length >= 4 && val.length <= 9 && !val.includes("/") && (!props.start || apiKey.value);
});
</script>
<template>
    <div class="max-w-xl w-full min-h-full flex flex-col justify-center items-center mx-auto mb-20">
        <div class="alert alert-error shadow-lg mb-5" v-if="error">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span v-if="start">That passcode cannot be used at this time.</span>
                <span v-else>No game with that passcode could not be found.</span>
            </div>
        </div>
        <div class="form-control w-full shadow-lg my-2">
            <div :class="{'input-group input-group-lg': start}">
                <input v-model="passcode" type="text" placeholder="Passcode (must be between 4 and 9 characters)"
                    class="input input-lg w-full input-bordered" @input="error = false" />
                <button v-if="start" @click="randomPasscode" class="btn btn-lg btn-secondary">
                    Random
                </button>
            </div>
        </div>
        <div class="form-control w-full shadow-lg my-2" v-if="start">
            <input v-model="apiKey" type="text" placeholder="OpenAI API Key"
                    class="input input-lg w-full input-bordered" />
        </div>
        <div class="flex justify-center my-2">
            <button class="btn btn-primary btn-lg" :class="{'shadow-lg': valid}" :disabled="!valid || error">
                {{ start ? 'Start' : 'Join' }} Game
            </button>
        </div>
    </div>
</template>