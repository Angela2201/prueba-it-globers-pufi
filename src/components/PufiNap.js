import React from "react";
import styles from './PufiNap.module.css';

function PufiNap() {
    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <img src="https://i.imgur.com/mKTHlpm.png" alt="oneNap"></img>
                <h3>Pufi NAP</h3>
                <h4>Descripción del producto. Este es un texto simulado</h4>
                <button> VER MÁS </button>
            </div>
            <div className={styles.imageNap}>
                <img src="https://i.imgur.com/AwnlvGf.jpg" alt="nap"></img>
                <button>SHOP</button>
            </div>
        </div>
    );
}

export { PufiNap };