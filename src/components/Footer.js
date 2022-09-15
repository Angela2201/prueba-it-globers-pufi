import React from "react";
import styles from './Footer.module.css';

function Footer() {
    return (
        <React.Fragment>
            <section className={styles.container}>
                <div className={styles.logo}>
                    <a href="#"><h1>Pufi</h1></a>
                </div>
                <div className={styles.products}>
                    <a href="#"><h5>PUFI RAIN</h5></a>
                    <a href="#"><h5>PUFI PUFF</h5></a>
                    <a href="#"><h5>PUFI CART</h5></a>
                    <a href="#"><h5>PUFI NAP</h5></a>
                </div>
                <div className={styles.about}>
                    <a href="#"><h5>CONTACTO</h5></a>
                    <a href="#"><h5>AYUDA</h5></a>
                    <a href="#"><h5>CÓMO COMPRA</h5></a>
                    <a href="#"><h5>TÉRMINOS Y CONDICIONES</h5></a>
                </div>
                <div className={styles.buySecurely}>
                    <a href="#"><h5>COMPRA 100% SEGURA</h5></a>
                    <a href="#"><img src="https://i.imgur.com/DPV981i.png" alt="security"></img></a>
                </div>
                <div className={styles.socialNetworks}>
                    <h5>SIGUENOS EN</h5>
                    <a href="#"><img src="https://i.imgur.com/xit6Use.png" alt="facebook"></img></a>
                    <a href="#"><img src="https://i.imgur.com/fiQ3Rgi.png" alt="twitter"></img></a>
                    <a href="#"><img src="https://i.imgur.com/D2tRpGf.png" alt="instagram"></img></a>
                </div>
            </section>
            <div className={styles.footer}>
                <footer id="footer">
                    <h5>&copy; PUFI Copyright 2017 - Todos los derechos reservados</h5>
                </footer>
                <img src="https://i.imgur.com/WXKVyBj.png" alt="brand"></img>
            </div>
        </React.Fragment> 
    );
}

export { Footer };