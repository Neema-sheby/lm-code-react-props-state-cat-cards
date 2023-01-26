// import CatImage from "./cat_image";
import ImageComponent from "./imageComponent";
import { AnimalImage } from "../data/interface";

interface CatCardProps {
  name: string;
  species: string;
  favFoods: Array<string>;
  birthYear: number;
  index: number;
  images: Array<AnimalImage>;
}

const Card: React.FC<CatCardProps> = ({
  name,
  species,
  favFoods,
  birthYear,
  index,
  images,
}) => {
  return (
    <div className="card">
      <h3 className="card__text card__header">{name}</h3>
      {index < images.length && (
        <ImageComponent
          image={images[index].image}
          altText={images[index].altText}
          licenceType={images[index].licenceType}
          licenceUrl={images[index].licenceUrl}
          attributionName={images[index].attributionName}
          attributionUrl={images[index].attributionUrl}
        />
      )}

      <p className="card__text">Species: {species}</p>
      <p className="card__text">Favourite Food(s): {favFoods.join(", ")}</p>
      <p className="card__text">Birth Year: {birthYear}</p>
    </div>
  );
};

export default Card;
