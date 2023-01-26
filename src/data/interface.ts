export interface AnimalDetail {
  name: string;
  species: string;
  favFoods: Array<string>;
  birthYear: number;
}

export interface AnimalImage {
  image: string;
  altText: string;
  licenceType?: string;
  licenceUrl?: string;
  attributionName?: string;
  attributionUrl?: string;
}
