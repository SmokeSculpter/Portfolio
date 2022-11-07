import { useState } from "react";
import styles from "../styles/Button.module.css"

const Button = () => {
    const [btnClass, setBtnClass] = useState(true);

    function toggleMenu(){
        setBtnClass(btnClass => !btnClass);
        console.log("hello")
    }

    let btnToggle = btnClass ? styles.menubtn : styles.menubtnactive;
    let btnToggle2 = btnClass ? styles.menucontentactive : styles.menucontent;

    return (
        <div className={styles.menucontainer}>
            <button className={btnToggle} onClick={toggleMenu}>
                <span className="material-icons">{btnClass ? "menu" : "close"}</span>
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
    );
}
 
export default Button;