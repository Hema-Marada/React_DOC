
import React, { Component } from 'react'

export default class ClassRefs extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
      }
    
      handleClick = () => {
        this.inputRef.current.focus();
      };
  render() {
    return (
      <div>
         <input type="text" ref={this.inputRef} style={{width:'25%', marginLeft:'5%', marginTop:'4%'}} /><br />
        <button onClick={this.handleClick} >Focus Input</button>
      </div>
    )
  }
}
