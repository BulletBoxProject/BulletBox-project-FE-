import React, { useState } from "react";
import styled from "styled-components";
import CategoryModal from "./CategoryModal";

const CategoryBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <button
        onClick={() => {
          onClickButton();
        }}
      >
        추가하기
      </button>
      {isOpen && (
        <CategoryModal
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default CategoryBtn;
