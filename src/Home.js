import { useState, useEffect } from 'react';

function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <h1>Home Page</h1>
      <p className="count">You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <style>
        {`
          .count {
            font-size: 1rem;
          }

          @media screen and (min-width: 768px) {
            .count {
              font-size: 1.5rem;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Home;
