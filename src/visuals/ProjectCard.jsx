import {
    Card,
    CardSubtitle,
    CardBody,
    CardText,
    CardHeader
  } from "reactstrap";
import Button from "./Button";

export default function ProjectCard(props){
    return(
        <Card className = "card border-black bg-romantic">
            <CardHeader className = "h6 text-black text-center bg-brandy-rose">{ props.title }</CardHeader>
            <CardBody color = "romantic">
                <CardSubtitle className = "p text-dark-boi text-center">{ props.subtitle }</CardSubtitle>
                <img src = { props.img } className = "img-fluid rounded float-start" alt = { props.alt }/>
                <Button>{ props.button }</Button>
                <Button>ReadMe</Button>
            </CardBody>
        </Card>
    )
}
