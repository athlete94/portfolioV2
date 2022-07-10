import React, {useEffect} from 'react';
import './App.css';
import {Navbar} from "./nav/Navbar";
import {HashRouter, Route, Routes} from "react-router-dom";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import {Contact} from "./contact/Contact";
import {Main} from "./main/Main";
import Footer from "./footer/Footer";

function App() {

    useEffect(() => {
        alert('Portfolio in progress')
    },[])

  return (
      <HashRouter>
          <div className="App">
              <div>
                  <Navbar />
              </div>
              <Routes>
                  <Route path={'/'} element={<Main/>}/>
                  <Route path={'/projects'} element={<Projects/>}/>
                  <Route path={'/skills'} element={<Skills/>}/>
                  <Route path={'/contact'} element={<Contact />}/>
              </Routes>
              <div>
                  <Footer/>
              </div>
          </div>
      </HashRouter>

  );
}

export default App;
