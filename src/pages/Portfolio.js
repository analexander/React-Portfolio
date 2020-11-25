import React from 'react'
import Project from '../components/Project'
import projectData from '../projectData'
import Habitude from '../Images/habit1 copy.png'
import ReadmeGen from '../Images/READMEsample.png'
import WorkDay from '../Images/work-day-scheduler.png'
import NoteTaker from '../Images/note-taker.png'
import WeatherDash from '../Images/weather-dashboard.png'
import EmployeeTrack from '../Images/walkthrough copy.gif'
import {
    CardDeck, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';

function Portfolio() {
    return (
        <div>
            <h1>Projects</h1>
            <Row>
                <Col size="md-4">
                    <Project
                        title={projectData[0].title}
                        subtitle={projectData[0].subtitle}
                        img={Habitude}
                        description={projectData[0].description}
                        github={projectData[0].github}
                        deploy={projectData[0].deploy} />
                </Col>
                <Col size="md-4">
                    <Project title={projectData[1].title}
                        subtitle={projectData[1].subtitle}
                        img={ReadmeGen}
                        description={projectData[1].description}
                        github={projectData[1].github}
                        deploy={projectData[1].deploy} />
                </Col>
                <Col size="md-4">
                    <Project title={projectData[2].title}
                        subtitle={projectData[2].subtitle}
                        img={WorkDay}
                        description={projectData[2].description}
                        github={projectData[2].github}
                        deploy={projectData[0].deploy} />
                </Col>
                <Col size="md-4">
                    <Project title={projectData[3].title}
                        subtitle={projectData[3].subtitle}
                        img={NoteTaker}
                        description={projectData[3].description}
                        github={projectData[3].github}
                        deploy={projectData[3].deploy} />
                </Col>
                <Col size="md-4">
                    <Project title={projectData[4].title}
                        subtitle={projectData[4].subtitle}
                        img={WeatherDash}
                        description={projectData[4].description}
                        github={projectData[4].github}
                        deploy={projectData[4].deploy} />
                </Col>
                <Col size="md-4">
                    <Project title={projectData[5].title}
                        subtitle={projectData[5].subtitle}
                        img={EmployeeTrack}
                        description={projectData[5].description}
                        github={projectData[5].github}
                        deploy={projectData[5].deploy} />
                </Col>
            </Row>
        </div>
    )
}

export default Portfolio