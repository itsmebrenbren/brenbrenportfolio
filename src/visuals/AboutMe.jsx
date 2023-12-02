import {
    Card,
    CardBody,
    CardText,
    CardHeader
  } from "reactstrap";
import Pic from '../Images/PortfolioPic1.jpg';

export default function AboutMe(){
    return(
        <Card className = "card my-2 border-black bg-romantic">
            <CardHeader className = "h6 text-black text-center bg-brandy-rose">About Me</CardHeader>
            <CardBody>
                <img src = { Pic } className = "my-img img-fluid rounded float-start" alt = "a women smiling"></img>
                <CardText className = "p text-dark-boi">
                Embarking on an exhilarating journey into the world of technology, I am a passionate and dedicated software engineer, 
                driven by an insatiable thirst for innovation. My foray into this captivating realm took flight when I joined MIT's prestigious 
                XPRO coding bootcamp, setting the stage for a thrilling adventure in the ever-evolving tech landscape.
                <br/>
                At present, I find myself at Intergrid, a dynamic company nestled in the scenic landscapes of 
                New Hampshire. Here, I am entrusted with the role of a full-stack developer, where my mission is to craft seamless user experiences 
                through a cutting-edge React application that monitors wind data.
                <br/>
                I am also enthusiastically delving into the realm of electrical engineering, where I create meticulously crafted 
                test scripts that play a pivotal role in the certification of inverters, a critical component of modern wind turbine technology.
                <br/>
                In essence, my journey through technology is a thrilling odyssey of pushing boundaries, driving innovation, and crafting solutions that 
                shape the future of sustainable energy. Join me on this exciting ride!
                </CardText>
            </CardBody>
        </Card>
    )
}