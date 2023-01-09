import React from "react";

import { BsDot } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { GiCircle } from "react-icons/gi";
import { TbNorthStar } from "react-icons/tb";
import { MdEditNote } from "react-icons/md";

const arrayOfCategory = () => {
  return [
    { value: "시간 알림" },
    { value: "카테고리" },
    { value: "불렛메모" },
    { value: "날짜 변경" },
    { value: "삭제" },
  ];
};

export default arrayOfCategory;
