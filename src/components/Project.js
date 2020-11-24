import React from 'react';
import {
    CardDeck, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';

const Project = (props) => {
    console.log(props.projects[0].props.item)
        return (
            <Row>
                <Col>
                    <CardBody>
                        <CardTitle tag="h5">{props.projects[0].props.item.title}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{props.projects[0].props.item.subtitle}</CardSubtitle>
                    </CardBody>
                    <img width="100%" src={props.projects[0].props.item.img} alt="project image" />
                    <CardBody>
                        <CardText>{props.projects[0].props.item.description}</CardText>
                        <CardLink href={props.projects[0].props.item.github}>GitHub repo</CardLink>
                        <CardLink href={props.projects[0].props.item.deploy}>Deployed Application</CardLink>
                    </CardBody>
                </Col>
            </Row>
        );
    }

export default Project;