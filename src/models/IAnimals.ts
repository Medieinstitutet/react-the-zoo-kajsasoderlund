

export interface IAnimal {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  isFed: boolean;
  lastFed: string; 
}
export interface IAnimalExt extends IAnimal {
  yearOfBirth: string;
  longDescription: string;
  medicine: string;
}