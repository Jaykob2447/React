import { ErrorMessage, Field, Form, Formik } from "formik";
import { connect } from "react-redux";
import TodoList from "./TodoList";
import { TASK_SCHEMA } from "../../utils";
import styles from "./TodoApp.module.sass";
import { addTasks, removeTask } from "./../store/slices/TodoSlice";

function Todo({ todo, setTask, remove }) {
  const heandelSubmit = (value, formikBag) => {
    const id = Object.keys(todo).length;
    const { task } = value;
    const tasks = { id: id, task };
    console.log(tasks);
    setTask(tasks);
    formikBag.resetForm();
  };
  console.log(remove);
  return (
    <section>
      <ul>
        {todo.map((val) => (
          <TodoList taskObj={val} key={val.id} remove={remove} />
        ))}
      </ul>
      <Formik
        initialValues={{ task: "" }}
        onSubmit={heandelSubmit}
        validationSchema={TASK_SCHEMA}
      >
        <Form className={styles.formTask}>
          <div className={styles.inputTaskDiv}>
            <Field type="text" name="task" placeholder="Type some task" />
            <ErrorMessage
              className={styles.errMessage}
              name="task"
              component="span"
            />
          </div>
          <button type="submit">Submit task</button>
        </Form>
      </Formik>
    </section>
  );
}

const mapStateToProps = (state) => ({
  todo: state.Todo.Todo,
});

const mapDispatchToProps = (dispatch) => ({
  setTask: (v) => dispatch(addTasks(v)),
  remove: (id) => dispatch(removeTask(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
