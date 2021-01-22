import React, { Component } from 'react'
 
import SimpleReactCalendar from 'simple-react-calendar'
 
class MyApp extends Component {
  render() {
    return <SimpleReactCalendar activeMonth={new Date()} />
  }
}