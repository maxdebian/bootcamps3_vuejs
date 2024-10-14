<template>
    <div>
        <h1>Axios</h1>
        <button @click="getPosts">Traer Datos</button>
        <button @click="postData">Enviar Datos</button>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>body</th>
                    <th>userId</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts" :key="post.id">
                    <td>{{ post.id }}</td>
                    <td>{{ post.title }}</td>
                    <td>{{ post.body }}</td>
                    <td>{{ post.userId }}</td>
                </tr>
            </tbody>

        </table>
    </div>
</template>
<script setup lang="ts">
    import axios from 'axios';
    import { onMounted,ref } from 'vue';
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const posts = ref([])

/*     onMounted(async()=>{
        const result = await axios.get(url).then(res=>res.data)
        console.log(result)
         const resultData = result.data
        console.log(resultData) 
    }) */

    const postData = ()=>{
        const postBody ={
            title:'Hi',
            body:'How are you?'
        }
        axios.post(url,postBody).then(res=>console.log(res))
    }
    const getPosts = ()=>{
        axios.get(url).then(res => posts.value = res.data).catch(err => console.log(err)).finally(console.log('finalizado'))
    }
    onMounted(()=>{
        getPosts()
    }) 
</script>

