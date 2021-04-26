export interface ProductInterface {
    id: number,
    name: string,
    price: string,
    category_id: number,
    category_name: string,
    created_at?: string,
    updated_at?: string,
    groups: Array<number>
}
