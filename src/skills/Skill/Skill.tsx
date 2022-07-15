import React from 'react';
import s from "./Skill.module.css";

type SkillPropsType = {
    title: string
    skills: string[]
    style: any
}

export const Skill = ({title, skills, style}: SkillPropsType) => {
    return (
        <div className={s.skills_item}>
            <h3>
                <div style={style} className={s.skill_icon}> </div>
                {title}
            </h3>
            <ul>
                {skills.map(s => (
                        <li>{s}</li>
                    )
                )}
            </ul>
        </div>
    );
};

