import React from 'react';

const Counter = ({ count, onDecrement, onIncrement, onInput}) => {

    return (
      <div>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>{count}</span>
          <button onClick={onIncrement}>+</button>
          <br />
          <p>Times the increment/decrement buttons have been clicked: {count}</p>
          <input></input>
          <button onClick={onInput}>Change Count Number</button>
        </div>
      </div>
    );
}


export default Counter;