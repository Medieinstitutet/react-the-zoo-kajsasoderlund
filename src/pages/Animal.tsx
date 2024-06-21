
import { useParams } from "react-router-dom";
import { IAnimalExt } from "../models/IAnimals";
import { useEffect, useState } from "react";
import { AnimalDetails } from "../components/AnimalDetails";

export const Animal = () => {
  const { animalId } = useParams<{ animalId: string }>();
  const [animalInfo, setAnimalInfo] = useState<IAnimalExt[]>([]);
  const [animalIndex, setAnimalIndex] = useState<number>(-1);
  const currentTime = new Date();


  useEffect(() => {
    const localAnimals = localStorage.getItem("animals");
    if (localAnimals && animalInfo.length === 0) {
      setAnimalInfo(JSON.parse(localAnimals));
    }
  }, [animalInfo]);

  useEffect(() => {
    if (!animalId || animalInfo.length === 0) {
      return;
    }

    const index = animalInfo.findIndex((animal) => animal.id === Number(animalId));
    setAnimalIndex(index);
  }, [animalId, animalInfo]);

  const feedAnimal = () => {
    if (animalIndex !== -1) {
      const updatedAnimalInfo = [...animalInfo];
      updatedAnimalInfo[animalIndex].isFed = true;
      updatedAnimalInfo[animalIndex].lastFed = currentTime.toLocaleString();
      setAnimalInfo(updatedAnimalInfo);

      localStorage.setItem("animals", JSON.stringify(updatedAnimalInfo));
    }
  };

  if (animalIndex === -1 || animalInfo.length === 0) {
    return <div>Animal not found</div>;
  }

  return (
    <>
     
      <AnimalDetails animal={animalInfo[animalIndex]} onFeed={feedAnimal} />
    </>
  );
};
