import React from 'react';
import s from './Skills.module.css'
// @ts-ignore
import Fade from 'react-reveal/Fade';
import html from "../assets/image/icons/html.png";
import js from "../assets/image/icons/js.png";
import react from "../assets/image/icons/react.png";
import api from "../assets/image/icons/api.png";
import npm from "../assets/image/icons/npm.png";
import other from "../assets/image/icons/other.png";
import SkillBar from "./SkillBar/SkillBar";
import {Skill} from "./Skill/Skill";


const Skills = () => {

    let htmlIcon = {
        backgroundImage: `url(${html})`
    }
    let jsIcon = {
        backgroundImage: `url(${js})`
    }
    let reactIcon = {
        backgroundImage: `url(${react})`
    }
    let npmIcon = {
        backgroundImage: `url(${npm})`
    }
    let restApiIcon = {
        backgroundImage: `url(${api})`
    }
    let otherIcon = {
        backgroundImage: `url(${other})`
    }

    let skillsHtml = ['HTML5', 'CSS3', 'Flex/Grid', 'CSS Modules', 'SCSS']
    let skillsOther = ['Git', 'Jest/Unit tests', 'Migrating to Typescript', 'Storybook']
    let skillsNPM = ['React-router-dom', 'React-redux', 'Redux-thunk', 'Formik', 'MUI', 'Axios']
    let skillsRestApi = ['Axios', 'Fetch', 'Postman', 'Promises', 'Async/await']
    let skillsReact = ['React', 'Redux', 'Redux Toolkit', 'npm/yarn']
    let skillsJS = ['Javascript', 'Typescript', 'Functional Programming', 'React Hooks']

    return (
        <div>
            <h2>My skills</h2>
            <div className={s.skills}>
                <Fade bottom>
                    <div className={s.description_block}>
                        <Skill style={reactIcon} skills={skillsReact} title={'React'}/>
                        <Skill style={jsIcon} skills={skillsJS} title={'Javascript'}/>
                        <Skill style={htmlIcon} skills={skillsHtml} title={'HTML/CSS'}/>
                        <Skill style={restApiIcon} skills={skillsRestApi} title={'Rest-API'}/>
                        <Skill style={npmIcon} skills={skillsNPM} title={'NPM'}/>
                        <Skill style={otherIcon} skills={skillsOther} title={'Other'}/>
                    </div>

                    <SkillBar/>
                </Fade>
            </div>
        </div>
    );
};

export default Skills;