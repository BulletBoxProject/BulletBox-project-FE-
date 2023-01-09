import React, { useState, useRef } from "react";
import styled from "styled-components";
import uuid from "react-uuid";

import { BsDot } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { GiCircle } from "react-icons/gi";
import { TbNorthStar } from "react-icons/tb";
import { MdEditNote } from "react-icons/md";
import { GiBulletBill } from "react-icons/gi";

import arrayOfBullet from "./bulletSelect-arrayOfBullet";

const BulletSelect = ({ input, setInput }) => {
  const [selectState, setSelectState] = useState("none");
  const [bulletSelected, setBulletSelected] = useState("");
  console.log(input);
  const bulletListHandler = () => {
    selectState === "" ? setSelectState("none") : setSelectState("");
  };
  const bulletSelectValue = (e) => {
    setBulletSelected(e.target.value);
    setSelectState("none");
    // bulletSelected
    // dispatch(__testInput(input));
    setInput({ ...input, bullet: e.target.value });
  };
  const bulletSelectHandler = () => {
    switch (bulletSelected) {
      case "todo":
        return <BsDot style={{ fontSize: "14px" }} />;
      case "done":
        return <AiOutlineCheck style={{ fontSize: "14px" }} />;
      case "moveDate":
        return <AiOutlineRight style={{ fontSize: "14px" }} />;
      case "experinece":
        return <GiCircle style={{ fontSize: "14px" }} />;
      case "important":
        return <TbNorthStar style={{ fontSize: "14px" }} />;
      case "memo":
        return <MdEditNote style={{ fontSize: "14px" }} />;
    }
  };

  return (
    <Container>
      <SelectButton onClick={bulletListHandler} type="button">
        {bulletSelected === "" ? (
          <GiBulletBill style={{ fontSize: "14px", fill: "#757575" }} />
        ) : (
          bulletSelectHandler()
        )}
      </SelectButton>
      <BulletList display={selectState}>
        {arrayOfBullet().map((bullet) => (
          <li key={uuid()}>
            <button
              value={bullet.value}
              type="button"
              onClick={bulletSelectValue}
            >
              {bullet.bulletIcon}
            </button>
          </li>
        ))}
      </BulletList>
    </Container>
  );
};

export default BulletSelect;

const Container = styled.div``;
const SelectButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 12px;
  /* border: 1px solid #eeeeee; */
  border: 0;
  border-radius: 7px;
  background-color: white;
`;
const BulletList = styled.ul`
  display: ${({ display }) => display};
  list-style: none;
  margin: 0;
  padding: 0;

  & > li {
    display: flex;
    justify-content: center;
    width: 50%;
    font-size: 12px;
    padding: 4px 0;
    border-bottom: 1px solid #eeeeee;
    margin: 0 auto;
  }
  & > li > button {
    display: flex;
    align-items: center;
    background-color: white;
    border: 0;
  }
  & > li > button > svg {
    pointer-events: none;
  }
`;
