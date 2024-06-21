import { IAnimal } from "../models/IAnimals";
import { ShowAnimal } from "./ShowAnimal"; 

interface IShowAnimalsProps {
  animals: IAnimal[];
}


export const ShowAnimals = ({ animals }: IShowAnimalsProps) => {
    return (
      <>
        
        <main className="animalGrid">
          {animals.map((animal) => {
            return <ShowAnimal key={animal.id} animal={animal} />;
          })}
        </main>
      </>
    );
  };
