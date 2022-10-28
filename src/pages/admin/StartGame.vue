<script lang="ts" setup>
import { computed, ref } from "vue";

const passcode = ref<string>();

const charset = "ABDEJKLMNOPQRVWXYZ";

const randomPasscode = () => {
    let temp = "";
    for (let i = 0; i < 5; i++) {
        temp += charset.at(Math.random() * charset.length);
    }
    passcode.value = temp;
};

const valid = computed(() => {
    const val = passcode.value;
    return val && val.length >= 4 && val.length <= 9 && !val.includes("/");
});
</script>
<template>
    <div class="w-full mx-10 text-center">
        <div class="alert alert-error shadow-lg mb-5">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>That passcode cannot be used at this time.</span>
            </div>
        </div>
        <div class="form-control">
            <div class="input-group input-group-lg shadow-lg">
                <input v-model="passcode" type="text" placeholder="Passcode (must be between 4 and 9 characters)"
                    class="input input-lg w-full input-bordered" />
                <button class="btn btn-lg btn-secondary" @click="randomPasscode">
                    Random passcode
                </button>
            </div>
        </div>
        <button class="btn btn-primary shadow-lg btn-lg m-4" v-show="valid">Start Game</button>
    </div>
</template>