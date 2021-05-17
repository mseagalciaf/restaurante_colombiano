import { HttpHeaders } from "@angular/common/http";
import { SucursalInterface } from "../interfaces/sucursal-interface";

export class ConfigService {

  // Connection Variables 
  public static URL:string="http://mike.com/api_restaurante/public/api/";
  public static URL_IMAGES="http://mike.com/api_restaurante/public/";
  public static headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  // Variables globales
  public static selectedSucursale:number;

  // LocalStorage Variables
  public static tokenName : string = "accessToken";
  public static currentUserName : string = "currentUser";
  public static productsName : string = "cartProducts";

  // Encryption Variables
  public static keyAES : string = "1234567890123456";
  
}
