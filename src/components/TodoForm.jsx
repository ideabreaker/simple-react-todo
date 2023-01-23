import { useState } from "react";
import styles from "../pages/index.module.css";

const TodoForm = (props) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        })

        setInput('')
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add a todo" value={input} onChange={handleChange}/>
            <button>Add todo</button>
        </form>
    )
}

export default TodoForm;