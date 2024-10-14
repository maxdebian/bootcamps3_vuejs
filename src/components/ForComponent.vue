<template>
    <div>
        <!-- <div>
            <p v-for="(elemento,index) in nombres" :key="index">{{ index+1 }} - {{ elemento }}</p>
        </div> -->
        <!-- <p v-for="(numeros,index) in 100" :key="index">{{ index }} -- {{ numeros }}</p> -->
        <!-- <p v-for="(letra,i) in 'Maximiliano'" :key="i">{{ letra }}</p> -->
        <!-- <ul>
            <li v-for="(item,property,index) in persona" :key="index">{{ property }} : {{ item }}</li>
        </ul> -->

        <h3>Question</h3>
        <div v-for="(question,index) in questions" :key="index">
            <h4>{{ index+1 }}. {{ question.pregunta }}</h4>
            <div v-for="(option,indexOption) in question.opciones" :key="indexOption">
                {{  question.respuestaCorrecta === indexOption ? 'Yes' : 'No' }}
                {{ option }}
            </div>
        </div>

    </div>    
</template>

<script setup>
    const nombres = ['Juan','Maria','Maxi'];
    const persona = {
        nombre:"maxi",
        apellido:"tedesco",
        edad:40
    }
    const questions = [
        {
            pregunta:"Que lenguaje usa Vue",
            opciones:["PHP",".NET","JavaScript"],
            respuestaCorrecta:2
        },
        {
        pregunta:"Que necesita para funcionar Vue",
            opciones:["Node","python","Angular"],
            respuestaCorrecta:0
        },
    ];
</script>

<style scoped>

</style>