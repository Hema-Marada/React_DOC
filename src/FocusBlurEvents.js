import React, {useState} from 'react'

function FocusBlurEvents() {
    const [isFocused,setIsFocused]=useState(false)
    const handleFocus =()=>
    {
setIsFocused(false)
    }
    const handleBlur=()=>
    {
        setIsFocused(false)

    }
  return (
    <div>
      <input onFocus={handleFocus} onBlur={handleBlur} style={{width:"30%", marginLeft:'5%', marginTop:'3%'}} />
    </div>
  )
}

export default FocusBlurEvents
