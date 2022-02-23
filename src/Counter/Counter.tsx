import React, { useState } from 'react';

import styled from 'styled-components';

const StyledCounter = styled.div`
  & .success {
    color: green;
  }
  & .danger {
    color: red;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 30vh;
`;

interface CounterProps {}

const Counter: React.FC<CounterProps> = (props) => {
  const [counterVal, setCounterVal] = useState<number>(0);
  const [inputVal, setInputVal] = useState<number>(1);
  const [checkboxVal, setCheckboxVal] = useState<boolean>(false);

  const inputChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setInputVal(parseInt(e.currentTarget.value));
  };

  const addToCounter = () => {
    setCounterVal((prevVal) => prevVal + inputVal);
  };
  const substractFromCounter = () => {
    setCounterVal((prevVal) => prevVal - inputVal);
  };

  const addAhundredHandler = () => {
    setCounterVal((prevVal) => prevVal + 100);
  };

  return (
    <StyledCounter>
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
      <div>
        <button data-testid="btn-add-100" onClick={addAhundredHandler}>
          Add 100
        </button>
      </div>
      <div>
        <input
          type="checkbox"
          data-testid="checkbox"
          checked={checkboxVal}
          onClick={() => setCheckboxVal((prevVal) => !prevVal)}
        />
      </div>
      <div>
        <input
          type="radio"
          data-testid="radio"
          checked={checkboxVal}
          onClick={() => setCheckboxVal((prevVal) => !prevVal)}
        />
      </div>
    </StyledCounter>
  );
};

export default Counter;
