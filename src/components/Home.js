import React from "react";
import { Carousel } from "./Carousel"
import styles from './Home.module.css';

function Home() {

    return (
        <React.Fragment>
            <div className={styles.viewHome}>
                <div className={styles.logo}>
                    <h1>Pufi</h1>
                </div>
                <div className={styles.options}>
                    <a href="#"><img src="https://i.imgur.com/vhCKnNZ.png" alt="puff"></img><p>PUFI PUFF</p></a>                 
                    <a href="#"><img src="https://i.imgur.com/Lh1vfW8.png" alt="umbrella"></img><p>PUFI RAIN</p></a>
                    <a href="#"><img src="https://i.imgur.com/8rIRBgM.png" alt="bag"></img><p>PUFI CART</p></a>
                    <a href="#"><img src="https://i.imgur.com/piVWHTq.png" alt="cushion"></img><p>PUFI NAP</p></a>   
                </div>
                <div className={styles.count}>
                    <h6>MI CUENTA ▼ | MI COMPRA</h6>
                </div>      
            </div> 
        </React.Fragment>
    );
}

export { Home };