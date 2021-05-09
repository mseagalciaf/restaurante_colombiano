import { HttpHeaders } from "@angular/common/http";

export class ConfigService {

  // Connection Variables 
  public static URL:string="http://mike.com/api_restaurante/public/api/";
  public static headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  // LocalStorage Variables
  public static tokenName : string = "accessToken";
  public static currentUserName : string = "currentUser";
  public static productsName : string = "cartProducts";

  // Encryption Variables
  public static keyAES : string = "1234567890123456";
  
}
