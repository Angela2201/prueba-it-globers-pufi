import React from "react";
import styles from './PufiRain.module.css';

function PufiRain() {
    return (
        <div className={styles.container}>
            <div className={styles.imageUmbrella}>
                <img src="https://i.imgur.com/kKWd2sF.jpg" alt="umbrellas"></img>
                <button>SHOP</button>
            </div>
            <div className={styles.description}>
                <img src="https://i.imgur.com/LKH7Ief.png" alt="oneUmbrella"></img>
                <h3>Pufi RAIN</h3>
                <h4>Descripción del producto. Este es un texto simulado</h4>
                <button> VER MÁS </button>
            </div>
            
        </div>
        
    );
}

export { PufiRain };