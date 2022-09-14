import React from "react";
import styles from './PufiCart.module.css';

function PufiCart() {
    return (
        <div className={styles.container}>
            <div className={styles.imageBag}>
                <img src="https://i.imgur.com/bpKdgAv.jpg" alt="bags"></img>
                <button>SHOP</button>
            </div>
            <div className={styles.description}>
                <img src="https://i.imgur.com/y6BDaWl.png" alt="oneBag"></img>
                <h3>Pufi CART</h3>
                <h4>Descripción del producto. Este es un texto simulado</h4>
                <button> VER MÁS </button>
            </div>
            
        </div>
    );
}

export { PufiCart };