import React from 'react';
import s from './Projects.module.css'
import todolist from "../assets/image/projects/todolist.png";
import social_network from "../assets/image/projects/social_network.png";
import cards from "../assets/image/projects/cards.png";
import {Project} from "./Project/Project";
// @ts-ignore
import Fade from 'react-reveal/Fade';

const Projects = () => {
    let descriptionCards = 'The app was developed by the team with react/redux.' +
        'You create cards with questions and answers to them. Questions are given randomly.' +
        'Used formik to login and register.' +
        'There is also a password recovery option.'
    let descriptionTodo = 'Simple to do app for your tasks.' +
        'Using redux as state management. ' +
        'Libraries used: redux, react-redux, axios, redux-thunk, mui.'

    let descriptionNetwork = 'Social network for developers. It is educational project. ' +
        'Libraries used: react-redux, redux-thunk, react-router-dom 6, axios, formik.'


    let cardsImg = {
        backgroundImage: `url(${cards})`
    }
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

            <Fade bottom>
                <Project
                    style={cardsImg}
                    link={'https://athlete94.github.io/Cards/'}
                    title={'Learning Cards'}
                    description={descriptionCards}

                />
            </Fade>

            <div className={s.projects_block}>
                <Fade bottom>
                    <Project
                        style={todolistImg}
                        link={'https://athlete94.github.io/todolist-ts-01/'}
                        title={'Todolist'}
                        description={descriptionTodo}

                    />
                </Fade>

                <Fade bottom>
                    <Project
                        style={socialNetworkImg}
                        link={'https://athlete94.github.io/TheWayOfSamuraiTS/'}
                        title={'Social network'}
                        text={'In progress...'}
                        description={descriptionNetwork}
                    />
                </Fade>
            </div>

        </div>
    );
};

export default Projects;