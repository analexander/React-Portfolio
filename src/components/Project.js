import React from 'react';
import {
    CardDeck, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';

const Project = props => {
        return (
            <Row>
                <Col>
                    <CardBody>
                        <CardTitle tag="h5">{props.project.title}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{props.project.subtitle}</CardSubtitle>
                    </CardBody>
                    <img width="100%" src={props.project.img} alt="project image" />
                    <CardBody>
                        <CardText>{props.project.description}</CardText>
                        <CardLink href={props.project.github}>GitHub repo</CardLink>
                        <CardLink href={props.project.deploy}>Deployed Application</CardLink>
                    </CardBody>
                </Col>
            </Row>
        );
    }

export default Project;