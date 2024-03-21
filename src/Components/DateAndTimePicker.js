import dayjs from "dayjs";
import React, { useState, useEffect } from "react";
import "./DateAndTimePicker.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import DisplayTime from "./DisplayTime";
import StartTimer from "./StartTimer";
import CancelTimer from "./CancelTimer";
import Message from "./Message";

const DateAndTimePicker = () => {
  const [value, setValue] = React.useState(dayjs(new Date()));
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [clicked, setClicked] = useState(false);

  const [newMillseconds, setNewMilliseconds] = useState(0);

  const [message, setMessage] = useState("");

  const [currDateAgeInMsec, setcurrDateAgeInMsec] = useState(
    dayjs(new Date()).$d.getTime()
  );

  // let currentDateAgeInMilliSeconds = dayjs(new Date()).$d.getTime();

  // let newDateAgeInMilliSeconds;
  const handleChange = (event) => {
    setValue(event);
    setNewMilliseconds(event.$d.getTime());
  };

  const handleStartButtonClick = () => {
    setClicked(true);
    calculateCount(newMillseconds, currDateAgeInMsec);
  };

  const handleCancelButtonClick = () => {
    setClicked(false);
    calculateCount(0);
    setNewMilliseconds(0);

    // setcurrDateAgeInMsec(0);
  };

  // calculateCount(newDateAgeInMilliSeconds);

  const calculateCount = (newDateAge, currDateAgeInMsec) => {
    let countInSeconds = (newDateAge - currDateAgeInMsec) / 1000;

    let days = Math.floor(countInSeconds / (3600 * 24));
    let hours = Math.floor((countInSeconds % (3600 * 24)) / 3600);
    let minutes = Math.floor((countInSeconds % 3600) / 60);
    let seconds = Math.floor(countInSeconds % 60);

    let dDisplay = days > 0 ? days : "0";
    let hDisplay = hours > 0 ? hours : "0";
    let mDisplay = minutes > 0 ? minutes : "0";
    let sDisplay = seconds > 0 ? seconds : "0";

    if (newDateAge < currDateAgeInMsec) {
      dDisplay = 0;
      hDisplay = 0;
      mDisplay = 0;
      sDisplay = 0;
      setMessage(
        "Please select any date in future less than or equal to 100 days! 🙂"
      );
    }

    if (newDateAge > currDateAgeInMsec && dDisplay > 100) {
      dDisplay = 0;
      hDisplay = 0;
      mDisplay = 0;
      sDisplay = 0;
      setMessage("Selected Date is more than 100 Days! 🤔");
    }

    if (dDisplay == 0 && hDisplay == 0 && mDisplay == 0 && sDisplay == 1)
      setMessage("🎉The countdown is over! Whats next on your adventure?🎉");
    else {
      setDays(dDisplay);
      setHours(hDisplay);
      setMinutes(mDisplay);
      setSeconds(sDisplay);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (newMillseconds > 0) {
        calculateCount(newMillseconds, dayjs(new Date()).$d.getTime());
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [clicked, newMillseconds]);

  return (
    <div className="container">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker value={value} onChange={(e) => handleChange(e)} />
      </LocalizationProvider>
      {!clicked ? (
        <StartTimer handleClick={handleStartButtonClick} />
      ) : (
        <>
          <CancelTimer handleClick={handleCancelButtonClick} />
          <DisplayTime
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
        </>
      )}
      <Message reason={message} />
    </div>
  );
};

export default DateAndTimePicker;
