import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Project from "./components/Project"
import projectData from './projectData';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Portfolio from "./pages/Portfolio";

function App() {
  // {projectData.map(props => {
  //   return <img key={props.id} src={props.img} alt="can't show image" />;
  // })}
    const projectObj = projectData.map(project => <Project key={project.id} item={project} src={project.img}/>)
  return (
    <Router>
    <div className="App">
      <Header />
      {/* <Project project={projectObj[0].props.item} src={projectObj[0].props.item.img}/>
      <Project project={projectObj[1].props.item} src={projectObj[1].props.item.img}/>
      <Project project={projectObj[2].props.item} src={projectObj[2].props.item.img}/>
      <Project project={projectObj[3].props.item} src={projectObj[3].props.item.img}/>
      <Project project={projectObj[4].props.item} src={projectObj[4].props.item.img}/>
      <Project project={projectObj[5].props.item} src={projectObj[5].props.item.img}/> */}
      <Route exact path="/portfolio" component={Portfolio} />
      <Footer />
    </div>
    </Router>
  )
}

export default App;
