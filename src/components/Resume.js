import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

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

              <i class="fab fa-html5 fa-sm" alt="html5"></i>&nbsp;
             <i class="fab fa-css3-alt fa-sm" alt="css3"></i>&nbsp;
             <i class="fab fa-js-square fa-sm" alt="javascript"></i>&nbsp;
             <i class="fab fa-react fa-sm" alt="reactjs"></i>&nbsp;
             <i class="fab fa-git fa-sm" alt="git"></i>&nbsp;
             <img src={`${process.env.PUBLIC_URL}/images/expressjs.png`} width="90" height="25" alt="express" />&nbsp;
             <i class="fab fa-github fa-sm" alt="github"></i>&nbsp;
             <i class="fab fa-node-js fa-sm" alt="nodejs"></i>&nbsp;
             <img src={`${process.env.PUBLIC_URL}/images/mongoDBLeaf.png`} width="45" height="25" alt="mongoDB" />&nbsp;
             <img src={`${process.env.PUBLIC_URL}/images/mysql.png`} width="90" height="25" alt="mySQL" />&nbsp;

   				</div>

          </div>

        </div>

      </section>
    );
  }
}