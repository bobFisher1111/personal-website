import React from 'react';
import { Counter } from '../../../features/counter/Counter';
import '../../App.css';

const CounterComponent = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

export default CounterComponent;
