import React from "react";
import styles from './Footer.module.css';

function Footer() {
    return (
        <section className={styles.container}>
            <div className={styles.logo}>
                <h1>Pufi</h1>
            </div>
            <div className={styles.products}>
                <p>PUFI RAIN</p>
                <p>PUFI PUFF</p>
                <p>PUFI CART</p>
                <p>PUFI NAP</p>
            </div>
            <div className={styles.about}>
                <p>CONTACTO</p>
                <p>AYUDA</p>
                <p>CÓMO COMPRA</p>
                <p>TÉRMINOS Y CONDICIONES</p>
            </div>
            <div className={styles.buySecurely}>
                <p>COMPRA 100% SEGURA</p>
                <img src="https://i.imgur.com/DPV981i.png" alt="security"></img>
            </div>
            <div className={styles.socialNetworks}>
                SIGUENOS EN 
                <img src="https://i.imgur.com/xit6Use.png" alt="facebook"></img>
                <img src="https://i.imgur.com/fiQ3Rgi.png" alt="twitter"></img>
                <img src="https://i.imgur.com/D2tRpGf.png" alt="instagram"></img>
            </div>
        </section>

    );
}

export { Footer };