import {
    Card,
    CardBody,
    CardHeader
  } from "reactstrap";
import MyVideo from "./YouTube";

export default function Video(){
    return(
        <Card className = "card my-2 border-black bg-romantic">
            <CardHeader className = "h6 text-black text-center bg-brandy-rose">Portfolio Video</CardHeader>
            <CardBody className = "romantic d-flex justify-content-center align-items-center" style={{ minHeight: "300px" }}>
                <MyVideo />
            </CardBody>
        </Card>
    )
}