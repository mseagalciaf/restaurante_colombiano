import { ModifierInterface } from "src/app/interfaces/modifier-interface";

export interface ProductCartInterface {
    id:number,
    modifiers: ModifierInterface[],
    quantity: number,
    total:  string
}
