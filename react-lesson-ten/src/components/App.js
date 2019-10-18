import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, input} from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter count={this.props.count} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} onInput={this.props.onInput}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onInput: () => dispatch(input())
  };
}
function mapStateToProps(state) {
    return {
      count: state.count
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);