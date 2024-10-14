<template>
    <div>
        <h1>Componente reactivo</h1>
        <h3 :class="asignarClase">Ahorro $ {{ ahorro }}</h3>
        <p>Nombre: {{ nombre }}</p>
        <!-- <h3 class="verde">Ahorro $ {{ ahorro }}</h3> -->
        <input type="text" v-model="nombre">
        <button @click="depositarEnCajero(100)">Depositar 100</button>

    </div>    
</template>

<script setup lang="ts">
    import {computed, ref} from "vue";
    const ahorro = ref<number>(100);
    const nombre = ref('');
    /* const asignarClase = ref(''); */
    const depositarEnCajero = (cantidadADepositar:number)=>{
        ahorro.value += cantidadADepositar;
      /*    if(ahorro.value>1000){
            asignarClase.value ='verde';
        }else{
            asignarClase.value ='rojo';
        }   */
        console.log(` --->  ${cantidadADepositar}`);
    }
    //const asignarClase = 'verde';
     const asignarClase = computed(()=>{
        if(ahorro.value>1000){
            console.log('ENTRAMOS AL COMPUTED');
            return 'verde'; 
        } 
        /* console.log('ENTRAMOS AL COMPUTED');
        return 'rojo'; */
    })   
</script>

<style scoped>
.verde{
    color: green;
}
.rojo{
    color: red;
}
</style>