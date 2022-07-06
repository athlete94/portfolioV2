import React from 'react';
import s from './Footer.module.css'
import instagram from '../assets/image/instagram.png'
import github from '../assets/image/github.png'
import vk from '../assets/image/vk.png'
import linkedIn from '../assets/image/linkedIn.png'

const Footer = () => {

    let instagramIcon = {
        backgroundImage: `url(${instagram})`
    }
    let githubIcon = {
        backgroundImage: `url(${github})`
    }
    let vkIcon = {
        backgroundImage: `url(${vk})`
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
                <a href="//vk.com/athlete_94">
                    <div className={s.icon} style={vkIcon}> </div>
                </a>
                <a href="https://instagram.com/khamraev_94">
                    <div className={s.icon} style={instagramIcon}> </div>
                </a>

            </div>
        </div>
    );
};

export default Footer;