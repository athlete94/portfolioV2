import React from 'react';
import s from './SkillBar.module.css'

const SkillBar = () => {
    return (
        <div className={s.skills_bar}>
            <div className={s.bar_item}>
                <h3>React/Redux</h3>
                <div className={s.bar_container}>
                    <div className={`${s.bar_skill} ${s.react}`}>75%</div>
                </div>
            </div>

            <div className={s.bar_item}>
                <h3>Javascript/Typescript</h3>
                <div className={s.bar_container}>
                    <div className={`${s.bar_skill} ${s.js}`}>70%</div>
                </div>
            </div>

            <div className={s.bar_item}>
                <h3>HTML</h3>
                <div className={s.bar_container}>
                    <div className={`${s.bar_skill} ${s.html}`}>85%</div>
                </div>
            </div>

            <div className={s.bar_item}>
                <h3>CSS</h3>
                <div className={s.bar_container}>
                    <div className={`${s.bar_skill} ${s.css}`}>80%</div>
                </div>
            </div>

            <div className={s.bar_item}>
                <h3>Rest API</h3>
                <div className={s.bar_container}>
                    <div className={`${s.bar_skill} ${s.rest}`}>70%</div>
                </div>
            </div>

            <div className={s.bar_item}>
                <h3>Git</h3>
                <div className={s.bar_container}>
                    <div className={`${s.bar_skill} ${s.git}`}>65%</div>
                </div>
            </div>
        </div>
    );
};

export default SkillBar;