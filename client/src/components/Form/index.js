import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function ShowDatePicker(props) {
  const [selectedDate, setSelctedDate] = useState(new Date());
  return (
    <div className = 'from-group'>
      <DatePicker 
        className= 'form-control' {...props} style={{ width: 100 }}
        selected={selectedDate}
        onChange={date => setSelctedDate(date)}
        dateFormat = 'yyyy/MM/dd'
      />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="2" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10, background: "black", width: 100 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
