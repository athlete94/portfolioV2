import React from 'react';
import s from './Footer.module.css'
import telegram from '../assets/image/icons/telegram.png'
import github from '../assets/image/icons/github.png'
import codeWars from '../assets/image/icons/codewars.svg'
import linkedIn from '../assets/image/icons/linkedIn.png'

const Footer = () => {

    let telegramIcon = {
        backgroundImage: `url(${telegram})`
    }
    let githubIcon = {
        backgroundImage: `url(${github})`
    }
    let codeWarsIcon = {
        backgroundImage: `url(${codeWars})`,
        width: '40px',
        height: '40px',
        marginTop: '3px'
    }
    let linkedInIcon = {
        backgroundImage: `url(${linkedIn})`
    }

    return (
        <div className={s.footer}>
        <p>© 2022. All Rights Reserved.</p>
            <div className={s.icons}>
                <a href="https://github.com/athlete94">
                    <div className={s.icon} style={githubIcon}> </div>
                </a>
                <a href="https://www.linkedin.com/in/azamat-khamraev-8969b423b/">
                    <div className={s.icon} style={linkedInIcon}> </div>
                </a>
                <a href="https://t.me/athlete94">
                    <div className={s.icon} style={telegramIcon}> </div>
                </a>
                <a href="https://www.codewars.com/users/khamraev94">
                    <div className={s.icon} style={codeWarsIcon}> </div>
                </a>

            </div>
        </div>
    );
};

export default Footer;