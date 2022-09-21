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
                    <a href="#"><h6><strong>PUFI RAIN</strong></h6></a>
                    <a href="#"><h6><strong>PUFI PUFF</strong></h6></a>
                    <a href="#"><h6><strong>PUFI CART</strong></h6></a>
                    <a href="#"><h6><strong>PUFI NAP</strong></h6></a>
                </div>
                <div className={styles.about}>
                    <a href="#"><h6><strong>CONTACTO</strong></h6></a>
                    <a href="#"><h6><strong>AYUDA</strong></h6></a>
                    <a href="#"><h6><strong>CÓMO COMPRA</strong></h6></a>
                    <a href="#"><h6><strong>TÉRMINOS Y CONDICIONES</strong></h6></a>
                </div>
                <div className={styles.buySecurely}>
                    <a href="#"><h6><strong>COMPRA 100% SEGURA</strong></h6></a>
                    <a href="#"><img src="https://i.imgur.com/DPV981i.png" alt="security"></img></a>
                </div>
                <div className={styles.socialNetworks}>
                    <h6><strong>SIGUENOS EN</strong></h6>
                    <a href="#"><img src="https://i.imgur.com/xit6Use.png" alt="facebook"></img></a>
                    <a href="#"><img src="https://i.imgur.com/fiQ3Rgi.png" alt="twitter"></img></a>
                    <a href="#"><img src="https://i.imgur.com/D2tRpGf.png" alt="instagram"></img></a>
                </div>
            </section>
            <div className={styles.footer}>
                <footer id="footer">
                    <h6>&copy; PUFI Copyright 2017 - Todos los derechos reservados</h6>
                </footer>
                <img src="https://i.imgur.com/WXKVyBj.png" alt="brand"></img>
            </div>
        </React.Fragment> 
    );
}

export { Footer };