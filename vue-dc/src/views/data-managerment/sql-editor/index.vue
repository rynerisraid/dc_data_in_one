<template>
    <CommonPage show-footer>
        <div class="app-container">
            <n-card shadow="never" >
                <div class="editor-tools">
                  <n-space size="small">
                    <n-button type="primary" @click="handleExecution">解析</n-button>
                    <n-button @click="resetEditor">重置</n-button>
                    <n-button @click="saveResult">保存</n-button>
                  </n-space>
                </div>
                <div class="editor-wrapper">
                    <codemirror
                    v-model="code"
                    placeholder="Code goes here..."
                    :style="{ height: '720px'}"
                    :autofocus="true"
                    :indent-with-tab="true"
                    :tab-size="2"
                    :extensions="extensions"
                    @ready="handleReady"
                    />
                </div>
                <!-- <div class="editor-wrapper">
                    <codemirror
                    v-model="code"
                    placeholder="Code goes here..."
                    :style="{ height: '720px'}"
                    :autofocus="true"
                    :indent-with-tab="true"
                    :tab-size="2"
                    :extensions="extensions"
                    @ready="handleReady"
                    @change="log('change', $event)"
                    @focus="log('focus', $event)"
                    @blur="log('blur', $event)"
                    />
                </div> -->
            </n-card>
            <n-card style="margin-left:20px">
              <DataFlow>
              </DataFlow>
            </n-card>
          
        </div>
    </CommonPage>
</template>

<script setup>

import { defineComponent,ref,shallowRef } from 'vue'
import { Codemirror } from 'vue-codemirror'
//import { javascript } from '@codemirror/lang-javascript'
import { sql } from '@codemirror/lang-sql'
//import { useCodeStore } from '@/store/editor/code'
import { useCodeStore } from '@/store'
import api from './api'
import DataFlow from '@/components/lineage/DataFlow.vue'


const codeStore = useCodeStore()
const code = ref(`select * from users;`)
const extensions = [ sql() ] //javascript() 


// Codemirror EditorView instance ref
const view = shallowRef()
const handleReady = (payload) => {
  view.value = payload.view
}

// Status is available at all times via Codemirror EditorView
const getCodemirrorStates = () => {
  const state = view.value.state
  const ranges = state.selection.ranges
  const selected = ranges.reduce((r, range) => r + range.to - range.from, 0)
  const cursor = ranges[0].anchor
  const length = state.doc.length
  const lines = state.doc.lines
  
}

// const log = console.log;

const resetEditor = () => {
  code.value = codeStore.resetCode();
  //"select * from users;"
  console.log('resetEditor')
  
}

const handleExecution = ()=>{
  api.getLineageBySql(code.value)
  codeStore.handleParseResult()
}


const saveResult =() =>{
  console.log('save result')
}
/*
const handleExecution = async () =>{
  console.log('handleExecution',code.value)

  try{
    const result = await api.getSQLAnalysisRes({sql:code.value})
    $message.success('解析成功')
  }catch(error){
    console.error(error)
  }

}
*/


</script>

<style lang="scss" scoped>

.app-container{
  display: flex;
}
.editor-tools {
  margin-bottom: 20px;
  :deep(.el-card__body) {
    padding-bottom: 2px;
  }
}

.editor-wrapper {
  margin-bottom: 2px;
  height: 100%;
}

</style>