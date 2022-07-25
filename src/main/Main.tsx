import React from 'react';
import s from './Main.module.css'
// @ts-ignore
import Fade from 'react-reveal/Fade'

export const Main = () => {
    return (
        <div className={s.main}>
            <Fade bottom>
                <div className={s.main_box}>
                    <h1>👋 Hi, i am Azamat.</h1>
                    <p>
                        I'm a frontend developer from Velikiy Novgorod, Russia.
                        Currently freelancing.
                        In my spare time I solve CodeWars and create my own projects.
                        My preferred tools are Typescript, React.js and Redux.
                    </p>
                    <p>
                        I'm on <a href="https://github.com/athlete94">GitHub </a>
                        and <a href="https://www.linkedin.com/in/azamat-khamraev-8969b423b/">LinkedIn.</a>
                    </p>
                </div>
            </Fade>
        </div>
    );
};

