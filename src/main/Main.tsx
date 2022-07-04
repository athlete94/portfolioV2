import React from 'react';
import s from './Main.module.css'

export const Main = () => {
    return (
        <div className={s.main}>
            <div className={s.main_box}>
                <h1>👋 Hi, i am Azamat.</h1>
                <p>
                    I'm a frontend developer from Saint Petersburg, Russia.
                    Currently freelancing.
                    In my spare time I solve CodeWars and create my own projects.
                    My preferred tools are Typescript, React.js and Redux.
                </p>
                <p>
                    I'm on <a href="https://github.com/athlete94">GitHub</a>,
                    <a href="https://linkedin.com">LinkedIn</a>
                    and <a href="https://instagram.com/khamraev_94">Instagram</a>.
                </p>
            </div>
        </div>
    );
};

