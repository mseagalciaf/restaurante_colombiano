import { ModifierInterface } from "./modifier-interface";

export interface GroupInterface {
    id:number,
    name:string,
    modifiers: ModifierInterface[],
    created_at?:string,
    updated_at?:string
}
