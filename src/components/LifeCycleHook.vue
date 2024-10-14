<template>
    <div>
        <h1>LifeCycle Hook</h1>
        <h2>Nombre: {{ nombre }}</h2>
        <h2>Apellido: {{ apellido }}</h2>
    </div>
 </template>

 <script setup lang="ts">
    import {onBeforeMount, onMounted, ref} from 'vue';

    onMounted(()=>{
        nombre.value = 'Maximiliano';
        apellido.value = 'Tedesco';
        console.log('montado')
    })

    const nombre = ref();
    const apellido = ref();
    onBeforeMount(()=>{
        console.log('Antes de montar');
    })

    

 </script>

 <style scoped>
    
 </style>