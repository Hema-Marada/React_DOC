
import React, {useRef} from 'react'

function FunctionalRefs() {
    const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  )
}

export default FunctionalRefs
