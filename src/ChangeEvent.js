import React, { useState } from 'react'

function ChangeEvent() {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (event) => {
        setInputValue(event.target.value);
      };
  return (
    <div>
            <input type="text" value={inputValue} onChange={handleChange} style={{width:'200px',marginLeft:'5%',marginTop:'3%'}} />

      
    </div>
  )
}

export default ChangeEvent
