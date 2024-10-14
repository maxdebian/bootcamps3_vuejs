<template>
    <div>
        <h1>Componente reactivo</h1>
        <p>Saldo {{ saldo }}</p>
        <button @click="depositar(1000)">Depositar 1000</button>
        <button @click="retirar(1000)" :disabled="desabilitarBoton">Retirar 1000</button>
        <div>
            <h4>Movimientos</h4>
            <ul>
                <li v-for="(movimiento,index) in movimientos" :key="index">
                    <span v-if="movimiento.monto > 0 ">
                        Deposito Monto: {{ movimiento.monto }} | Saldo Actual: {{ movimiento.saldoActual }}
                    </span>
                    <span v-else>
                        Extraccion Monto: {{ movimiento.monto }} | Saldo Actual: {{ movimiento.saldoActual }}
                    </span>
                </li>
            </ul>
        </div>
    </div>    
</template>

<script setup lang="ts">
    import {computed, ref} from "vue";
    
    interface IMovimiento{
        monto:number;
        saldoActual:number;
    }
    /* const desabilitarBoton = false; */
    const saldo = ref<number>(0);
    const movimientos = ref<IMovimiento[]>([]);
    const depositar = (cantidad:number) => {
        saldo.value += cantidad
        movimientos.value.push({
            monto:cantidad,
            saldoActual:saldo.value
        })
    }
    const retirar = (cantidad:number) => {
        saldo.value -= cantidad
        movimientos.value.push({
            monto: -cantidad,
            saldoActual: saldo.value
        })
    }
   /*  const invertirArray = computed(()=>{
        return movimientos.value.reverse();
    }) */
    const desabilitarBoton = computed(()=>{
        if(saldo.value===0) return true;
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