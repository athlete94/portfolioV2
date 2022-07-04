import React from 'react';
import s from './Projects.module.css'
import todolist from "../assets/image/todolist.png";
import social_network from "../assets/image/social_network.png";

const Projects = () => {


    return (
        <div className={s.projects}>
            <div className={s.title}>
                <h1>Projects</h1>
                <p>Some of my spare time projects.</p>
            </div>

            <div className={s.project_item}>
                <div className={s.img_item}>
                    <a href="https://athlete94.github.io/it-incubator-todolist-ts-01/">
                        <div className={s.project_img} style={{backgroundImage: `url(${todolist})`}}> </div>
                    </a>
                </div>
                <div className={s.description}>
                    <h2>
                        <a href="https://athlete94.github.io/it-incubator-todolist-ts-01/">Todolist</a>
                    </h2>
                    <p>A to do app.</p>

                    <div className={s.btn}>
                        <a href="https://athlete94.github.io/it-incubator-todolist-ts-01/">View site</a>
                    </div>
                </div>
            </div>

            <div className={s.project_item}>
                <div className={s.img_item}>
                    <a href="https://athlete94.github.io/TheWayOfSamuraiTS/">
                        <div className={s.project_img} style={{backgroundImage: `url(${social_network})`}}> </div>
                    </a>
                </div>
                <div className={s.description}>
                    <h2>
                        <a href="https://athlete94.github.io/TheWayOfSamuraiTS/">Social Network</a>
                    </h2>
                    <p>A social network for developers.</p>

                    <div className={s.btn}>
                        <a href="https://athlete94.github.io/TheWayOfSamuraiTS/">View site</a>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Projects;