// import { useDispatch, useSelector } from "react-redux"
// import { RootState } from "../redux/store"
// import { useState } from "react";

// const Counter = () => {
//     const count = useSelector((state: RootState) => state.counter.value);
//     const dispatch = useDispatch();
//     const [newCount, setNewCount] = useState<number | '' >('');
//   return (
//     <div>
//       <button onClick={() => {
//         if(newCount){
//         dispatch({ type: 'counter/changeX', payload: -newCount })
//       }
//       setNewCount('');
//       }}>Minus</button>
//       <input type="number" value={newCount} onChange={(e) => {
//         if(!isNaN(+e.target.value)){
//         setNewCount(+e.target.value)}}}/>
//       <button onClick={() => {
//         if(newCount){
//         dispatch({ type: 'counter/changeX', payload: newCount })}}}>Plus</button>
//         <div>Counter: {count} </div>
//         <button onClick={() => dispatch({ type: 'counter/changeX', payload: -10 })}>Minus10</button>
//         <button onClick={() => dispatch({ type: 'counter/changeX', payload: -1 })}>Minus1</button>
//         <button onClick={() => dispatch({ type: 'counter/changeX', payload: 1 })}>Plus1</button>
//         <button onClick={() => dispatch({ type: 'counter/changeX', payload: 10 })}>Plus10</button>
//     </div>
//   )
// }

// export default Counter


import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import '../index.css';
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
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
              dispatch({ type: 'counter/changeX', payload: -newCount });
            }
            setNewCount('');
          }}>Minus</button>
        <button 
          className="btn plus-btn"
          onClick={() => {
            if(newCount){
              dispatch({ type: 'counter/changeX', payload: newCount });
            }
          }}>Plus</button>
      </div>
      <div className="counter-value">Counter: {count}</div>
      <div className="counter-buttons">
        <button 
          className="btn" 
          onClick={() => dispatch({ type: 'counter/changeX', payload: -10 })}
        >-10</button>
        <button 
          className="btn" 
          onClick={() => dispatch({ type: 'counter/changeX', payload: -1 })}
        >-1</button>
        <button 
          className="btn" 
          onClick={() => dispatch({ type: 'counter/changeX', payload: 1 })}
        >+1</button>
        <button 
          className="btn" 
          onClick={() => dispatch({ type: 'counter/changeX', payload: 10 })}
        >+10</button>
      </div>
    </div>
    </div>
  );
}

export default Counter;