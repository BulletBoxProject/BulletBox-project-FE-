import React from "react";
import styled from "styled-components";

import { ReactComponent as todoBullet } from "../../../img/bullet/todo-1.svg";
import { ReactComponent as checkBullet } from "../../../img/bullet/check-2.svg";
import { ReactComponent as postphoneBullet } from "../../../img/bullet/postpone-3.svg";
import { ReactComponent as memoBullet } from "../../../img/bullet/memo-5.svg";
import { ReactComponent as importantBullet } from "../../../img/bullet/asterisk-6.svg";
import { ReactComponent as favoriteBullet } from "../../../img/bullet/star-7.svg";

const BulletDiv = () => {
  const bulletGroup = [
    { icon: <TodoBullet />, title: "할 일" },
    { icon: <CheckBullet />, title: "완 료" },
    { icon: <PostphoneBullet />, title: "미룬 일" },
    { icon: <MemoBullet />, title: "메 모" },
    { icon: <ImportantBullet />, title: "중 요" },
    { icon: <FavoriteBullet />, title: "자 주" },
  ];
  return (
    <Container>
      {bulletGroup.map((eachBullet) => (
        <EachBulletGroup>
          <span>{eachBullet.icon}</span>
          <span style={{ fontSize: "12.5px", marginLeft: "5px" }}>
            {eachBullet.title}
          </span>
        </EachBulletGroup>
      ))}
    </Container>
  );
};

export default BulletDiv;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-main);
  color: white;
  padding: 17px 15px;
  width: 30%;
  height: 210px;
  margin-top: 26px;
  border-radius: 8px;
  gap: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

const EachBulletGroup = styled.div`
  display: flex;
  align-items: center;
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
