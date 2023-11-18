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
    dogCard = {
        title: "dog-a-doo card games",
        subtitle: "Play dog-themed card games",
        img: Dog,
        alt: "playing card",
        button: "Play"
    },
    pacman = {
        title: "Pacman Exercise",
        subtitle: "an exercise manipulating the DOM",
        img: "#",
        alt: "pacmen floating around a screen",
        progress: 100,
        button: "Play"
    },
    eye = {
        title: "Eye Exercise",
        subtitle: "",
        img: "#",
        alt: "eye",
        progress: 100,
        button: "Play"
    },
    bus = {
        title: "real-time bus exercise",
        subtitle: "",
        img: "#",
        alt: "bus",
        progress: 100,
        button: "Play"
    },
    cocktail = {
        title: "Cocktail Brainstorm",
        subtitle: "tell us how you are feeling and we will suggest a cocktail",
        img: Cocktail,
        alt: "a brain in a cocktail glass",
        progress: 15,
        button: "not available yet"
    },
    bakes = {
        title: "Brenbren Bakes",
        subtitle: "a baking website showing my recipes",
        img : Oven,
        alt: "little oven cooking bread",
        progress: 25,
        button: "not available yet"
    }
];