import { useState } from "react";
import styles from "../pages/index.module.css";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";


const Todo = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) return;

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo;
        })

        setTodos(updatedTodos);
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Todo</h1>
            <TodoForm onSubmit={addTodo} />
            <div className={styles.cardRow}>
                {todos.map((todo) => (
                    <TodoItem element={todo} completeTodo={completeTodo} />
                ))}
            </div>
        </div>
    );
};

export default Todo;
