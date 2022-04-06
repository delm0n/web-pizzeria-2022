import { IngredientClass } from './IngredientClass' 

export class PizzaCartClass {
  PizzaId!: number;
  PizzaName!: string;
  UrlImg!: string;
  Structure!: string;
  Sizes!: {
    PizzaSizeId: number;
    NameSize : string; //имя размера
    Price: number;
    Mass: number
    };
  Ingredients!: IngredientClass[]; 
  Count!: number;

}

// export function getPrice(): number {
//     let lastPrice: number = 0;
//     return lastPrice;
//   }