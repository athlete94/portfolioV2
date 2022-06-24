import React from 'react';
import s from './Header.module.css'
import {Navbar} from "./nav/Navbar";
import {NavLink} from "react-router-dom";

export const Header = () => {
  return (
      <div className={s.header}>
        <div className={s.header_section}>
            <NavLink to={'/main'} className={s.photo}>
                <img src={photo}/>
            </NavLink>
        </div>
        <div className={s.header_section}>
            <Navbar />
        </div>
      </div>
  );
};
