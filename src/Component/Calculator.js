import React, { useState } from 'react';
import classes from './Calculator.module.css'

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };
  const handleClear = () => {
    setInput('');
    setResult('');
  };
  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };
  return (
    <div className={classes.calculator}>
      <input type={classes.text} value={input} readOnly />
      <div className={classes.result}>
      <p>{result}</p>
    </div>
      <div className={classes.buttons}>
        <div className={classes.row}>
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div className={classes.row}>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
      </div>
      <div className={classes.row}>
      <button onClick={() => handleButtonClick('3')}>3</button>
      <button onClick={() => handleButtonClick('6')}>6</button>
      <button onClick={() => handleButtonClick('9')}>9</button>
      <button onClick={() => handleButtonClick('+')}>+</button>
    </div>
        <div className={classes.row}>
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={handleCalculate}>=</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div className={classes.row}>
          <button onClick={handleClear}>C</button>
        </div>
      </div>
     
    </div>
  );
}
export default Calculator;