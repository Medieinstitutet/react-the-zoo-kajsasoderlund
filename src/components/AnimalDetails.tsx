import { IAnimalExt } from "../models/IAnimals";
import '../css/animalDetails.css'; 

interface IAnimalDetailProps {
  animal: IAnimalExt;
  onFeed: () => void;
}

export const AnimalDetails = ({ animal, onFeed }: IAnimalDetailProps) => {
  return (
    <section className="container">
      <h1>{animal.name}</h1>
      <img src={animal.imageUrl} alt={animal.name} />
      <p>{animal.longDescription}</p>
      <div>{animal.medicine}</div>
      <div>{animal.yearOfBirth}</div>
      <div>{animal.description}</div>
      <div>
        {animal.isFed ? `Last fed at: ${animal.lastFed}` : "Not fed yet"}
      </div>
      <button onClick={onFeed} disabled={animal.isFed}>
        Mata djuret
      </button>
    </section>
  );
};
