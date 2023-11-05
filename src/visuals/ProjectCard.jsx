import {
    Card,
    CardTitle,
    CardSubtitle,
    CardBody,
    CardText
  } from "reactstrap";
import Button from "./Button";

export default function ProjectCard(props){
    return(
        <Card color = "salt-box" className = "border-salt-box">
            <CardBody>
                <CardTitle className = "h3 text-wax-flower text-center">{ props.title }</CardTitle>
                <CardSubtitle className = "p text-romantic text-center">{ props.subtitle }</CardSubtitle>
                <img src = { props.img } className = "img-fluid rounded float-start" alt = "cat-like fren says hi"/>
                <CardText className = "p text-romantic"></CardText>
                <Button>{ props.button }</Button>
            </CardBody>
        </Card>
    )
}
