import { ref } from "vue"
import { defineStore } from "pinia"


export const useCodeStore = defineStore("code",{
  //const code = ref("select * from users; (pinia version) ")
  state(){
    const count = ref(3)
    const graphData = ref({
      // 点集
      nodes: [
        {
          id: 'node1', // String，该节点存在则必须，节点的唯一标识
          x: 100, // Number，可选，节点位置的 x 值
          y: 200, // Number，可选，节点位置的 y 值
        },
        {
          id: 'node2', // String，该节点存在则必须，节点的唯一标识
          x: 300, // Number，可选，节点位置的 x 值
          y: 200, // Number，可选，节点位置的 y 值
        },
      ],
      // 边集
      edges: [
        {
          source: 'node1', // String，必须，起始点 id
          target: 'node2', // String，必须，目标点 id
        },
      ],
    })
    return {
      graphData,count
    }
  },
  getters:{

  },
  actions: {
    resetCode(){
      return 'resetCode'
    },
  
    handleParseResult(value){

      this.graphData.nodes.push({id:`node${this.count}`,x:300+(this.count)*100,y:(this.count)*100})
      this.graphData.edges.push({
        source: 'node1', // String，必须，起始点 id
        target: `node${this.count}`, // String，必须，目标点 id
      })
      console.log('handleParseResult',this.graphData)
      this.count++
    }
  
  }
    
  
  })
  
  
/** 在 setup 外使用 */
export function useCodeStoreHook() {
  return useCodeStore(store)
}