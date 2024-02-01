import React, { Component } from 'react'

export default class ClassEvents extends Component {
    handleClick() {
        console.log('Class Component Button  clicked.');
      }
  render() {
    return (
      <div>
        <button onClick={this.handleClick} style={{backgroundColor:'purple'}}>Click me</button>
      </div>
    )
  }
}
