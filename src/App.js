import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Portfolio from "./pages/Portfolio/Portfolio"
import AboutMe from "./pages/AboutMe/AboutMe"

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path={["/", "/about"]}>
            <AboutMe />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
