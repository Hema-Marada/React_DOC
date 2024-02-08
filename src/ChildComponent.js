import React, { useState } from 'react';

export default function ChildComponent(props) {
  const [childInput, setChildInput] = useState('');

  // Callback function to send data back to the parent
  const sendDataToParent = () => {
    props.sendData(childInput);
  };

  return (
    <div>
      <p>{props.message}</p>
      <input
        type="text"
        value={childInput}
        onChange={(e) => setChildInput(e.target.value)}
      />
      <button onClick={sendDataToParent}>Send Data to Parent</button>
    </div>
  );
}
