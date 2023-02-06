import React, { useState, useEffect } from "react";
import styled from "styled-components";

import SelectHoursList from "./SelectHoursList";
import SelectMinutesList from "./SelectMinutesList";

import { RxTriangleDown } from "react-icons/rx";

const TimeSettingDiv = ({ AddTodoInput, setAddTodoInput }) => {
  console.log("시간 설정 없을 때 콘솔", AddTodoInput.time);
  const [showTimeSet, setShowTimeSet] = useState(false);
  const [showSelectTime, setShowSelectTime] = useState({
    hour: false,
    minute: false,
  });
  const [selectTime, setSelectTime] = useState({
    hour: "",
    minute: "",
  });
  // console.log("불러온 개별 시간", selectTime.hour, selectTime.minute);

  useEffect(() => {
    AddTodoInput.time === null || AddTodoInput.time === undefined
      ? setAddTodoInput({
          ...AddTodoInput,
          time: null,
        })
      : setAddTodoInput({
          ...AddTodoInput,
          time: {
            hour: AddTodoInput?.time?.split(":")[0],
            minute: AddTodoInput?.time.split(":")[1],
          },
        });
  }, []);

  const showSetTimeHandler = () => {
    setShowTimeSet(!showTimeSet);
    // setSelectTime(selectTime);
  };
  const showSelectHourHandler = () => {
    setShowSelectTime({
      ...showSelectTime,
      hour: !showSelectTime.hour,
    });
  };
  const showSelectMinuteHandler = () => {
    setShowSelectTime({
      ...showSelectTime,
      minute: !showSelectTime.minute,
    });
  };

  return (
    <Container>
      <TimeSetOnOffDiv>
        <SwitchDiv>
          <SwitchTitle>시간설정</SwitchTitle>
          <OnOffSwitchButton type="button" onClick={showSetTimeHandler}>
            {showTimeSet ? "ON" : "OFF"}
          </OnOffSwitchButton>
        </SwitchDiv>
        {showTimeSet ? (
          <SetTimeSelectDiv>
            <SelectHoursDiv>
              <SelectButtonDiv>
                <SelectHoursButton
                  id="hour"
                  type="button"
                  onClick={showSelectHourHandler}
                >
                  {AddTodoInput &&
                    (AddTodoInput.time === null ? (
                      <span>
                        <SelectDownIcon />
                      </span>
                    ) : (
                      <span>
                        {AddTodoInput.time.hour}
                        <SelectDownIcon />
                      </span>
                    ))}
                </SelectHoursButton>
                <span>시</span>
              </SelectButtonDiv>
              {showSelectTime.hour ? (
                <SelectHoursList
                  showSelectTime={showSelectTime}
                  setShowSelectTime={setShowSelectTime}
                  // selectTime={selectTime}
                  // setSelectTime={setSelectTime}
                  AddTodoInput={AddTodoInput}
                  setAddTodoInput={setAddTodoInput}
                />
              ) : null}
            </SelectHoursDiv>
            <SelectMinutesDiv>
              <SelectButtonDiv>
                <SelectMinutesButton
                  id="minute"
                  type="button"
                  onClick={showSelectMinuteHandler}
                >
                  {AddTodoInput && AddTodoInput.time === null ? (
                    <span>
                      <SelectDownIcon />
                    </span>
                  ) : (
                    <span>
                      {AddTodoInput.time.minute}
                      <SelectDownIcon />
                    </span>
                  )}
                </SelectMinutesButton>
                <span>분</span>
              </SelectButtonDiv>
              {showSelectTime.minute ? (
                <SelectMinutesList
                  showSelectTime={showSelectTime}
                  setShowSelectTime={setShowSelectTime}
                  // selectTime={selectTime}
                  // setSelectTime={setSelectTime}
                  AddTodoInput={AddTodoInput}
                  setAddTodoInput={setAddTodoInput}
                />
              ) : null}
            </SelectMinutesDiv>
          </SetTimeSelectDiv>
        ) : null}
      </TimeSetOnOffDiv>
    </Container>
  );
};

export default TimeSettingDiv;

const Container = styled.div`
  width: 100%;
  background-color: var(--color-default);
  padding: 15px 20px 20px 20px;
`;
const TimeSetOnOffDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
`;
const SwitchDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20%;
`;
const SwitchTitle = styled.div`
  color: var(--color-gray);
  font-size: 14px;
`;
const OnOffSwitchButton = styled.button`
  background-color: inherit;
  border: 0;
  font-size: 14px;
  color: var(--color-main);
  font-weight: 700;
`;
const SetTimeSelectDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-top: 10px;
`;
const SelectHoursDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  position: relative;
`;
const SelectButtonDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  & > span {
    font-size: 14px;
  }
`;
const SelectHoursButton = styled.button`
  display: flex;
  align-items: center;
  padding: 2px 5px;
  background-color: inherit;
  border: 0;
  & > span {
    font-size: 14px;
    display: flex;
    align-items: center;
  }
`;
const SelectDownIcon = styled(RxTriangleDown)`
  width: 20px;
  height: 20px;
`;
const SelectMinutesDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  position: relative;
`;
const SelectMinutesButton = styled.button`
  display: flex;
  align-items: center;
  padding: 2px 5px;
  background-color: inherit;
  border: 0;
  & > span {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
`;
