import React from "react";
import style from './myStyles.module.css'

function Nav() {
    return(
        <div>
            <ul className={style.ul}>
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact Us</li>
            </ul>
        </div>
    )
}

export default Nav