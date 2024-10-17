import React, { useState } from "react";
import styles from "./TodoInput.module.scss";

interface TodoInputProps {
  onAddTodo: (text: string) => void;
  setShowTodoList: React.Dispatch<React.SetStateAction<boolean>>;
  showTodoList: boolean;
}

const TodoInput: React.FC<TodoInputProps> = ({
  onAddTodo,
  showTodoList,
  setShowTodoList,
}) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      onAddTodo(newTodo.trim());
      setNewTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.input}>
        <input
          type="checkbox"
          className={styles.arrow}
          checked={showTodoList}
          onChange={() => setShowTodoList(!showTodoList)}
          style={{ transform: showTodoList ? "" : "rotate(180deg)" }}
        />
        <input
          type="text"
          placeholder="Что нужно сделать?"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className={styles.todoInput}
        />
      </div>
    </form>
  );
};

export default TodoInput;
