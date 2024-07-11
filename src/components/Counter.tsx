import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reduxRTK/storeRTK";
import '../index.css';
import { useState } from "react";
import { change } from "../reduxRTK/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.value);
  const dispatch = useDispatch();
  const [newCount, setNewCount] = useState<number | ''>('');

  return (
    <div className="img-container">
    <div className="counter-container">
      <h1 className="counter-title">Counter App</h1>
      <div className="counter-input-group">
        <input 
          className="counter-input"
          type="number" 
          value={newCount} 
          onChange={(e) => {
            if(!isNaN(+e.target.value)){
              setNewCount(+e.target.value);
            } }}/>
        <button 
          className="btn minus-btn"
          onClick={() => {
            if(newCount){
              // dispatch({ type: 'counter/changeX', payload: -newCount });
              dispatch(change(-newCount));

            }
            setNewCount('');
          }}>Minus</button>
        <button 
          className="btn plus-btn"
          onClick={() => {
            if(newCount){
              dispatch(change(newCount));
            }
          }}>Plus</button>
      </div>
      <div className="counter-value">Counter: {count}</div>
      <div className="counter-buttons">
        <button 
          className="btn" 
          onClick={() => dispatch(change(-10))}
        >-10</button>
        <button 
          className="btn" 
          onClick={() => dispatch(change(-1))}
        >-1</button>
        <button 
          className="btn" 
          onClick={() => dispatch(change(1))}
        >+1</button>
        <button 
          className="btn" 
          onClick={() => dispatch(change(10))}
        >+10</button>
      </div>
    </div>
    </div>
  );
}

export default Counter;