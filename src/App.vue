<script setup>
import {onMounted} from "vue"
import Nav from "./components/Nav.vue"
import {RouterView} from "vue-router"
import { useUserStore } from "./stores/Users"

const useStore=useUserStore()

onMounted(()=>{
  useUserStore.getUser()
})
</script>

<template>
  <main>
   <Nav/>
   <RouterView/>
  </main>
</template>

<style scoped>

</style>
