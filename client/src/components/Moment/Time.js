import React  from 'react';
import Moment from 'react-moment';

function WeekDay() {

  return (
    
    <h2>{moment().format('dddd')}</h2> 
      
  )
}


export default WeekDay
  
  
