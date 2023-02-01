import React from "react";
import styled from "styled-components";

import { ReactComponent as todoBullet } from "../../../img/bullet/todo-1.svg";
import { ReactComponent as checkBullet } from "../../../img/bullet/check-2.svg";
import { ReactComponent as postphoneBullet } from "../../../img/bullet/postpone-3.svg";
import { ReactComponent as memoBullet } from "../../../img/bullet/memo-5.svg";
import { ReactComponent as importantBullet } from "../../../img/bullet/asterisk-6.svg";
import { ReactComponent as favoriteBullet } from "../../../img/bullet/round-star-outline.svg";
import { ReactComponent as undefinedBullet } from "../../../img/bullet/triangle.svg";
import { ReactComponent as highLightBullet } from "../../../img/bullet/circle-double.svg";

const SearchTodoBullet = ({ bulletName }) => {
  const selectBullet = () => {
    switch (bulletName) {
      case "할 일":
        return (
          <div>
            <TodoBullet />
          </div>
        );
      case "완료":
        return (
          <div>
            <CheckBullet />
          </div>
        );
      case "미룬 일":
        return (
          <div>
            <PostphoneBullet />
          </div>
        );
      case "중요":
        return (
          <div>
            <ImportantBullet />
          </div>
        );
      case "자주":
        return (
          <div>
            <FavoriteBullet />
          </div>
        );
      case "미정":
        return (
          <div>
            <UndefinedBullet />
          </div>
        );
      case "강조":
        return (
          <div>
            <HighLightBullet />
          </div>
        );
      case "메모":
        return (
          <div>
            <MemoBullet />
          </div>
        );
    }
  };
  return <div>{selectBullet()}</div>;
};

export default SearchTodoBullet;

const TodoBullet = styled(todoBullet)`
  width: 24px;
  height: 24px;
`;
const CheckBullet = styled(checkBullet)`
  width: 24px;
  height: 24px;
`;
const PostphoneBullet = styled(postphoneBullet)`
  width: 24px;
  height: 24px;
`;

const ImportantBullet = styled(importantBullet)`
  width: 24px;
  height: 24px;
`;
const MemoBullet = styled(memoBullet)`
  width: 24px;
  height: 24px;
`;

const FavoriteBullet = styled(favoriteBullet)`
  width: 24px;
  height: 24px;
`;

const UndefinedBullet = styled(undefinedBullet)`
  width: 24px;
  height: 24px;
`;
const HighLightBullet = styled(highLightBullet)`
  width: 24px;
  height: 24px;
`;
