import styles from "./TodoList.module.sass";

function TodoList({ taskObj: { task, id }, remove }) {
  return (
    <li className={styles.taskLi}>
      <p className={styles.task}>{task}</p>
      <div className={styles.delete} onClick={() => remove(id)}>
        Delete
      </div>
    </li>
  );
}

export default TodoList;
