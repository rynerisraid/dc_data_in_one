<template>
    <div id="SqlGraph">
        <div id="mountNode"></div>
    </div>
</template>

<script setup>
import G6 from '@antv/g6';
import { onMounted, ref} from 'vue';
import { useCodeStore} from '@/store'

const { graphData } = useCodeStore()

// const graph = new G6.Graph({
//   container: '', // 指定图画布的容器 id
//   // 画布宽高
//   width: 800,
//   height: 500,
// });
let graph;


//挂载
onMounted(() => {
    graph = new G6.Graph({
        container: 'mountNode', // 指定图画布的容器 id
        // 画布宽高
        width: 600,
        height: 500,
    });
    graph.data(graphData)
    graph.render()
    
});


//监听
watch(
    ()=> graphData.nodes.length,
    (value,oldValue)=>{
        console.log(value,oldValue)
        if(graph!==undefined){
            graph.changeData(graphData)
            graph.refresh()
        }
    },{immediate:true})

</script>

<style lang="scss" scoped>

</style>