import React from 'react';
import {
    CardDeck, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Row, Col
} from 'reactstrap';

const Project = props => {
        return (
            <div>
                    <CardBody>
                        <CardTitle tag="h5">{props.title}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{props.subtitle}</CardSubtitle>
                    </CardBody>
                    <img width="100%" src={props.img} alt="project screenshot" />
                    <CardBody>
                        <CardText>{props.description}</CardText>
                        <CardLink href={props.github}>GitHub repo</CardLink>
                        <CardLink href={props.deploy}>Deployed Application</CardLink>
                    </CardBody>
            </div>
        );
    }

export default Project;