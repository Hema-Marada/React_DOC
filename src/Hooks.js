import React, { useState, useEffect, useContext, useReducer, useCallback } from 'react';
import ThemeContext from './ThemeContext';

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default function Counter() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  const theme = useContext(ThemeContext);

  // Define a callback function for handling API data
  const handleApiData = useCallback((result) => {
    const apiData = result.entries || result.data || [];
    setData(apiData);
  }, []);

  useEffect(() => {
    // Fetch data from an API
    fetch('https://api.publicapis.org/entries')
      .then(response => response.json())
      .then(handleApiData) // Use the callback function
      .catch(error => console.error('Error fetching data:', error));
  }, [handleApiData]); // Include the callback function in the dependency array

  console.log('Theme:', theme);

  return (
    <>
      <div>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      </div>
      <div>
        {data && (
          <div>
            <h2>API Data</h2>
            <ul>
              {data.map(api => (
                <li key={api.API}>
                  <strong>Name:</strong> {api.API},
                  <strong>Category:</strong> {api.Category}<br />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <p style={{ color: theme }}>Themed text</p>
    </>
  );
}
