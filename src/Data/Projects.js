import Dog from "../Images/DogaDooCG_Piixel.png";
import Cocktail from "../Images/CocktailBS.png";
import Oven from "../Images/BrenBakesOven.png";

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
        img: "#",
        alt: "pacman",
        info: ["generate pacmen", "watch them float around the screen", "make them go faster"],
        link: "https://github.com/itsmebrenbren/pacmen-exercise",
        progress: 100,
        button: "Check it out"
    },
    eye = {
        title: "Eye Exercise",
        subtitle: "Eyes that follow you around",
        img: "#",
        alt: "eye",
        info: ["eyes follow your cursor", "created using css styling and JavaScript"],
        link: "https://github.com/itsmebrenbren/eye-exercise",
        progress: 100,
        button: "Check it out"
    },
    bus = {
        title: "Migration Mapper (Real Time Bus Exercise)",
        subtitle: "Watch an albatross migrate",
        img: "#",
        alt: "bus",
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
        info: ["basic react application using tailwind", "provides recipes I have created/discovered", "cute pixel drawings of my bakes"],
        progress: 25,
        button: "not available yet"
    },
    cocktail = {
        title: "Cocktail Brainstorm",
        subtitle: "tell us how you are feeling and we will suggest a cocktail",
        img: Cocktail,
        alt: "a brain in a cocktail glass",
        info: ["application uses NextJs, TypeScript, and Tailwind", "uses both cocktail and ChatGPT API"],
        progress: 15,
        button: "not available yet"
    },
    dogCard = {
        title: "dog-a-doo card games",
        subtitle: "Play dog-themed card games",
        img: Dog,
        alt: "playing card",
        info: ["react app", "multiple play-able card games", "handdrawn dog-themed cards", "designed and written 100% by moi"],
        progress: 50,
        button: "not available yet"
    },
];