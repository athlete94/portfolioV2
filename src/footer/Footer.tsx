import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
    return (
        <div className={s.footer}>
        <p>© 2022 Aza.</p>
        <p>
            Built with
            <a href="#"> React.</a>
        </p>
        </div>
    );
};

export default Footer;