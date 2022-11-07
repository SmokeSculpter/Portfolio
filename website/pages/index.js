import styles from '../styles/Home.module.css'
import react from 'react'
import Button from '../comps/Button'
import { useState } from "react";
import {FaRegEnvelope, FaCode, FaUser, FaArrowAltCircleUp} from 'react-icons/fa'


export default function Home() {
  const [ball1, setBall1] = useState(true);
  const [ball2, setBall2] = useState(false);
  const [btnClass, setBtnClass] = useState(true);

  function handleClick1(){
    setBall1(ball1 => true);
    setBall2(ball2 => false);
    console.log(ball1, ball2)
  }
  function handleClick2(){
    setBall1(ball1 => false);
    setBall2(ball2 => true);
  }
  function handleClick3(){
    setBall1(ball1 => false);
    setBall2(ball2 => false);
  }
  function toggleMenu(){
    setBtnClass(btnClass => !btnClass);
    console.log("hello")
  }

  let btnToggle = btnClass ? styles.menubtn : styles.menubtnactive;
  let btnToggle2 = btnClass ? styles.menucontentactive : styles.menucontent;

  let menu = <img src="https://img.icons8.com/ios-glyphs/30/null/menu-rounded.png"/>
  let close = <img src="https://img.icons8.com/ios/50/null/cancel.png"/>

  return (
    <div className={(ball1) ? styles.container1 : ((ball2) ? styles.container2 : styles.container3)}>
      <title>Portfolio</title>
      <div className={(btnClass) ? styles.static : styles.move}>
        <div style={(ball2) ? {color: 'white'} : {color: 'black'}} className={styles.header}>
          <h1><span>&lt;</span>cole seguin<span>&gt;</span></h1>
          <h1><span>&lt;</span>web<span>&gt;</span></h1>
          <h1><span>&lt;</span>devloper<span>&gt;</span></h1>
        </div>
        <div className={styles.balltest}></div>
        <div className={(ball1) ? styles.info1 : ((ball2) ? styles.info2 : styles.info3)}>
          <button onClick={handleClick1} className={styles.btn1}><span style={(ball2) ? {color: 'white'} : {color: 'black'}}><FaRegEnvelope size='3em'/></span></button>
          <button onClick={handleClick2} style={(ball2) ? {color: 'white'} : {color: 'black'}} className={styles.btn2}><span style={(ball2) ? {color: 'white'} : {color: 'black'}}><FaCode size='3em'/></span></button>
          <button onClick={handleClick3} className={styles.btn3}><span style={(ball2) ? {color: 'white'} : {color: 'black'}}><FaUser size='3em'/></span></button>
          <div className={(ball1) ? styles.tabs1 : ((ball2) ? styles.tabs2 : styles.tabs3)}></div>
          <div className={(ball1) ? styles.ball1 : ((ball2) ? styles.ball2 : styles.ball3)}></div>
          <div className={(ball1) ? styles.ball1shade : ((ball2) ? styles.ball2shade : styles.ball3shade)}></div>
        </div>
      </div>
      <div className={styles.menucontainer}>
            <button style={(ball2) ? {color: 'white'} : {color: 'black'}} className={btnToggle} onClick={toggleMenu}>
                <span><FaArrowAltCircleUp size="3em"/></span>
            </button>
            <div className={btnToggle2}>
                <div className={styles.project1}>
                    Project 1
                </div>
                <div className={styles.project2}>
                    Project 2
                </div>
                <div className={styles.project3}>
                    Project 3
                </div>
            </div>
        </div>
    </div>
  )
}
