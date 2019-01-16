import React, {Component} from 'react'

class Chart extends Component {
    render() {
        return (
            <div ref = {this.setContainerRef}/>
        )
    }
    setContainerRef = (ref) => {
         this.constainer = ref
    };
}

export default Chart
