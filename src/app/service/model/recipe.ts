import {Ingredient} from './ingredient';

export class Recipe {
    id: string;
    name: string;
    instructions: string;
    rating: string;
    timeInMinutes: string;
    ingredients: Ingredient[];
}