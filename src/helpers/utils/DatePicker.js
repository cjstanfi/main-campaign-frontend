import React, { forwardRef, useEffect, useState } from "react";
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const DatePickerComponent = ({
  classname,
  ndate,
  setndate,
  placeholderText,
  src,
  startDate,
  endDate
}) => {
  const [isOpen, setIsOpen] = useState(false);


  const CustomInput2 = forwardRef(({ value, onClick }, ref) => (
    <input className="" placeholder={placeholderText} value={value} readOnly onClick={onClick} ref={ref} />
  ));
  //var edate = new Date();
  var numberOfDaysToAdd = 7;


const addDays = (dateData,d)=>{
  return dateData.setDate(dateData.getDate() + d);
}
const subDays = (dateData,d)=>{
  return dateData.setDate(dateData.getDate() - d);
}
  return (
    <>
      {src ? (
        <DatePicker
          className={classname}
          selected={ndate}
          onChange={(date) => setndate(date)}
          onClickOutside={() => setIsOpen(false)}
          customInput={<CustomInput2 />}
          startDate={startDate}
          disabledKeyboardNavigation
          minDate={startDate}
          maxDate={moment().toDate()}
          selectsEnd
        />
      //   <DatePicker
      //   selected={endDate}
      //   onChange={(date) => setndate(date)}
      //   selectsEnd
      //   startDate={startDate}
      //   endDate={endDate}
      //   minDate={startDate}

      // />
      ) : (
        <DatePicker
          className={classname}
          selected={ndate}
          onChange={(date) => setndate(date)}
          onClickOutside={() => setIsOpen(false)}
          customInput={<CustomInput2/>}
          startDate={startDate}
          maxDate={endDate}
          selectsStart
          endDate={endDate}
          highlightDates={[subDays(new Date(), 7), addDays(new Date(), 7)]}

        />
      //   <DatePicker
      //   selected={startDate}
      //   onChange={(date) => setndate(date)}
      //   selectsStart
      //   startDate={startDate}
      //   endDate={endDate}
      // />
      )}
    </>
  );
};
export default DatePickerComponent;
