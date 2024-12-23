import React, {useState} from "react";
import "./counter.css"
const Counter = () => {
	const [count, setCount] = useState(0);
	return (
		<div className="counter-container">
		<div className="counter-child">
		<p>{count}</p>
		<div className="button-div">
		<button className="counter-button" onClick={ () => {setCount(count - 1)}}>-1</button>
		<button className="counter-button" onClick={ () => {setCount(count + 1)}}>+1</button>
		</div>
		</div>
		</div>
	)
}
export default Counter
