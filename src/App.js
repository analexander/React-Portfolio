import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Project from "./components/Project"
import projectData from './projectData';
import "./App.css";

function App() {
    const projectObj = projectData.map(project => <Project key={project.id} item={project}/>)
  return (
    <div className="App">
      <Header />
      <Project project={projectObj[0].props.item}/>
      <Project project={projectObj[1].props.item}/>
      <Project project={projectObj[2].props.item}/>
      <Project project={projectObj[3].props.item}/>
      <Project project={projectObj[4].props.item}/>
      <Project project={projectObj[5].props.item}/>
      <Footer />
    </div>
  )
}

export default App;
