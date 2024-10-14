<template>
    <div>
        <h1>Hola Quien sos</h1>
        <p>--> {{ quienSos }}</p>
        <p>{{ quienSos.toUpperCase() }}</p>
        <span>{{ button }}</span>
        <br>
        <span v-html="button"></span>
        <span><button>Enviar Button</button></span>
        <p v-bind:style="color">Mi color preferido</p>
        <p :style="color">Este es otro tag p</p>
        {{ 2*2 }}

        <!-- <p :style="ahorro < 0 ? 'color:red' : 'color:green' ">Ahorros {{ ahorro }}</p> -->
        <!-- <p class="deboDinero">Mi Texto</p> -->
        <p :class="ahorro < 0 ? 'deboDinero' : 'soyRico' ">Ahorros {{ ahorro }}</p>
        <a :href="google">Google</a>
    </div>
</template>

<script setup>

    const quienSos = "Soy Maxi";
    const button = "<button>Enviar</button>";
    const color = "color: green;font-size:40px";
    const ahorro = -100;
    const google = 'https://google.com.ar';
</script>

<style scoped>

.deboDinero{
  color: red;
  font-size: 20px;
}
.soyRico{
  color:green;
  font-size: 20px;
}
</style>