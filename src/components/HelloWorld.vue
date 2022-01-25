<template>
  <h1>{{ msg }}</h1>
   <Comp></Comp>
   <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <button @click="emit('myclick')">emit</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>
<script setup lang="ts">
// 1.直接导入组件
import Comp from "@/components/Comp.vue"
import { reactive,useSSRContext} from 'vue'
//2.属性定义
const props = defineProps<{ msg: string }>()
//  3.获取上下文
const ctx = useSSRContext();

// 4.定义事件
const emit = defineEmits(['myclick'])
const onclick = () =>{
  emit('myclick')
}
// 请求
fetch('/api/getUsers').then(res => res.json()).then(data => {
  console.log("GET",data)
})

</script>


<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
