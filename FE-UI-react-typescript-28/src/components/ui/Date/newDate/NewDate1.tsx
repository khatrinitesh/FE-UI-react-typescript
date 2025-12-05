import { useState } from "react";

const NewDate1 = () => {
  const [currentDate] = useState<Date>(new Date());

  const specificDate = new Date("2025-12-25T10:30:00");
  return (
    <div>
      {" "}
      <h2>new Date() Example in React + TypeScript</h2>
      <h3>Current Date & Time:</h3>
      <p>{currentDate.toString()}</p>
      <h3>Formatted Current Date:</h3>
      <p>{currentDate.toLocaleString()}</p>
      <h3>Specific Date:</h3>
      <p>{specificDate.toString()}</p>
      <h3>Individual Components:</h3>
      <ul>
        <li>Year: {currentDate.getFullYear()}</li>
        <li>
          Month: {currentDate.getMonth() + 1} {/* Month is 0-indexed */}
        </li>
        <li>Date: {currentDate.getDate()}</li>
        <li>Hours: {currentDate.getHours()}</li>
        <li>Minutes: {currentDate.getMinutes()}</li>
        <li>Seconds: {currentDate.getSeconds()}</li>
        <li>Day: {currentDate.getDay()}</li>
      </ul>
    </div>
  );
};

export default NewDate1;
