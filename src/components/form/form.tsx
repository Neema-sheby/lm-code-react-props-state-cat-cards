import React, { useReducer } from "react";
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

interface State {
  animal: string;
  name: string;
  species: string;
  favFoods: Array<string>;
  birthYear: number;
}

const initialState: State = {
  animal: "",
  name: "",
  species: "",
  favFoods: [],
  birthYear: 0,
};

type Action =
  | { type: "animal"; payload: string }
  | { type: "name"; payload: string }
  | { type: "species"; payload: string }
  | { type: "favFoods"; payload: Array<string> }
  | { type: "birthYear"; payload: number };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "animal":
      return { ...state, animal: action.payload };
    case "name":
      return { ...state, name: action.payload };
    case "species":
      return { ...state, species: action.payload };
    case "favFoods":
      return { ...state, favFoods: action.payload };
    case "birthYear":
      return { ...state, birthYear: action.payload };
    default:
      return state;
  }
};

const Form: React.FC<formProp> = ({ setData, setAnimalName }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { animal, name, species, favFoods, birthYear } = state;

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data: AnimalDetail = {
      name: name,
      species: species,
      favFoods: favFoods,
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
    dispatch({ type: "animal", payload: "" });
    dispatch({ type: "name", payload: "" });
    dispatch({ type: "species", payload: "" });
    dispatch({ type: "favFoods", payload: [] });
    dispatch({ type: "birthYear", payload: 0 });
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <SelectField
        value={animal}
        onChange={(e) =>
          dispatch({ type: "animal", payload: e.target.value.toLowerCase() })
        }
      />

      <InputField
        name="name"
        value={name}
        onChange={(e) => dispatch({ type: "name", payload: e.target.value })}
      />
      <InputField
        name="species"
        value={species}
        onChange={(e) => dispatch({ type: "species", payload: e.target.value })}
      />
      <InputField
        name="favourite foods"
        value={favFoods.join(",")}
        onChange={(e) => {
          const favFoodArray = e.target.value.split(",");
          dispatch({ type: "favFoods", payload: favFoodArray });
        }}
      />
      <InputField
        name="birthYear"
        value={birthYear === 0 ? "" : birthYear.toString()}
        onChange={(e) =>
          dispatch({ type: "birthYear", payload: +e.target.value })
        }
      />
      <Button className="btn__submit">Add</Button>
    </form>
  );
};

export default Form;
