import { ProductInterface } from "src/app/interfaces/product-interface";

export interface SaleInterface {
    user_id : number,
    shipping_address : string,
    phone : string,
    total: string,
    observation : string,
    sucursale_id : number,
    products: number[]
}
