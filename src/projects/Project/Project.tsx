import React from 'react';
import s from "./Project.module.css";
import st from '../../common/styles/style.module.css'



type ProjectPropsType = {
    style: any
    link: string
    title: string
    description: string
    text?: string
}

export const Project = ({style, link, title, description, text}: ProjectPropsType) => {
    return (
        <div className={s.project_item}>
            <div className={s.img_item}>
                <a href={link}>
                    <div className={s.project_img} style={style}> </div>
                </a>
            </div>
            <div className={s.description}>
                <h2>
                    <a href={link}>{title}</a>
                </h2>
                <p>{text}</p>
                <p>{description}</p>

                <div className={st.btn}>
                    <a href={link}>View site</a>
                </div>
            </div>
        </div>
    );
};
