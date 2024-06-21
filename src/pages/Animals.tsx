import { useEffect, useState } from "react";

import { IAnimal } from "../models/IAnimals";
import { ShowAnimals } from "../components/ShowAnimals"

import { getData } from "../services/animalService";


export const Animals = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);
  const [fetchDone, setFetchDone] = useState(false);

  const getAnimals = async () => {
    const animals = await getData();
    setAnimals(animals)
    setFetchDone(true)
    localStorage.setItem('animals', JSON.stringify(animals))
  }

  useEffect(() => {
    if(fetchDone) {
        return
    }
    getAnimals()
  })

  return <ShowAnimals animals={animals}></ShowAnimals>
};
