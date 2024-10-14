<template>
    <div>
        <h1>Componente reactivo</h1>
        <h3>Ahorro $ {{ ahorro }}</h3>
        <p v-if="ahorro===1000">Mi ahorro numerico es {{ ahorro }}</p>
        <button @click="depositarEnCajero(1000)">Depositar 1000</button>
    </div>    
</template>

<script setup lang="ts">
    import {ref} from "vue";
    const ahorro = ref<number>(1000);
    const depositarEnCajero = (cantidadADepositar:number)=>{
        ahorro.value += cantidadADepositar;
        console.log(cantidadADepositar);
    }
</script>

<style scoped>

</style>