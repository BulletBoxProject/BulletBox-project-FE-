import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ReactComponent as guide1 } from "../../../img/Guide/guide1.svg";

const SimpleSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <GuideText>도움말</GuideText>
          <Guide1 />
        </div>
        <div>
          <GuideText>도움말</GuideText>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
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
  width: 293px;
  height: 470px;
`;
