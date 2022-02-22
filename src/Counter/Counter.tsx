import React, { useState } from 'react';

interface CounterProps {}

const Counter: React.FC<CounterProps> = (props) => {
  const [counterVal, setCounterVal] = useState<number>(0);
  const [inputVal, setInputVal] = useState<number>(1);

  const inputChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setInputVal(parseInt(e.currentTarget.value));
  };

  const addToCounter = () => {
    setCounterVal((prevVal) => prevVal + inputVal);
  };
  const substractFromCounter = () => {
    setCounterVal((prevVal) => prevVal - inputVal);
  };

  console.log(
    counterVal >= 100 ? 'success' : counterVal <= -100 ? 'danger' : ''
  );
  return (
    <div>
      <div>
        <h3 data-testid="title">Counter</h3>
      </div>
      <div>
        <span
          data-testid="counter"
          className={
            counterVal >= 100 ? 'success' : counterVal <= -100 ? 'danger' : ''
          }
        >
          {counterVal}
        </span>
      </div>
      <div>
        <button data-testid="btn-substract" onClick={substractFromCounter}>
          -
        </button>
        <input
          data-testid="input"
          onChange={inputChangeHandler}
          value={inputVal}
        ></input>
        <button data-testid="btn-add" onClick={addToCounter}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
