export interface UserInterface {
    id: number,
    name: string,
    email: string,
    sucursale_id: number,
    sucursale_name: string,
    created_at?: string,
    updated_at?: string,
    roles: Array<string> 
}
