import React from 'react'; 

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }


  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button className='bg-red-700 px-3 py-1 rounded-2xl  border-zinc-900' onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;