import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import DiaryCalendar from "../components/DiaryCalendar";
import DiaryContents from "../components/DiaryContents";

import { __getDiary } from "../../../redux/modules/emotionDiarySlice";

const DiaryContainer = () => {

  const diaryContents = useSelector(
    (state) => state?.emotionDiary?.emotionDiary?.diary?.diaryContent
  );
  const diaryID = useSelector(
    (state) => state?.emotionDiary?.emotionDiary?.diary?.diaryId
  );
  const diaryEmotion = useSelector(
    (state) => state?.emotionDiary?.emotionDiary?.diary?.emotion
  );

  const Emotions = useSelector(
    (state) => state?.emotionDiary?.emotionDiary?.emotions
  );

  const dispatch = useDispatch();

  const [diaryContent, setDiaryContent] = useState("");
  const [diaryId, setDiaryId] = useState(null);
  const [emotion, setEmotion] = useState("");
  const [isDiary, setIsDiary] = useState("");

  const [selectDate, setSelectDate] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [date, setDate] = useState(new Date().getDate());

  const DiaryInfo = {
    diaryId: diaryId,
    diaryContent: diaryContent,
    year: year,
    month: month,
    day: date,
    emotion: emotion,
  };

  // console.log(diaryList, "list");

  const onDateHandler = () => {
    const day = ["일", "월", "화", "수", "목", "금", "토"];
    const today = `${String(year).substr(2, 2)}/${
      month < 10 ? `0${month}` : month
    }/${date < 10 ? `0${date}` : date}(${day[new Date().getDay()]})`;
    setSelectDate(today);
  };

  useEffect(() => {
    dispatch(__getDiary());
    onDateHandler();
  }, [dispatch]);

  useEffect(() => {
    if (diaryContents === null) {
      setDiaryContent("");
    } else {
      setDiaryContent(diaryContents);
    }
    setDiaryId(diaryID);
    setEmotion(diaryEmotion);


  }, [diaryContents]);

  return (
    <Container>
      <CalendarDiv>
        <SelectDiv>Today</SelectDiv>
        <DiaryCalendar
          setYear={setYear}
          setMonth={setMonth}
          setDate={setDate}
          setSelectDate={setSelectDate}
          setDiaryContent={setDiaryContent}
          emotion={emotion}
        />
      </CalendarDiv>
      <DiaryContents
        DiaryInfo={DiaryInfo}
        diaryContent={diaryContent}
        setDiaryContent={setDiaryContent}
        emotion={emotion}
        setEmotion={setEmotion}
        selectDate={selectDate}
      ></DiaryContents>
    </Container>
  );
};

export default DiaryContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 999;
`;
const CalendarDiv = styled.div`
  position: relative;
  height: 310px;
  justify-content: center;
  align-items: center;
`;
const SelectDiv = styled.div`
  position: absolute;
  top: 3.2%;
  left: 88%;
  align-items: center;
  padding-top: 5px;
  font-weight: bold;
`;
