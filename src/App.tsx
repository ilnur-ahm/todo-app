import React, { useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoFooter from "./components/TodoFooter/TodoFooter";
import { Todo } from "./types";
import styles from "./App.module.scss";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [showTodoList, setShowTodoList] = useState(true);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case "active":
        return !todo.completed;
      case "completed":
        return todo.completed;
      default:
        return true;
    }
  });

  return (
    <div className={styles.app}>
      <h1>todos</h1>
      {/* <button onClick={() => setShowTodoList(!showTodoList)}>
        {showTodoList ? "Hide" : "Show"} List
      </button> */}
      <div className={styles.container}>
        <TodoInput
          onAddTodo={addTodo}
          setShowTodoList={setShowTodoList}
          showTodoList={showTodoList}
        />
        {showTodoList && (
          <>
            <TodoList todos={filteredTodos} onToggle={toggleTodo} />
          </>
        )}
        <TodoFooter
          activeCount={todos.filter((todo) => !todo.completed).length}
          onClearCompleted={clearCompleted}
          onShowAll={() => setFilter("all")}
          onShowActive={() => setFilter("active")}
          onShowCompleted={() => setFilter("completed")}
          filter={filter}
        />
      </div>
    </div>
  );
};

export default App;
