import React from 'react';
import s from './Skills.module.css'
// @ts-ignore
import Fade from 'react-reveal/Fade';
import html from "../assets/image/html.png";
import js from "../assets/image/js.png";
import react from "../assets/image/react.png";
import api from "../assets/image/api.png";
import npm from "../assets/image/npm.png";
import other from "../assets/image/other.png";


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

    return (
        <div>
            <h2>My skills</h2>
            <div className={s.skills}>
                <Fade bottom>
                    <div className={s.description_block}>
                        <div className={s.skills_item}>
                            <h3>
                                <div style={htmlIcon} className={s.skill_icon}> </div>
                                HTML/CSS
                            </h3>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Flex/Grid</li>
                                <li>CSS Modules</li>
                                <li>SCSS</li>
                            </ul>
                        </div>

                        <div className={s.skills_item}>
                            <h3>
                                <div style={jsIcon} className={s.skill_icon}> </div>
                                Javascript
                            </h3>
                            <ul>
                                <li>Javascript</li>
                                <li>Typescript</li>
                                <li>Functional Programming</li>
                            </ul>
                        </div>
                        <div className={s.skills_item}>
                            <h3>
                                <div style={reactIcon} className={s.skill_icon}> </div>
                                React
                            </h3>
                            <ul>
                                <li>React</li>
                                <li>Redux</li>
                                <li>npm/yarn</li>
                                <li>Redux-Toolkit</li>
                            </ul>
                        </div>
                        <div className={s.skills_item}>
                            <h3>
                                <div style={restApiIcon} className={s.skill_icon}> </div>
                                Rest-API
                            </h3>
                            <ul>
                                <li>Axios</li>
                                <li>Fetch</li>
                                <li>Postman</li>
                                <li>Promises</li>
                                <li>Async/await</li>
                            </ul>
                        </div>
                        <div className={s.skills_item}>
                            <h3>
                                <div style={npmIcon} className={s.skill_icon}> </div>
                                NPM
                            </h3>
                            <ul>
                                <li>React-router-dom</li>
                                <li>React Hooks</li>
                                <li>Redux-thunk</li>
                                <li>Formik</li>
                                <li>MUI</li>
                                <li>Axios</li>
                            </ul>
                        </div>
                        <div className={s.skills_item}>
                            <h3>
                                <div style={otherIcon} className={s.skill_icon}> </div>
                                Other
                            </h3>
                            <ul>
                                <li>Git</li>
                                <li>Jest/Unit tests</li>
                                <li>Migrating to Typescript</li>
                                <li>Storybook</li>
                            </ul>
                        </div>
                    </div>

                    {/*bar*/}

                    <div className={s.skills_bar}>
                        <div className={s.bar_item}>
                            <h3>HTML</h3>
                            <div className={s.bar_container}>
                                <div className={`${s.bar_skill} ${s.html}` }>85%</div>
                            </div>
                        </div>

                        <div className={s.bar_item}>
                            <h3>CSS</h3>
                            <div className={s.bar_container}>
                                <div className={`${s.bar_skill} ${s.css}` }>80%</div>
                            </div>
                        </div>

                        <div className={s.bar_item}>
                            <h3>Javascript/Typescript</h3>
                            <div className={s.bar_container}>
                                <div className={`${s.bar_skill} ${s.js}`}>70%</div>
                            </div>
                        </div>

                        <div className={s.bar_item}>
                            <h3>React/Redux</h3>
                            <div className={s.bar_container}>
                                <div className={`${s.bar_skill} ${s.react}`}>70%</div>
                            </div>
                        </div>

                        <div className={s.bar_item}>
                            <h3>Git</h3>
                            <div className={s.bar_container}>
                                <div className={`${s.bar_skill} ${s.git}` }>65%</div>
                            </div>
                        </div>

                        <div className={s.bar_item}>
                            <h3>Rest API</h3>
                            <div className={s.bar_container}>
                                <div className={`${s.bar_skill} ${s.rest}` }>67%</div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Skills;