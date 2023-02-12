import { ref } from "vue"
import { defineStore } from "pinia"


export const useCodeStore = defineStore("code",()=>{
    const code = ref("select * from users; (pinia version) ")
    
    const resetCode = ()=>{
      return code.value
    }
  
    const handleParse = (value)=>{
      console.log('useCodeStore',value)
    }
  
    return {
      resetCode,handleParse
    }
  
  })
  
  
/** 在 setup 外使用 */
export function useCodeStoreHook() {
  return useCodeStore(store)
}