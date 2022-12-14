import React from "react";
import styles from './Espufi.module.css';
import { useForm } from '@formspree/react';

function Espufi() {

    const [state, handleSubmit] = useForm("mpznqvoq");
    if (state.succeeded) {
        return <h3>Thank you for signing up!</h3>;
    }
    
    return (
        <div className={styles.container}>
            <h5>INSTAGRAM</h5>
            <h2>#ESPUFI</h2>
            <div className={styles.collage}>
                <img src="https://i.imgur.com/HUdAvzi.png" alt="collage"></img>
            </div>
            <h5>NEWSLETTER</h5>
            <h2>SUSCRIBETE</h2>
            <h6>Y enterante de todas las novedades</h6>
            <form onSubmit={handleSubmit}>
                <fieldset className={styles.form}>
                    <input id="email" name="email" type="email" placeholder="Ingresa tu email"></input>
                    <button type="submit" disabled={state.submitting}>
                        <img src="https://i.imgur.com/xdT2poi.png" alt="icon"></img>
                    </button>
                </fieldset>
            </form>
        </div>
    );
}

export { Espufi };