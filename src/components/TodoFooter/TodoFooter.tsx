import React from "react";
import styles from "./TodoFooter.module.scss";
import { getTaskWord } from "../../atoms/getTaskWord";
import FilterButton from "./FilterButton/FilterButton";

interface TodoFooterProps {
  activeCount: number;
  onClearCompleted: () => void;
  onShowAll: () => void;
  onShowActive: () => void;
  onShowCompleted: () => void;
  filter: "all" | "active" | "completed";
}

const TodoFooter: React.FC<TodoFooterProps> = ({
  activeCount,
  onClearCompleted,
  onShowAll,
  onShowActive,
  onShowCompleted,
  filter,
}) => {
  const taskWord = getTaskWord(activeCount);

  return (
    <footer className={styles.todoFooter}>
      <div className={styles.count}>
        {activeCount} {taskWord}
      </div>
      <div className={styles.filterButtons}>
        <FilterButton filter="all" currentFilter={filter} onClick={onShowAll}>
          Все
        </FilterButton>
        <FilterButton
          filter="active"
          currentFilter={filter}
          onClick={onShowActive}
        >
          Активные
        </FilterButton>
        <FilterButton
          filter="completed"
          currentFilter={filter}
          onClick={onShowCompleted}
        >
          Завершенные
        </FilterButton>
      </div>
      <div>
        <button onClick={onClearCompleted}>Удалить завершенные</button>
      </div>
    </footer>
  );
};

export default TodoFooter;
