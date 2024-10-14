<template>
    <div>
        <h1>Fetch</h1>
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
import { onBeforeMount, onMounted, ref } from 'vue';
    const posts = ref([]);
    
    onMounted(()=>{
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const nombre={name:'Maxi'};
        const paramsPost = {
            method:'POST',
            body: JSON.stringify(nombre),
            headers:{
                'Content-Type':'apllication/json'
            }
        } 
        fetch(url,paramsPost).then(res=>res.json())

    }) 


    /* onMounted(async ()=>{
        const resultsPosts = await fetch('https://jsonplaceholder.typicode.com/posts')
        console.log(resultsPosts);
        if(resultsPosts.ok){
            const postData = await resultsPosts.json();
            posts.value = postData;
            console.log(postData)
        }else{
            alert(`Error ${resultsPosts.status}`)
        }
    })   */

    /*  onMounted(()=>{
        getPosts()
    }) 
   const getPosts = ()=>{
        fetch('https://jsonplaceholder.typicode.com/postse')
        //.then(res => console.log(res))
        .then(res => res.json())
        //.then(json => console.log(json))
        .then(json => posts.value = json)
        //.catch(err=>console.log(err)) 
    }  */
</script>