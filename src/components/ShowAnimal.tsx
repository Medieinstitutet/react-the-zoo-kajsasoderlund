import { useNavigate } from "react-router-dom";
import { IAnimal } from "../models/IAnimals";
import '../css/showAnimal.css'

interface IShowAnimalProps {
  animal: IAnimal;
}

export const ShowAnimal = ({ animal }: IShowAnimalProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/animal/" + animal.id);
  };

  return (
    <div className="animalCard">
      <h3>{animal.name}</h3>
      <div className="imgContainer">
        <img src={animal.imageUrl} alt={animal.name} />
      </div>
      <button onClick={handleClick}>Read more</button>
    </div>
  );
};
