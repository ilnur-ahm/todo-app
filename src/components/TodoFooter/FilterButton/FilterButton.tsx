import React from "react";

interface FilterButtonProps {
  filter: string;
  currentFilter: string;
  onClick: () => void;
  children: React.ReactNode;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  filter,
  currentFilter,
  onClick,
  children,
}) => {
  const getButtonStyle = () => {
    return {
      borderColor: currentFilter === filter ? "#e9d9d8" : "",
    };
  };

  return (
    <button onClick={onClick} style={getButtonStyle()}>
      {children}
    </button>
  );
};

export default FilterButton;
