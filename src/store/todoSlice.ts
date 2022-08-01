import { createSlice } from '@reduxjs/toolkit'
const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: 1
    },
    reducers: {
        addTodo (state, action) {
            console.log(action)
            state.todos++
        },
        removeTodo (state, action) {},
        toggleTodo (state, action) {}
    }
})

export  const { addTodo, removeTodo, toggleTodo } = todoSlice.actions
export default todoSlice.reducer