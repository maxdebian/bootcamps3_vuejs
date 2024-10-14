<template>
    <div>
        Tu nombre es: {{ nombre }} y mi edad es: {{ edad }}
    </div>
</template>
<script setup lang="ts">
    /* const nombre = "maxi"; */
    import { defineProps } from 'vue';
    defineProps({
        nombre:{
            type:String,
            required:true
        },
        edad:{
            type:Number,

        }
    })
</script>

<style scoped>

</style>