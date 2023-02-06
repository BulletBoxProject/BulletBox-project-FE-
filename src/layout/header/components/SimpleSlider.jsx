import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ReactComponent as guide1 } from "../../../img/guide/guide1.svg";
import { ReactComponent as guide2 } from "../../../img/guide/guide2.svg";
import { ReactComponent as guide3 } from "../../../img/guide/guide3.svg";
import { ReactComponent as guide4 } from "../../../img/guide/guide4.svg";
import { ReactComponent as guide5 } from "../../../img/guide/guide5.svg";
import { ReactComponent as guide6 } from "../../../img/guide/guide6.svg";
import { ReactComponent as guide7 } from "../../../img/guide/guide7.svg";

const SimpleSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <Slider {...settings}>
        <>
          <GuideText>도움말</GuideText>
          <Guide1 />
        </>
        <>
          <GuideText>도움말</GuideText>
          <Guide2 />
        </>
        <>
          <GuideText>도움말</GuideText>
          <Guide3 />
        </>
        <>
          <GuideText>도움말</GuideText>
          <Guide4 />
        </>
        <>
          <GuideText>도움말</GuideText>
          <Guide5 />
        </>
        <>
          <GuideText>도움말</GuideText>
          <Guide6 />
        </>
        <>
          <GuideText>도움말</GuideText>
          <Guide7 />
        </>
      </Slider>
    </Container>
  );
};

export default SimpleSlider;

const GuideText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;
  font-size: 14px;
  font-weight: bold;
  margin-top: 20px;
  color: var(--color-black);
`;

const Guide1 = styled(guide1)`
  width: 290px;
  height: 420px;
`;

const Guide2 = styled(guide2)`
  width: 290px;
  height: 420px;
`;
const Guide3 = styled(guide3)`
  width: 290px;
  height: 420px;
`;

const Guide4 = styled(guide4)`
  width: 290px;
  height: 420px;
`;
const Guide5 = styled(guide5)`
  width: 290px;
  height: 420px;
`;
const Guide6 = styled(guide6)`
  width: 290px;
  height: 420px;
`;
const Guide7 = styled(guide7)`
  width: 290px;
  height: 420px;
`;

const Container = styled.div`
  .slick-next {
    right: -21px;
  }
  .slick-prev {
    left: -28px;
  }
  .slick-prev:before,
  .slick-next:before {
    font-size: 28px;
  }
`;
