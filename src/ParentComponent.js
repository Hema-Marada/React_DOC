import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

export default function ParentComponent() {
  const [receivedData, setReceivedData] = useState('');

  // Callback function to handle data received from the child
  const handleChildData = (data) => {
    setReceivedData(data);
  };

  return (
    <div>
      <p>Data received from Child: {receivedData}</p>
      <ChildComponent  sendData={handleChildData} />
    </div>
  );
}
