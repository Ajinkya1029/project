import React, { useState } from "react";
import styles from "../css/homepage.module.css";
function YesNoDiv(){
    const [prop,setProp]=useState({ 
   
    
    position: 'absolute',
    left: `55%`,
    textAlign: 'center',
transition:'1s ease'});
   

    function cant(){
var minHeight=Math.ceil(0);
var maxHeight=Math.floor(700);
var min=Math.ceil(0);
var max=Math.ceil(1200);
var x=Math.random()*(maxHeight-minHeight)+minHeight;
var y=Math.random()*(max-min)+min;
setProp({ 


position: 'absolute',
top:`${x}px`,
left: `${y}px`,
textAlign: 'center',
transition:'1s ease'});
console.log("hello");


    }
    return <div className={styles.right}>
<div className={styles.yesno} >
    <h1>Yes</h1>
    <div onClick={cant} style={prop}>
<h1>No</h1>

    </div>
</div>
    </div>
}
export default YesNoDiv;