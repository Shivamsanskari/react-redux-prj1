import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showHide = useSelector((state) => state.showCounter);


  const [userInput, setUserInput] = useState('');

  const userInputHandler = (e) => {
    e.preventDefault();
    setUserInput(e.target.value);
  }

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  }
  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  }

  const increaseHandler = () => {
    dispatch({type: 'increase', amount: 20})
  }

  const toggleCounterHandler = () => {
      dispatch({type: 'togglecounter'})
   };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showHide && <div className={classes.value}>{counter}</div>}
      <input type="text" value={userInput} onChange={userInputHandler}/>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase By 20</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
