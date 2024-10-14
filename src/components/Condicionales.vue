<template>
    <div>
        <!-- <p v-if="ahorro >= 10000">Sos Millonario</p>
        <p v-else-if="ahorro>=100 && ahorro<10000">Tengo dinero</p>
        <p v-else>Soy pobre :(</p> -->
        <div :style="soyRico" v-if="ahorro >= 10000">
            Sos Millonario
            me puedo comprar un auto
            <p>Esto esta bien</p>
        </div>
        <div v-else-if="ahorro>=100 && ahorro<10000">
            Tengo dinero
        </div>
        <div v-else>Soy pobre :(</div> 

        <p v-show="ahorro >= 10000">Esto es un v-show</p>

    </div>    
</template>

<script setup lang="ts">
    const ahorro = 500;
    const soyRico = " color:green;font-size: 20px;";
</script>

<style scoped>

</style>