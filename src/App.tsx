import { useState, useEffect } from "react";
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

function App(): JSX.Element {
  // JavaScript/TypeScript code can be inserted here!
  const [data, setData] = useState<Array<AnimalDetail>>([]);
  const [animal, setAnimal] = useState<string>("");
  const [cats, setCats] = useState<Array<AnimalDetail>>(catData);
  const [dogs, setDogs] = useState<Array<AnimalDetail>>(dogData);

  useEffect(
    function () {
      if (animal === "cat") setCats(data);
      if (animal === "dog") setDogs(data);
    },
    [animal, data]
  );

  return (
    <>
      <Navbar />
      <Form setData={setData} setAnimalName={setAnimal} />
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
