<template>
    <div>
        <h1>Lista de Tareas</h1>
        <br>
        <label for="tarea">Tarea</label>
        <input v-model="unaTarea" id="tarea" @keypress.enter="addTarea">
        <ul>
            <li v-for="(laTarea,index) in todasLasTareas" :key="index">
              {{ index }} - {{ laTarea }}  <button @click="deleteTarea(index)">Remove</button>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
    import useTareas from '@/composables/useTareas';
    const {unaTarea,todasLasTareas,addTarea,deleteTarea} = useTareas();
</script>
<style scoped></style>