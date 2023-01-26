import { AnimalImage } from "../data/interface";

const ImageComponent: React.FC<AnimalImage> = ({
  image,
  altText,
  licenceType,
  licenceUrl,
  attributionName,
  attributionUrl,
}) => {
  return (
    <>
      <img src={image} alt={altText} className="card__image" />
      {licenceType && licenceUrl && attributionName && attributionUrl && (
        <p className="card__text__small">
          Image licenced under <a href={licenceUrl}>{licenceType}</a>
          {attributionName && (
            <>
              &nbsp;by <a href={attributionUrl}>{attributionName}</a>
            </>
          )}
        </p>
      )}
    </>
  );
};

export default ImageComponent;
