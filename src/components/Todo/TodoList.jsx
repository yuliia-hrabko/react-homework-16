import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
    const todos = useSelector((state) => state.todos.todos);
    return (
        <ul style={{ listStyle: "none" }}>
            {todos.map((todo, index) => {
                return <TodoItem 
                            key={todo.id} 
                            id = {todo.id} 
                            completed = {todo.completed} 
                            title = {todo.title} 
                            index={index}
                        />;
            })}
        </ul>
    );
};

export default TodoList;
