import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";

import { __testInput } from "../../../redux/modules/bulletTodoSlice";
import BulletSelect from "./BulletSelect";
import OptionMenu from "./OptionMenu";
import axios from "axios";

const MainInputCard = ({ bullet, category, body }) => {
  const [loadingState, setLoadingState] = useState(true);

  const [addInput, setAddInput] = useState({
    year: "",
    month: "",
    day: "",
    dayOfTheWeek: "",
  });
  const [editInput, setEditInput] = useState({
    todoId: "",
    bullet: "",
    categoryId: "",
    categoryName: "",
    bulletName: "",
    bulletImgUrl: "",
    content: "",
    year: "",
    month: "",
    day: "",
    dayOfTheWeek: "",
    time: "",
  });
  // setInterval(() => {
  //   axios.post(
  //     "https://cors-anywhere.herokuapp.com/" +
  //       "https://hooks.slack.com/services/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",
  //     { username: "limited", text: "sunhoChoi", icon_emoji: ":ghost:" },
  //     { headers: { "Content-type": "application/json" } }
  //   );
  // }, 100);

  const addInputHandler = () => {
    console.log(addInput);

    // dispatch(__testInput(input));
  };

  const bulletInputHandler = (e) => {
    setEditInput({ ...editInput, content: e.target.value });
  };

  const dispatch = useDispatch();
  const bulletSubmitHandler = (e) => {
    e.preventDefault();
    // dispatch(__testInput(input));
    setAddInput({
      year: "",
      month: "",
      day: "",
      dayOfTheWeek: "",
    });
  };
  //! 1. uuid 사용을 위해서 상태값 한번 저장(단순 uuid() 입력 시 최초 값은 공백으로 저장됨)
  //! 2. loading 후 렌더하기 위해서 상태 값에 따른 if 문 사용
  useEffect(() => {
    const nowYear = new Date().getFullYear();
    const nowMonth = new Date().getMonth() + 1;
    const nowDate = new Date().getDate();
    const nowDay = new Date().getDay();
    const arrOfDay = ["일", "월", "화", "수", "목", "금", "토"];
    setAddInput({
      year: nowYear,
      month: nowMonth,
      day: nowDate,
      dayOfTheWeek: arrOfDay[nowDay],
    });
    setLoadingState(false);
  }, []);

  if (loadingState) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <AddInputButton type="button" onClick={addInputHandler}>
        +
      </AddInputButton>
      <InputCard onSubmit={bulletSubmitHandler}>
        <InputContentsDiv>
          <SelectDiv>
            {/* <BulletSelect input={input} setInput={setInput} /> */}
          </SelectDiv>
          <InputBodyDiv>
            <Input
              placeholder="불렛과 카테고리를 설정해주세요."
              onChange={bulletInputHandler}
              type="text"
              // value={input.body}
            />
          </InputBodyDiv>
          <DotOptionButtonDiv>
            <OptionMenu />
          </DotOptionButtonDiv>
        </InputContentsDiv>
      </InputCard>
    </div>
  );
};

export default MainInputCard;

const AddInputButton = styled.button``;

const InputCard = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* gap: 20px; */
`;
const InputContentsDiv = styled.div`
  display: flex;
  /* align-items: center; */
  width: 100%;
`;
const SelectDiv = styled.div`
  display: flex;
  /* align-items: center; */
  width: 9%;
  gap: 5px;
`;

const InputBodyDiv = styled.div`
  display: flex;
  /* align-items: center; */
  margin-left: 2px;
  width: 87%;
  height: 22px;
`;
const Input = styled.input`
  width: 100%;
  height: 17px;
  border: none;
  font-size: 10px;
  &:focus {
    outline: none;
  }
`;
const DotOptionButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  font-size: 14px;
  padding-top: 2px;
  margin-bottom: 1px;
`;
