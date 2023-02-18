import { ref } from "vue"
import { defineStore } from "pinia"


export const useCodeStore = defineStore("code",{
  //const code = ref("select * from users; (pinia version) ")
  state(){
    return {
      code:{
        value:"select * from users; (pinia version) "
      }
    }
  },
  getters:{

  },
  actions: {
    resetCode(){
      return this.code.value
    },
  
    handleParseResult(value){
      console.log('handleParseResult',value)
    }
  
  }
    




  
  })
  
  
/** 在 setup 外使用 */
export function useCodeStoreHook() {
  return useCodeStore(store)
}