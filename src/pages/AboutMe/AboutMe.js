import React from 'react'
import Headshot from '../../Images/headshot-angel.jpg'
import { Card, CardBody, Button, CardTitle, CardText, CardImg, Col } from 'reactstrap';
import Image from 'react-bootstrap/Image'
import './AboutMe.css'

function AboutMe() {
  return (
    <Col xs={8} md={5}>
      <Card id="card">
        <Image src={Headshot} roundedCircle fluid/>
        <CardBody>
          <CardTitle tag="h5">About Me</CardTitle>
          <CardText>I am a web developer with a passion for assembling scalable applications and working across the full stack.</CardText>
          <CardText>
            <small className="text-muted">I also love to draw, paint, and walk my cat!</small>
          </CardText>
        </CardBody>
      </Card>
    </Col>
    )
}

export default AboutMe