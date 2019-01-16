import React, {Component} from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';


class Picker extends Component {
	state = {
		startDate: null,
		endDate: null,
	};


	render() {
		return (
			<div>
				<DatePicker
					selected={this.state.startDate}
					selectsStart
					startDate={this.state.startDate}
					endDate={this.state.endDate}
					onChange={this.handleChangeStart}
				/>

				<DatePicker
					selected={this.state.endDate}
					selectsEnd
					startDate={this.state.startDate}
					endDate={this.state.endDate}
					onChange={this.handleChangeEnd}
				/>
			</div>
		)
	}

	handleChangeStart = (data) => {
		this.setState({
			startDate: data
		})
	};

	handleChangeEnd = (data) => {
		this.setState({
			endDate: data
		})
	}


}

export default Picker;