import { defineStore } from "pinia";
import {v4 as uuid4} from "uuid";
import axios from 'axios';
import {ref} from 'vue';


export const useTodoStore = defineStore("todo",{
    state: () =>({
        todos: [],
    }),
    actions:{
        addTodo(text) {
            this.todos.push({id:uuid4(), text , completed:false})
        },
        toggleTodo(index){
            const todo = this.todos.find((todo)=> todo.id == index)
            todo && (todo.completed = !todo.completed)
        }  ,
        removeTodo(index){
            const todo = this.todos.findIndex((todo) => todo.id == index)
            todo !== 1 && this.todos.splice(todo,1)
        }
    }
    
    // const todos = ref([])
    // const addTodo = (text) =>{
    //     todos.value.push({id: uuid4(),text , completed: false })
    // };

    // const fetchTodos = async () =>{
    //     try {
    //         const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    //         todos.value = response.data
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    
    // const toggleTodo = (index) =>{
    //     const todo = todos.value.find((todo) => todo.id == index)
    //     if(todo){
    //         todo.completed = !todo.completed
    //     }
    // };
    // const removeTodo = (index)=>{
    //     todos.value.splice(index,1)
    // }
    // return {todos,fetchTodos,addTodo,toggleTodo,removeTodo}


})

