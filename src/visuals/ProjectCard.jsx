import React, { useState } from "react";
import {
    Card,
    Collapse,
    CardSubtitle,
    CardBody,
    CardHeader,
    CardFooter,
    Row,
    Col,
    Progress
  } from "reactstrap";

export default function ProjectCard(props){

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const info = props.info;

    return(
        <Card className = "my-2 me-2 card border-black bg-romantic">
            <CardHeader onClick = { toggle } className = "h6 text-black text-center bg-brandy-rose">
                <img src = { props.img } alt = { props.alt }/>
                { props.title }
            </CardHeader>
            <Collapse isOpen = { isOpen }>
                <CardBody color = "romantic">
                    <CardSubtitle className = "project-subtitle text-dark-boi text-center">{ props.subtitle }</CardSubtitle>
                    <Row className = "align-items-center"> 
                        <Col md = "6" className = "d-flex justify-content-center">
                        </Col>
                        <Col md = "6" className = "d-flex justify-content-center">
                            <ul>
                                {info.map((item)=>(
                                    <li className = "project-text text-dark-boi">{ item }</li>
                                ))

                                }
                            </ul>
                        </Col>
                    </Row>
                    <a href={props.link} target="_blank" rel="noopener noreferrer" className="button a">{ props.button }</a>
            </CardBody>
            <CardFooter className = "bg-brandy-rose">
                <h6 className = "h6 text-dark-boi">Progress:</h6>
                <Progress value = { props.progress } color = "salt-box" className = "progress-bar bg-romantic"/>
            </CardFooter>
            </Collapse>
        </Card>
    )
}
