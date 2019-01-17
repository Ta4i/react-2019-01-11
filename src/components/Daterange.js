import React, {PureComponent} from 'react'
import DatePicker from 'react-datepicker';


class Daterange extends PureComponent {
    state = {
        
        startDate: null,
        endDate: null
    }
    render() {
           
        return (
            <div style={{margin:'10px auto', width: '500px'}}>
            <p>Daterange picker</p>
                <DatePicker 
                    selected = {this.state.startDate}
                    selectsStart
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeStart}
                    
                />
                <DatePicker 
                    selected = {this.state.endDate}
                    selectsEnd
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeEnd}
                />
            </div>
        )
    }
    handleChangeStart = (startDate) => this.setState({startDate})
    handleChangeEnd = (endDate) => this.setState({endDate})
}
export default Daterange