import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { baseURLApiV1 } from "../../../core/api";

import NavigationMenu from "../../../layout/footer/components/NavigationMenu";

import SelectCategory from "../../common/SelectCategory";
import ToggleSwitch from "../../common/ToggleSwitch";

import { ReactComponent as moreIcon } from "../../../img/navi/more.svg";
import { BsFillPlusCircleFill } from "react-icons/bs";

import { ReactComponent as todoBullet } from "../../../img/bullet/todo-1.svg";
import { ReactComponent as checkBullet } from "../../../img/bullet/check-2.svg";
import { ReactComponent as postphoneBullet } from "../../../img/bullet/postpone-3.svg";
import { ReactComponent as experienceBullet } from "../../../img/bullet/ex-4.svg";
import { ReactComponent as memoBullet } from "../../../img/bullet/meno-5.svg";
import { ReactComponent as importantBullet } from "../../../img/bullet/asterisk-6.svg";
import { ReactComponent as favoriteBullet } from "../../../img/bullet/star-7.svg";

const DailyLogContainer = () => {
  const [showSelectBox, setShowSelectBox] = useState(false);
  const navigate = useNavigate();
  const day = ["일", "월", "화", "수", "목", "금", "토"];
  const today = `${new Date().getFullYear()} / ${
    new Date().getMonth() + 1
  } / ${new Date().getDate()} ${day[new Date().getDay()]}`;
  const showAddTodoSelect = () => {
    console.log("clicked");
    setShowSelectBox(!showSelectBox);
  };
  const loadDailyLog = async () => {
    try {
      const data = await baseURLApiV1.get("/dailys");
      if (data.data.httpStatusCode === 200) {
        return console.log(data.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadDailyLog();
  }, []);
  return (
    <Container>
      <DateAndSelectDiv>
        <DateButton>{today}</DateButton>
        <SelectDiv>
          <span>카테고리</span>
          <SelectCategory style={{ padding: "10px" }} />
        </SelectDiv>
      </DateAndSelectDiv>
      <TodoBulletDiv>
        <BulletTodoCard>
          <MainBulletTodo>
            <TodoBodyDiv>
              <span>
                <CheckBullet />
              </span>
              <span>추가한 할 일 목록입니다.</span>
            </TodoBodyDiv>
            <OptionButton onClick={() => console.log("option click!")}>
              <MoreIcon />
            </OptionButton>
          </MainBulletTodo>
        </BulletTodoCard>
        <AddTodoDiv>
          <AddTodoButton type="button" onClick={showAddTodoSelect}>
            <AddTodoIcon />
          </AddTodoButton>
          {showSelectBox ? (
            <AddSelectDiv>
              <option value="newTodo" onClick={() => navigate("/dailys/add")}>
                신규 생성
              </option>
              <option
                value="favoriteTodo"
                onClick={() => alert("자주쓰는할일")}
              >
                자주쓰는 할일
              </option>
            </AddSelectDiv>
          ) : null}
        </AddTodoDiv>
      </TodoBulletDiv>
    </Container>
  );
};

export default DailyLogContainer;

const Container = styled.div`
  font-family: cursive;
`;
const DateAndSelectDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;
const SelectDiv = styled.div`
  display: flex;
  align-items: center;

  padding: 5px 0;
`;
const DateButton = styled.button`
  width: 35%;
  padding: 3px 0;
  color: var(--color-dark-gray);
  font-size: 14px;
  font-weight: bold;
  background-color: white;
  border: 0;
`;
const TodoBulletDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 71vh;
  gap: 10px;
`;
const BulletTodoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-color: rgba(240, 161, 59, 0.2);
  border: 1px solid rgba(240, 161, 59, 0.2);
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.1);
  padding: 5px;
  border-radius: 4px;
`;
const TodoBodyDiv = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  font-size: 12px;
  font-weight: 800;
`;
const OptionButton = styled.button`
  background-color: transparent;
  border: 0;
`;
const MoreIcon = styled(moreIcon)`
  width: 24px;
  height: 24px;
`;
const AddTodoDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-top: 63vh;
`;
const AddTodoButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background-color: transparent;
`;
const AddTodoIcon = styled(BsFillPlusCircleFill)`
  fill: var(--color-main);
  width: 40px;
  height: 40px;
`;
const AddSelectDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 5px;
  position: absolute;
  left: 50vw;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;
const MainBulletTodo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  & > input {
    width: 90%;
    padding: 0;
    margin: 0;
  }
`;
const BulletMemo = styled.div`
  display: flex;
  justify-content: flex-end;
  & > input {
    width: 80%;
    margin-right: 9%;
  }
`;

const TodoBullet = styled(todoBullet)`
  width: 24px;
  height: 18px;
`;
const CheckBullet = styled(checkBullet)`
  width: 24px;
  height: 18px;
`;
const PostphoneBullet = styled(postphoneBullet)`
  width: 24px;
  height: 18px;
`;
const ExperienceBullet = styled(experienceBullet)`
  width: 24px;
  height: 18px;
`;
const MemoBullet = styled(memoBullet)`
  width: 24px;
  height: 18px;
`;
const ImportantBullet = styled(importantBullet)`
  width: 24px;
  height: 18px;
`;
const FavoriteBullet = styled(favoriteBullet)`
  width: 24px;
  height: 18px;
`;
