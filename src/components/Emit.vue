<template>
    <div>
        <h1>Emit</h1>
      <!--   <button @click="$emit('enviarSaludo',200)">Enviar Salud</button> -->
        <button @click="pruebaNuestroEvento('enviarSaludo2',myMessage)">Enviar Logica</button>
    </div>
</template>
<script setup lang="ts">
    import { defineEmits } from 'vue';
    const pruebaNuestroEvento = defineEmits(['enviarSaludo2'])
    const myMessage = 'Hola'
</script>
<style scoped>

</style>