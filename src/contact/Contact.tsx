import React from 'react';
import s from './Contact.module.css'
import st from '../common/styles/style.module.css'
// @ts-ignore
import Fade from 'react-reveal/Fade';

export const Contact = () => {
    return (
        <div className={s.contact}>
            <h2>Contact Me</h2>

            <Fade bottom>
                <form className={s.form} action="">
                    <div className={s.formItem}>
                        <label htmlFor="name">Name</label>
                        <input className={s.input} name='name' type="text"/>
                    </div>
                    <div className={s.formItem}>
                        <label htmlFor="email">Email</label>
                        <input className={s.input} name='email' type="text"/>
                    </div>

                    <div className={s.formItem}>
                        <label htmlFor="message">Message</label>
                        <textarea className={s.input} name='message'/>
                    </div>

                    <div className={st.btn}>
                        <a href='#'>Send</a>
                    </div>
                </form>
            </Fade>
        </div>
    );
};
