import React from "react";

import { BsDot } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { GiCircle } from "react-icons/gi";
import { TbNorthStar } from "react-icons/tb";
import { MdEditNote } from "react-icons/md";

const arrayOfBullet = () => {
  return [
    { value: "todo", bulletIcon: <BsDot /> },
    { value: "done", bulletIcon: <AiOutlineCheck /> },
    { value: "moveDate", bulletIcon: <AiOutlineRight /> },
    { value: "experinece", bulletIcon: <GiCircle /> },
    { value: "important", bulletIcon: <TbNorthStar /> },
    { value: "memo", bulletIcon: <MdEditNote /> },
  ];
};

export default arrayOfBullet;
