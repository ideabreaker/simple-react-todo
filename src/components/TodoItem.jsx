import styles from '../pages/index.module.css'

const TodoItem = (props) => {
    return (
        <div id={props.element.id} className={props.element.completed ? `completed` : styles.card}>
            <span className={styles.cardTitle}>Todo #{props.element.id}</span>
            <p className={styles.cardText}>{props.element.text}</p>
            <button className='addButton' onClick={() => props.completeTodo(props.element.id)}>OK</button>
        </div>
    )
}

export default TodoItem;