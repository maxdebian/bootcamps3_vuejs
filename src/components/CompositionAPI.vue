<template>
    <div>
        <h1>Componente reactivo</h1>
        <h3>Ahorro $ {{ ahorro }}</h3>
        <button @click="depositar()">Depositar</button>
    </div>
</template>
<!--
<script>
    import {ref,defineComponent} from 'vue';
    export default defineComponent({
        components:{},
        setup(){
            const ahorro = ref(0)
            return {ahorro}
        },
        methods:{
            depositar(){
                this.ahorro += 100
            }
        }
    });
</script>
-->
<script setup>
    import {ref} from 'vue';
    const ahorro = ref(0);
    const depositar = ()=>{
        ahorro.value +=100
    }
</script>

<style scoped>

</style>