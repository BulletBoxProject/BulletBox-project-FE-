import React from "react";
import styled from "styled-components";

import { ReactComponent as todoBullet } from "../../../img/bullet/todo-1.svg";
import { ReactComponent as checkBullet } from "../../../img/bullet/check-2.svg";
import { ReactComponent as postphoneBullet } from "../../../img/bullet/postpone-3.svg";
import { ReactComponent as memoBullet } from "../../../img/bullet/memo-5.svg";
import { ReactComponent as importantBullet } from "../../../img/bullet/asterisk-6.svg";
import { ReactComponent as favoriteBullet } from "../../../img/bullet/star-7.svg";

const SearchTodoBullet = ({ bulletName }) => {
  const selectBullet = () => {
    switch (bulletName) {
      case "TODO":
        return (
          <div>
            <TodoBullet />
          </div>
        );
      case "COMPlETE":
        return (
          <div>
            <CheckBullet />
          </div>
        );
      case "DELAYED":
        return (
          <div>
            <PostphoneBullet />
          </div>
        );
      case "IMPORTANT":
        return (
          <div>
            <ImportantBullet />
          </div>
        );
      case "MEMO":
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
