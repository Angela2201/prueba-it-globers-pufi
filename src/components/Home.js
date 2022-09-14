import React from "react";
import styles from './Home.module.css';

function Home() {

    return (
        <section className={styles.viewHome}>
            <img className={styles.image} src="https://i.imgur.com/PeRpRaV.jpg" alt="relax"></img>
            <img className={styles.logo} src="https://i.imgur.com/aiSbzlH.png" alt="logo"></img>
            <div className={styles.options}>
                <img src="https://i.imgur.com/vhCKnNZ.png" alt="puff"></img>
                <p>HOLA</p>
                <img src="https://i.imgur.com/Lh1vfW8.png" alt="umbrella"></img>
                <p>HOLA</p>
                <img src="https://i.imgur.com/dbxNNAX.png" alt="bag"></img>
                <p>HOLA</p>
                <img src="https://i.imgur.com/piVWHTq.png" alt="cushion"></img>
                <p>HOLA</p>
            </div>
            <div className={styles.center}>
                <h1>ESTÁR CÓMODO, NUNCA FUE TAN FÁCIL.</h1>
                <button>SHOP</button>
            </div>
            <nav className={styles.navbar}>
                <div>MI CUENTA | MI COMPRA</div>
            </nav>
        </section>
    );
}

export { Home };