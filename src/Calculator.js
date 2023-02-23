import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleAddition = () => {
    setResult(parseInt(num1) + parseInt(num2));
  };

  const handleSubtraction = () => {
    setResult(parseInt(num1) - parseInt(num2));
  };

  const handleMultiplication = () => {
    setResult(parseInt(num1) * parseInt(num2));
  };

  const handleDivision = () => {
    setResult(parseInt(num1) / parseInt(num2));
  };

  return (
    <div>
      <input type="text" value={num1} onChange={handleNum1Change} />
      <input type="text" value={num2} onChange={handleNum2Change} />
      <button onClick={handleAddition}>+</button>
      <button onClick={handleSubtraction}>-</button>
      <button onClick={handleMultiplication}>*</button>
      <button onClick={handleDivision}>/</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default Calculator;
