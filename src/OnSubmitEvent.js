import React, { useState } from 'react'

function OnSubmitEvent() {
    const [inputValue, setInputValue] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Form submitted with value:', inputValue);
        setInputValue('');
      };
    
      const handleChange = (event) => {
        setInputValue(event.target.value);
      };
  return (
    <div>
         <form onSubmit={handleSubmit} style={{width:'30%',marginTop:'5%',marginLeft:'2%'}}>
      <input type="text" value={inputValue} onChange={handleChange}  />
      <button type="submit">Submit</button>
    </form>
      
    </div>
  )
}

export default OnSubmitEvent
