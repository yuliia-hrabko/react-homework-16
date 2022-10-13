import { createSlice } from "@reduxjs/toolkit";
import { todosApi } from "../api/todos";


const initialState = {
    todos: []
};

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        removeTodo(state, action) {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload.id
            );
        },
        toggleTodo(state, action) {
            const changeTodo = state.todos.find(
                (todo) => todo.id === action.payload.id
            );
            changeTodo.completed = !changeTodo.completed;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
			todosApi.endpoints.getAllTodos.matchFulfilled,
			(state, {payload}) => {
				state.todos = payload;
			}
		);
    }
});

export const {removeTodo, toggleTodo} = todoSlice.actions;

export default todoSlice.reducer;
