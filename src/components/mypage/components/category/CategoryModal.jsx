import React from "react";
import styled from "styled-components";
import Modal from "../../../common/modal/Modal";

const CategoryModal = ({ onClose }) => {
  const tagColorList = [
    { key: 0, value: "#FF8B8B" },
    { key: 1, value: "#FFCA8B" },
    { key: 2, value: "#FFEC8B" },
    { key: 3, value: "#D3FF8B" },
    { key: 4, value: "#9BFF8B" },
    { key: 5, value: "#8BFFCE" },
    { key: 6, value: "#8BFFFF" },
    { key: 7, value: "#8BB2FF" },
    { key: 8, value: "#8B90FF" },
    { key: 9, value: "#D38BFF" },
    { key: 10, value: "#FD8BFF" },
    { key: 12, value: "#FF8BB5" },
    { key: 13, value: "#ef2c05" },
    { key: 14, value: "#eb8715" },
    { key: 15, value: "#e2d634" },
    { key: 16, value: "#3ce919" },
    { key: 17, value: "#1628ef" },
    { key: 18, value: "#2d03e7" },
    { key: 19, value: "#821ff3" },
    { key: 20, value: "#0b0b0b" },
    { key: 21, value: "#aea8a4" },
    { key: 22, value: "#57484d" },
    { key: 23, value: "#4d4c0a" },
    { key: 24, value: "#e45d8e" },
    { key: 25, value: "#35dc40" },
    { key: 26, value: "#f77535" },
    { key: 27, value: "#bfa3ef" },
    { key: 28, value: "#7888f2" },
    { key: 29, value: "#e048c7" },
    { key: 30, value: "#2c0707" },
  ];
  return (
    <div>
      <Modal onClose={onClose}>
        <CategoryInput placeholder="카테고리 이름을 입력해주세요"></CategoryInput>
        <div>
          <div>
            <p>색상</p>
            <SelectColorDiv>
              {tagColorList.map((val) => {
                return (
                  <div key={val.key}>
                    <SelectBtn
                      backGroundColor={val.value}
                      value={val.value}
                    ></SelectBtn>
                  </div>
                );
              })}
            </SelectColorDiv>
            <div>
              <button name="확인" />
              <button>추가하기</button>
              <button onClick={onClose}>Close</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CategoryModal;

const SelectColorDiv = styled.div`
  width: 15rem;
  height: 12rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  flex-wrap: wrap;
`;

const SelectBtn = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 8px;
  border: none;
  background-color: ${({ backGroundColor }) => backGroundColor};
`;

const CategoryInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 90%;
  height: 3vh;
`;
