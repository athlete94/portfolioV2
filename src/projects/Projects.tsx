import React from 'react';
import s from './Projects.module.css'
import todolist from "../assets/image/todolist.png";
import social_network from "../assets/image/social_network.png";
import {Project} from "./Project/Project";

const Projects = () => {
    let descriptionTodo = 'Simple to do app for your tasks.' +
        'Using redux as state management. ' +
        'Libraries used: redux, react-redux, axios, redux-thunk, mui.'

    let descriptionNetwork = 'Social network for developers. It is educational project. ' +
        'Libraries used: react-redux, redux-thunk, react-router-dom 6, axios, formik.'

    let todolistImg = {
        backgroundImage: `url(${todolist})`
    }

    let socialNetworkImg = {
        backgroundImage: `url(${social_network})`
    }

    return (
        <div className={s.projects}>
            <div className={s.title}>
                <h1>Projects</h1>
                <p>Some of my spare time projects.</p>
            </div>

            <div className={s.projects_block}>
                <Project
                    style={todolistImg}
                    link={'https://athlete94.github.io/it-incubator-todolist-ts-01/'}
                    title={'Todolist'}
                    description={descriptionTodo}

                />
                <Project
                    style={socialNetworkImg}
                    link={'https://athlete94.github.io/TheWayOfSamuraiTS/'}
                    title={'Social network'}
                    text={'In progress...'}
                    description={descriptionNetwork}
                />
            </div>

        </div>
    );
};

export default Projects;