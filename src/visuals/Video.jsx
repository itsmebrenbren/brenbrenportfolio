import {
    Card,
    CardBody,
    CardText,
    CardHeader
  } from "reactstrap";

export default function Video(){
    return(
        <Card className = "card2 border-black bg-salt-box">
            <CardHeader className = "h6 text-black text-center bg-wax-flower">YouTube Video</CardHeader>
            <CardBody color = "romantic">
                <CardText className = "p text-romantic">
                    YouTube video would go here.
                </CardText>
            </CardBody>
        </Card>
    )
}