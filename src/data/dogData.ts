import { AnimalDetail, AnimalImage } from "./interface";
import dog1 from "../assets/images/dogImages/doofus.jpeg";
import dog2 from "../assets/images/dogImages/floofus.jpeg";
import dog3 from "../assets/images/dogImages/goofus.jpeg";

export const dogData: Array<AnimalDetail> = [
  {
    name: "Floofus",
    species: "Puppy",
    favFoods: ["marshmallows"],
    birthYear: 2020,
  },
  {
    name: "Doofus",
    species: "Doggo",
    favFoods: ["porridge, dog food"],
    birthYear: 2010,
  },
  {
    name: "Goofus",
    species: "Dog",
    favFoods: ["bouncy balls"],
    birthYear: 2015,
  },
];

export const dogImages: Array<AnimalImage> = [
  {
    image: dog1,
    altText: "Floofus",
  },
  {
    image: dog2,
    altText: "Doofus",
  },
  {
    image: dog3,
    altText: "Goofus",
  },
];
