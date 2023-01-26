import React, { useState } from "react";
import InputField from "./inputField";
import SelectField from "./selectField";
import Button from "../button/button";
import { AnimalDetail } from "../../data/interface";
import { catData } from "../../data/catData";
import { dogData } from "../../data/dogData";

interface formProp {
  setData(T: Array<AnimalDetail>): void;
  setAnimalName(T: string): void;
}

const Form: React.FC<formProp> = ({ setData, setAnimalName }) => {
  const [animal, setAnimal] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [species, setSpecies] = useState<string>("");
  const [favFood, setFavFood] = useState<Array<string>>([]);
  const [birthYear, setBirthYear] = useState<number>(0);

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data: AnimalDetail = {
      name: name,
      species: species,
      favFoods: favFood,
      birthYear: birthYear,
    };
    setAnimalName(animal);
    if (animal === "cat") {
      setData([...catData, data]);
      console.log(data);
    }
    if (animal === "dog") {
      setData([...dogData, data]);
      console.log(data);
    }
    setAnimal("");
    setName("");
    setSpecies("");
    setFavFood([]);
    setBirthYear(0);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <SelectField
        value={animal}
        onChange={(e) => setAnimal(e.target.value.toLowerCase())}
      />

      <InputField
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputField
        name="species"
        value={species}
        onChange={(e) => setSpecies(e.target.value)}
      />
      <InputField
        name="favourite foods"
        value={favFood.join(",")}
        onChange={(e) => {
          const favFoodArray = e.target.value.split(",");
          setFavFood(favFoodArray);
        }}
      />
      <InputField
        name="birthYear"
        value={birthYear === 0 ? "" : birthYear.toString()}
        onChange={(e) => setBirthYear(+e.target.value)}
      />
      <Button className="btn__submit">Add</Button>
    </form>
  );
};

export default Form;
