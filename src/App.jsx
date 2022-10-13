import React from "react";

import {useGetAllTodosQuery} from './store/api/todos'
import TodoList from "./components/Todo/TodoList";


const App = () => {
    useGetAllTodosQuery()
    
    return (
        <div style={{ textAlign: "center", width: "600px", margin: "0 auto" }}>
            <TodoList />
        </div>
    );
};

export default App;
