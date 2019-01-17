import React, {Component} from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class MyDatePicker extends Component {
   constructor(props) {
      super(props);
      this.state = {
         startDate: new Date(),
         endDate: null
      };
      this.handleChangeStart = this.handleChangeStart.bind(this);
      this.handleChangeEnd = this.handleChangeEnd.bind(this);
   }

   handleChangeStart(date) {
      this.setState({
         startDate: date
      });
   }
   handleChangeEnd(date) {
      this.setState({
         endDate: date
      });
   }

   render() {
      return (
         <div className="datepicker">
            <h3>DatePicker</h3>
            <div className="datepicker-part">
               <DatePicker
                  selected={this.state.startDate}
                  selectsStart
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  maxDate={this.state.endDate}
                  onChange={this.handleChangeStart}
               />
               <h5>Start:</h5>
               <span></span>
            </div>
            <div className="datepicker-part">
               <DatePicker
                  selected={this.state.endDate}
                  selectsEnd
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  minDate={this.state.startDate}
                  onChange={this.handleChangeEnd}
               />
               <h5>End:</h5>
            </div>
         </div>
      );
   }
}

export default MyDatePicker;
