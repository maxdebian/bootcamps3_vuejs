import {computed, ref} from 'vue';
export default function(){
    const counterBis = ref(0);
    const incrementar = ()=>{
        counterBis.value++;
    }
    const decrementar = ()=>{
        counterBis.value--;
    }
    const resultComputed = computed(()=>{
        console.log('computed');
        const restul = counterBis.value * 2
        return `Result: ${restul}`;
    }) 
    return {counterBis,incrementar,decrementar,resultComputed}
}