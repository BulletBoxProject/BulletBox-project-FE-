import { format } from "date-fns";
import React, { useState } from "react";

const RenderHeader = ({ currenMonth }) => {
  return (
    <div>
        <span>
      <span>{format(currenMonth, "M")} 월 </span>
      {format(currentMonth),}
</span>
    </div>
  );
};

const ReactCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <RenderHeader />
      {/* <Days />
      <Cells /> */}
    </div>
  );
};

export default ReactCalendar;
