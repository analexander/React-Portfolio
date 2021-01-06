import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <h5 id="resumeLink">View my full resume <a href="https://drive.google.com/file/d/1jFEWYqu1Ohyal-cUhpxoFkBVwM7c4EFx/view?usp=sharing" target="_blank" rel="noopener noreferrer">here</a></h5>

        <div className="row education">

          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.education && resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                      <p>
                        {item.Achievements}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.work && resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                      <p>
                        {item.Achievements}
                      </p>
                    </div>

                  </div>

                )
              })
            }
          </div>
        </div>
        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

            <div className="icons">

              <i className="fab fa-html5 fa-sm" alt="HTML5"></i>&nbsp;
             <i className="fab fa-css3-alt fa-sm" alt="CSS3"></i>&nbsp;
             <i className="fab fa-js-square fa-sm" alt="Javascript"></i>&nbsp;
             <img src={`${process.env.PUBLIC_URL}/images/heroku-logo-stroke-black.png`} width="68" height="10" alt="Heroku" />&nbsp;
             <i className="fab fa-react fa-sm" alt="React.js"></i>&nbsp;
             <i className="fab fa-git fa-sm" alt="Git"></i>&nbsp;
             <img src={`${process.env.PUBLIC_URL}/images/expressjs.png`} width="90" height="25" alt="Express.js" />&nbsp;
             <i className="fab fa-github fa-sm" alt="GitHub"></i>&nbsp;
             <i className="fab fa-node-js fa-sm" alt="Node.js"></i>&nbsp;
             <img src={`${process.env.PUBLIC_URL}/images/mongoDBLeaf.png`} width="45" height="25" alt="MongoDB" />&nbsp;
             <img src={`${process.env.PUBLIC_URL}/images/mysql.png`} width="90" height="25" alt="mySQL" />&nbsp;
             <i class="fab fa-npm" alt="npm"></i>

   				</div>

          </div>

        </div>

      </section>
    );
  }
}