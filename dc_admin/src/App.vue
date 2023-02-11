<template>
    <router-view></router-view>
    <button @click="user.add()">{{ user.count }}</button>
</template>

<script setup lang="ts">
import { useUserStore } from "~/stores/user";
const user = useUserStore()

</script>