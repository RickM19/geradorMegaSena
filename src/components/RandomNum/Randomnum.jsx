import React, {useState} from "react";
import "./RandomNum.css"

export default function RandomNum({number}){
    
    return (
        <div className="numero">
            <p>{number}</p>
        </div>
    )
}