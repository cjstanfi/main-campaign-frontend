import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = ({
  classname,
  ndate,
  setndate,
  placeholderText,
  imgsrc,
  startDate
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <img src={imgsrc} className="" alt={value} onClick={onClick} ref={ref} />
  ));

  const CustomInput2 = forwardRef(({ value, onClick }, ref) => (
    <input className="" placeholder={placeholderText} value={value}   alt={value} onClick={onClick} ref={ref} />
  ));

  return (
    <>
      {imgsrc ? (
        <DatePicker
          className={classname}
          selected={ndate}
          onChange={(date) => setndate(date)}
          placeholderText={placeholderText}
          onInputClick={() => setIsOpen(true)}
          onClickOutside={() => setIsOpen(false)}
          open={isOpen}
          customInput={<CustomInput />}
          onFocus={(e) => e.target.readOnly = true}
        />
      ) : (
        <DatePicker
          className={classname}
          selected={ndate}
          onChange={(date) => setndate(date)}
          placeholderText={placeholderText}
          onInputClick={() => setIsOpen(true)}
          onClickOutside={() => setIsOpen(false)}
          open={isOpen}
          customInput={<CustomInput2/>}
          minDate={startDate}
        />
      )}
    </>
  );
};
export default DatePickerComponent;
