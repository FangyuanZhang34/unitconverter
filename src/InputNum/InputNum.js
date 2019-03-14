import React from 'react';
import './InputNum.css'

// stateless component: no internal state management
const inputNum = (props) => {
    return (
        <div className="InputNum">
            <h3>cm and inch</h3>
            <div className="converter"> 
                <p>{props.cm} cm  =  {props.inch}  inches</p>
                <input type="number" onChange={props.convert2Inch} placeholder="cm" min="0"/>
                <input type="number" onChange={props.convert2Cm} placeholder="inch" min="0"/>
            </div>
            <h3>kg and pound</h3>
            <div className="converter">
                <p>{props.kg} kg  =  {props.pound}  pounds</p>
                <input type="number" onChange={props.convert2Pound} placeholder="kg" min="0"/>
                <input type="number" onChange={props.convert2Kg} placeholder="pound" min="0"/>
            </div>
        </div>
    )
};

export default inputNum;