import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../../store/slices/todos";

const TodoItem = ({ id, completed, title, index }) => {
    const dispatch = useDispatch();

    const isChecked = {
        textDecoration: "line-through",
    };

    const toggleChecked = () => {
        if (completed) {
            return isChecked;
        }
    };

    return (
        <li key={id} style={{display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "start"}}>
            <div>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => dispatch(toggleTodo({ id }))}
                    style={{ marginRight: "10px" }}
                />
                <span style={toggleChecked()}>{index + 1} - </span>
                <span style={toggleChecked()}>{title}</span>
            </div>
            <button
                onClick={() => dispatch(removeTodo({ id }))}
                disabled={!toggleChecked()}
                style={{ border: "none", background: "none", fontSize: "20px" }}>
                &#128465; 
            </button>
        </li>
    );
};
export default TodoItem;
