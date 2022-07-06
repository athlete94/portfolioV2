import React from 'react';
import s from './Skills.module.css'

const Skills = () => {
    return (
        <div className={s.skills}>
            <h2>My skills</h2>

            <div className={s.skills_block}>
                <div className={s.skills_item}>HTML</div>
                <div className={s.skills_item}>CSS</div>
                <div className={s.skills_item}>Javascript</div>
                <div className={s.skills_item}>Typescript</div>
                <div className={s.skills_item}>React</div>
                <div className={s.skills_item}>Redux</div>
            </div>
        </div>
    );
};

export default Skills;