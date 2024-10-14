<template>
    <div>
        <h1>Composable</h1>
        <button @click="incrementar">Incrementar</button>
        <button @click="decrementar">Decrementar</button>
        <br>
        <label for="counter">Counter</label>
        <input v-model="counterBis" id="counter">
        <p>{{ resultComputed }}</p> 
    </div>
</template>
<script setup lang="ts">
    import useCounter from '@/composables/useCounter';
    const {incrementar,decrementar,counterBis,resultComputed} = useCounter();
</script>

<style scoped>

</style>