
import { IAnimal } from "../models/IAnimals";
import { get } from "./serviceBase";


const url = "https://animals.azurewebsites.net/api/animals";

export const getData = async (): Promise<IAnimal[]> => {
  const animals = await get <IAnimal[]> (url)
  return animals
};




