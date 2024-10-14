<template>
    <div>
        <input type="text" v-model="nombre" placeholder="Agrega tu nombre">
        <p>Tu nombre es {{ nombre }}</p>
        <textarea :value="text"></textarea>
        <h3>checkbox {{ myCheckboxName }}</h3>
        <input type="checkbox" v-model="myCheckboxName" value="Juan" id="">
        <label for="">Juan</label>
        <input type="checkbox" v-model="myCheckboxName" value="Maxi" id="">
        <label for="">Maxi</label>
        <h3>radio button</h3>
        <input type="radio" v-model="myRadio" value="Juan" id="">
        <label for="">Juan</label>
        <input type="radio" v-model="myRadio" value="Maxi" id="">
        <label for="">Maxi</label>
        <div>Selected: {{ seleccionado }}</div>
        <select v-model="seleccionado" id="" multiple>
            <option value="">Seleccione una opcion</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
        </select>
        <div>
            Seleccione el curso
        </div>
        <select v-model="selectCourse" id="">
            <option v-for="option in options" :value="option.id" :key="option.id">
                {{ option.description }}
            </option>
        </select>
    </div>    
</template>

<script setup lang="ts">
    import {ref} from 'vue';
    const nombre = ref<string>('');
    const text = ref<string>('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus cumque accusamus, necessitatibus distinctio, saepe ex, nam voluptatem hic dolor asperiores fuga aliquid magni inventore. Et nemo cumque itaque ipsa perferendis!') 
    const myCheckboxName = ref([]);
    const myRadio = ref('Juan');
    const seleccionado = ref([]);
    const selectCourse = ref();
    const options = ref([
        {
            id:1,
            description:'VueJs'
        },
        {
            id:2,
            description:'JavaScript'
        },
        {
            id:5,
            description:'TypeScript'
        },
    ]);
</script>

<style scoped>

</style>