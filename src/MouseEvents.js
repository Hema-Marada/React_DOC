import React , { useState } from 'react'

function MouseEvents() {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseOver = () => {
        setIsHovered(true);
      };
    
      const handleMouseOut = () => {
        setIsHovered(false);
      };
  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
    {isHovered ? 'Mouse is out' : 'Mouse is over '}
  </div>
  )
}

export default MouseEvents
