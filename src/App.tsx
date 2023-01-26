import { useEffect, useReducer } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import Heading from "./components/heading";
import Card from "./components/card";
import Form from "./components/form/form";
import { catData, catImages } from "./data/catData";
import { dogData, dogImages } from "./data/dogData";
import { AnimalDetail } from "./data/interface";
import { v4 as uuidv4 } from "uuid";

interface State {
  data: Array<AnimalDetail>;
  animal: string;
  cats: Array<AnimalDetail>;
  dogs: Array<AnimalDetail>;
}

const initialState: State = {
  data: [],
  animal: "",
  cats: catData,
  dogs: dogData,
};

type Action =
  | { type: "data"; payload: Array<AnimalDetail> }
  | { type: "animal"; payload: string }
  | { type: "cats"; payload: Array<AnimalDetail> }
  | { type: "dogs"; payload: Array<AnimalDetail> };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "data":
      return { ...state, data: action.payload };
    case "animal":
      return { ...state, animal: action.payload };
    case "cats":
      return { ...state, cats: action.payload };
    case "dogs":
      return { ...state, dogs: action.payload };
    default:
      throw new Error();
  }
};

function App(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, animal, cats, dogs } = state;

  useEffect(
    function () {
      if (animal === "cat") dispatch({ type: "cats", payload: data });
      if (animal === "dog") dispatch({ type: "dogs", payload: data });
    },
    [animal, data]
  );

  return (
    <>
      <Navbar />
      <Form
        setData={(data) => dispatch({ type: "data", payload: data })}
        setAnimalName={(data) => dispatch({ type: "animal", payload: data })}
      />
      <Header numCat={cats.length} numDog={dogs.length} />
      <main>
        <Heading heading="Cats" />
        <div className="cards__wrapper">
          {cats.map((cat, index) => {
            return (
              <Card
                key={uuidv4()}
                name={cat.name}
                species={cat.species}
                favFoods={cat.favFoods}
                birthYear={cat.birthYear}
                index={index}
                images={catImages}
              />
            );
          })}
          <Heading heading="Dogs" />
          <div className="cards__wrapper">
            {dogs.map((dog, index) => {
              return (
                <Card
                  key={uuidv4()}
                  name={dog.name}
                  species={dog.species}
                  favFoods={dog.favFoods}
                  birthYear={dog.birthYear}
                  index={index}
                  images={dogImages}
                />
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
