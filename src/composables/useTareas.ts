import {reactive,toRefs} from 'vue';
export default function(){
    const data = reactive({
        unaTarea:null,
        todasLasTareas:[]
    });
    const addTarea = ()=>{
        if(data.unaTarea.length>1){
            data.todasLasTareas.push(data.unaTarea)
        }
        data.unaTarea = null;
    }
    const deleteTarea = (index)=>{
        data.todasLasTareas.splice(index,1)
    }

    return { ...toRefs(data),addTarea,deleteTarea};
}