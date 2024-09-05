<template>
  <div>
    <h1>Todo list</h1>
    <input type="text" v-model="text" @keyup.enter="addTodo" placeholder="Add a new todo">
    <ul>
        <li v-for="todo in todos " :key="todo.id">
            <span :style="{textDecoration: todo.completed ? 'line-through' :'none'}">{{ todo.text }}</span>
            <button @click="removeTodo(todo.id)">Remove</button>
            <button @click="toggleTodo(todo.id)">Toggle</button>
        </li>
    </ul> 
  </div>
</template>


<script setup>
import {ref,onMounted,watch} from 'vue'
import {useTodoStore} from '../stores/TodoStore'

const TodoStore = useTodoStore()

const text = ref('')


const addTodo = () =>{
    if(text.value.trim()){
        TodoStore.addTodo(text.value)
        text.value = ''
    }
} 

const toggleTodo  = (id) => {
   TodoStore.toggleTodo(id)
}

const removeTodo  = (id) =>{
    TodoStore.removeTodo(id)
 }
const todos = ref([])
 
// onMounted(() => {
//     TodoStore.fetchTodos()
// })
// watch(() => TodoStore.todos, (newTodos) =>{
//     todos.value = newTodos
// })
todos.value = TodoStore.todos
</script>

<style scoped>

</style>
