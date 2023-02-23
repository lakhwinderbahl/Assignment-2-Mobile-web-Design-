import { useReducer } from 'react';

function Services() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }

  return (
    <div className="services-container">
      <h1>Services Page</h1>
      <div class="p">Count: {state.count}</div>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <style jsx>{`
        .services-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        @media (min-width: 768px) {
          .services-container {
            flex-direction: row;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}

export default Services;
