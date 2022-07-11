import React from 'react';
import s from './Skills.module.css'

const Skills = () => {
    return (
        <div>
            <h2>My skills</h2>
            <div className={s.skills}>
                <div className={s.skills_description}>
                    <div className={s.skills_direction_item}>qwe</div>
                    <div className={s.skills_direction_item}>qwe</div>
                    <div className={s.skills_direction_item}>qwe</div>
                </div>

                <div className={s.skills_block}>
                    <div className={s.skills_item}><div className={s.text}>HTML</div></div>
                    <div className={s.skills_item}><div className={s.text}>CSS</div></div>
                    <div className={s.skills_item}><div className={s.text}>Javascript</div></div>
                    <div className={s.skills_item}><div className={s.text}>Typescript</div></div>
                    <div className={s.skills_item}><div className={s.text}>React</div></div>
                    <div className={s.skills_item}><div className={s.text}>Redux</div></div>
                </div>
            </div>
        </div>
    );
};

export default Skills;