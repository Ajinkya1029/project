import React, { useEffect, useState } from "react";
import styles from "../css/navbar.module.css";
import goalPost from "../resources/goalpost.png";
import footballer from "../resources/footballer.png";
import football from "../resources/football.png";

function NavBar(){

 const [isClicked,setIsClicked]=useState(false);
 const [animation,setAnimateClass]=useState('');
 


    function goalClicked(position){
        if(position==='left'){
            setIsClicked(true);
            setTimeout(()=>{
                setIsClicked(false);
                        },3000);
        setAnimateClass(`${styles.leftgoal}`);
        }else if(position==='right'){
            setIsClicked(true);
            setTimeout(()=>{
                setIsClicked(false);
            },3000);
            setAnimateClass(`${styles.rightgoal}`);
        }
    }
      
    return <div className={styles.navbar}>
<img src={goalPost} className={styles.goalpost}onClick={()=>goalClicked('centre')}></img>
        <div className={styles.lowernav}>
        <img src={goalPost} className={styles.goalpost}onClick={()=>goalClicked('left')}></img>
        <img src={goalPost} className={styles.goalpost}onClick={()=>goalClicked('right')}></img>
        </div>
        <div className={styles.footernav}>
        <img src={football} className={isClicked?`${animation}`:''}  ></img>
<img src={footballer}></img>
    </div>
</div>
}
export default NavBar;


