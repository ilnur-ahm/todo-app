import React from "react";
import { Todo } from "../../types";
import styles from "./TodoItem.module.scss";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle }) => {
  return (
    <li className={styles.todoItem}>
      <input
        type="checkbox"
        className={styles.toggle}
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <label>
        <span
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            color: todo.completed ? "#d9d9d9" : "",
          }}
        >
          {todo.text}
        </span>
      </label>
    </li>
  );
};

export default TodoItem;
