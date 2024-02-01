import React, {Component} from 'react';

class LifecycleExample extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
      console.log("Constructor called");
    }
  
    componentDidMount() {
      console.log("Component did mount");
    }
  
    shouldComponentUpdate(nextProps, nextState) {
      console.log("Should component update");
      return nextState.count !== this.state.count;
    }
  
    componentDidUpdate(prevProps, prevState) {
      console.log("Component did update");
    }
  
    componentWillUnmount() {
      console.log("Component will unmount");
    }
  
    incrementCount = () => {
      this.setState((prevState) => ({
        count: prevState.count + 1
      }));
    };
  
    render() {
      console.log("Render called");
      return (
        <div>
          <p>Count: {this.state.count}</p>
          <button onClick={this.incrementCount}>Increment Count</button>
        </div>
      );
    }
  }
  
  export default LifecycleExample;
  