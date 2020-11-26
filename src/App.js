import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Project from "./components/Project"
import projectData from './projectData';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Portfolio from "./pages/Portfolio/Portfolio";
import AboutMe from "./pages/AboutMe/AboutMe"

function App() {
  // {projectData.map(props => {
  //   return <img key={props.id} src={props.img} alt="can't show image" />;
  // })}
    const projectObj = projectData.map(project => <Project key={project.id} item={project} src={project.img}/>)
  return (
    <Router>
    <div className="App">
      <Header />
      <Route exact path ="/" component={AboutMe}/>
      <Route exact path ="/about" component={AboutMe}/>
      <Route exact path="/portfolio" component={Portfolio} />
      <Footer />
    </div>
    </Router>
  )
}

export default App;
