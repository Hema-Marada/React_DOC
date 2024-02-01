import React from 'react'

function Destructuring(props) {
    const { name, age, city } = props;

    return (
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>City: {city}</p>
      </div>
    );
}

export default Destructuring
