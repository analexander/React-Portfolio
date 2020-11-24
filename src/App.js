import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Project from "./components/Project"
import projectData from './projectData';
import "./App.css";

function App() {
    const projectObj = projectData.map(projects => <Project key={projects.id} item={projects}/>)
  return (
    <div className="App">
      <Header />
      <Project projects={projectObj}/>
      <Footer />
    </div>
  )
}

export default App;
