export class DishesClass {
    DishId!: number;
    Name!: string;
    UrlImg!: string;
    Price!: number;
    Mass!: number;
    //Count!: number;
    DishType!: TypesEnum;
}

export enum TypesEnum
{
    Drinks = 0,
    Desserts = 1,
    Snacks = 2,
    Salads = 3
}