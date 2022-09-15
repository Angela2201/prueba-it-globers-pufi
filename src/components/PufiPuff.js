import React from "react";
import styles from './PufiPuff.module.css';

function PufiPuff() {
    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <img src="https://i.imgur.com/RDOxQ7E.png" alt="onePuff"></img>
                <h3>Pufi PUFF</h3>
                <h4>Descripción del producto. Este es un texto simulado</h4>
                <button> > VER MÁS </button>
            </div>
            <div className={styles.imagePuff}>
                <button>SHOP</button>
            </div>
        </div>
    );
}

export { PufiPuff };