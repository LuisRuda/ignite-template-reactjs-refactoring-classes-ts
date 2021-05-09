import {IFood} from '../Food/types';

export interface IModalEditFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateFood: (data: IFood) => void;
  editingFood: Omit<IFood, 'id' | 'available'>
}