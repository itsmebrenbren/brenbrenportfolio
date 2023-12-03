import Dog from "../Images/DogaDooCG_Piixel.png";
import Cocktail from "../Images/CocktailBS.png";
import Oven from "../Images/BrenBakesOven.png";
import Pacmen from "../Images/pacman.png";
import Mapper from "../Images/mapper.png";
import Eyes from "../Images/eye-exercise.png";
import PacPic from "../Images/pacpic.jpeg";
import EyePic from "../Images/eyepic.png";
import MapPic from "../Images/mappic.jpeg";
import DogPic from "../Images/Dogcard.webp";
import BBakes from "../Images/Bbakes.webp";
import CocktailPic from "../Images/cocktailpic.webp";

// Initialize objects
let dogCard = {};
let pacman = {};
let eye = {};
let bus = {};
let cocktail = {};
let bakes = {};

export const Project = [
    pacman = {
        title: "Pacman Exercise",
        subtitle: "an exercise manipulating the DOM",
        img: Pacmen,
        alt: "pacman",
        img2: PacPic,
        alt2: "pacmen floating around",
        info: ["generate pacmen", "watch them float around the screen", "make them go faster"],
        link: "https://github.com/itsmebrenbren/pacmen-exercise",
        progress: 100,
        button: "Check it out"
    },
    eye = {
        title: "Eye Exercise",
        subtitle: "Eyes that follow you around",
        img: Eyes,
        alt: "eye",
        img2: EyePic,
        alt2: "eyes",
        info: ["eyes follow your cursor", "created using css styling and JavaScript"],
        link: "https://github.com/itsmebrenbren/eye-exercise",
        progress: 100,
        button: "Check it out"
    },
    bus = {
        title: "Migration Mapper (Real Time Bus Exercise)",
        subtitle: "Watch an albatross migrate",
        img: Mapper,
        alt: "bus",
        img2: MapPic,
        alt2: "pic of a map",
        info: ["follows an actual albatross migrating near South America", "makes use of Movebank and MapBox API"],
        link: "https://github.com/itsmebrenbren/migration-mapper/tree/master",
        progress: 100,
        button: "Check it out"
    },
    bakes = {
        title: "Brenbren Bakes",
        subtitle: "a baking website showing my recipes",
        img : Oven,
        alt: "little oven cooking bread",
        img2: BBakes,
        alt2: "little baking homepage",
        info: ["basic react application using tailwind", "provides recipes I have created/discovered", "cute pixel drawings of my bakes"],
        progress: 25,
        button: "not available yet"
    },
    cocktail = {
        title: "Cocktail Brainstorm",
        subtitle: "tell us how you are feeling and we will suggest a cocktail",
        img: Cocktail,
        alt: "a brain in a cocktail glass",
        img2: CocktailPic,
        alt2: "cocktail with a brain in a hipster atmosphere",
        info: ["application uses NextJs, TypeScript, and Tailwind", "uses both cocktail and ChatGPT API"],
        progress: 15,
        button: "not available yet"
    },
    dogCard = {
        title: "dog-a-doo card games",
        subtitle: "Play dog-themed card games",
        img: Dog,
        alt: "playing card",
        img2: DogPic,
        alt2: "dog playing card",
        info: ["react app", "multiple play-able card games", "handdrawn dog-themed cards", "designed and written 100% by moi"],
        progress: 50,
        button: "not available yet"
    },
];