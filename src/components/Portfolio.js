import React, { Component } from 'react';
export default class Porfolio extends Component {
  imageClick = () => {
    console.log('Click!!!!');
  } 
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <hr />
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Projects</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item" key={item.name}>
                  <div className="item-wrap">
                      <img src={`${item.imgurl}`} className="item-img" alt="project screenshot" onClick={this.imageClick} />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                  </div>
                  <a href={item.github} target="_blank" rel="noopener noreferrer">GitHub</a> {'|'} &nbsp;
                  <a href={item.deploy} target="_blank" rel="noopener noreferrer">Deployed Application</a>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}