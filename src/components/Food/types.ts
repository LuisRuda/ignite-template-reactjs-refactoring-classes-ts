export interface IFood {
    id: number;
    name: string;
    description: string
    price: number;
    available: boolean;
    image: string;
}


export interface IFoodProps {
  food: IFood;
  handleEditFood: (food: IFood) => void;
  handleDelete: (id: number) => void;
}