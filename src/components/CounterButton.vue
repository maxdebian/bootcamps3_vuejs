<template>
    <div>
        <button @click="counter++">Incrementar</button>
        <button @click="counter--">Decrementar</button>
        <p>Result {{ counter }}</p>
    </div>
 </template>

 <script setup lang="ts">
    import {ref} from 'vue';
    const counter = ref(0);

 </script>

 <style scoped>

    
 </style>