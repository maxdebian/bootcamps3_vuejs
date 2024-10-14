<template>
  <div>
        <button @click="incrementar">Incrementar</button>
        <button @click="decrementar">Decrementar</button>
        <br>
        <label for="counter">Counter</label>
        <input v-model="counterBis" id="counter">
        <br>
        <label for="nombre">Nombre</label>
        <input v-model="nombre">
        <br>
        <label for="dni">dni</label>
        <input v-model="dni">
        <p>{{ resultComputed }}</p>
        <p>{{ nombre }}</p>
    </div>
</template>
<script setup lang="ts">
    import {computed, ref, watch, watchEffect} from 'vue';
    const counterBis = ref(0);
    const nombre=ref('');
    const incrementar = ()=>{
        counterBis.value++;
    }
    const decrementar = ()=>{
        counterBis.value--;
    }
    const resultComputed = computed(()=>{
        console.log('computed');
        return `Result: ${counterBis.value} y su nombre es: ${nombre.value}`;
    }) 
    watch([counterBis,nombre],([newValueCounterBis,newValueNombre],[preventValueCounterBis,preventValueNombre])=>{
        console.log(`counterBis: ${counterBis.value}   new counter: ${newValueCounterBis}  preventCounter:  ${preventValueCounterBis}  new nombre: ${newValueNombre}   y prevent nombre: ${preventValueNombre}`)
    })
    watchEffect(()=>{
        console.log(`watchEffect nombre: ${nombre.value}`)
    })
    const dni = ref('');
    const stopWatch = watchEffect(()=>{
        console.log(`dni: ${dni.value}`)
        if(dni.value.length===8) stopWatch();
    })

</script>

<style scoped>

</style>