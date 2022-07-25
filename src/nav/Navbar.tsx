import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import photo from '../assets/image/icons/logo2.png'

export const Navbar = () => {

    return (
        <div className={s.navbar}>
            <div className={s.navbar_img}>
                <NavLink to={'/'} >
                    <div style={{backgroundImage: `url(${photo})`}} className={s.photo}> </div>
                </NavLink>
            </div>

            <div className={s.navbar_section}>
                <div className={s.logo}>
                    <NavLink to={'/'}>Aza Dev</NavLink>
                </div>
                <nav className={s.menu}>
                    <NavLink to={'/projects'} className={({ isActive }) => isActive  ? s.active : s.menu_item}>PROJECTS</NavLink>
                    <NavLink to={'/skills'} className={({ isActive }) => isActive  ? s.active : s.menu_item }>SKILLS</NavLink>
                    <NavLink to={'/contact'} className={({ isActive }) => isActive  ? s.active : s.menu_item}>CONTACT</NavLink>
                </nav>
            </div>
        </div>
    );
};
