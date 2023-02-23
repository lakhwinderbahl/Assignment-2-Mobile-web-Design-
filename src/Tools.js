import { useCallback, useState } from 'react';
import Calculator from './Calculator';
import Notes from './Notes';

function Tools() {
  const [text, setText] = useState('');
  const [reversedText, setReversedText] = useState('');

  const reverseText = useCallback(() => {
    setReversedText(text.split('').reverse().join(''));
  }, [text]);

  return (
    <div className="container">
      <h1>Tools Page</h1>
      <div className="input-container">
        <input value={text} onChange={e => setText(e.target.value)} />
        <button onClick={reverseText}>Reverse Text</button>
      </div>
      <p>Reversed Text: {reversedText}</p>
      <div className="tools-container">
        <Calculator />
        <Notes />
      </div>
      <style>
        {`
          .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }

          .input-container {
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;
          }

          input {
            margin-bottom: 10px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }

          button {
            padding: 10px;
            background-color: #0077cc;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }

          p {
            margin-top: 20px;
          }

          .tools-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }

          .tool {
            margin: 10px;
            flex-basis: 300px;
          }

          @media screen and (max-width: 768px) {
            .input-container {
              flex-direction: row;
            }

            input {
              margin-right: 10px;
              margin-bottom: 0;
            }

            .tools-container {
              flex-direction: column;
            }

            .tool {
              margin: 10px 0;
              flex-basis: 100%;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Tools;
