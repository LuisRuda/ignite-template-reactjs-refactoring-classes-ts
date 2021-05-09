import {IFood} from '../Food/types';

export interface IModalAddFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (data: Omit<IFood, 'id' | 'available'>) => void;
}