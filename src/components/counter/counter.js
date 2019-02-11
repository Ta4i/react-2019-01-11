import React, { Component } from 'react'
import { connect } from 'react-redux';
import { increment } from '../../ac';
import { Consumer as LangConsumer } from '../../contexts/language'

class Counter extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.countProp}</h2>
                <button onClick={this.handleIncrement}>
                    <LangConsumer>
                        {(language) => language.increment}
                    </LangConsumer>
                </button>
            </div>
        )
    }

    handleIncrement = () => {
        this.props.dispatchIncrement()
    }
}

const mapStateToProps = (store) => ({
    countProp: store.count
})

const mapDispatchToProps = {
    dispatchIncrement: increment
}
// const mapDispatchToProps = (dispatch) => ({
//     dispatchIncrement: () => dispatch(increment())
// })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)
