import { HttpHeaders } from "@angular/common/http";

export class ConfigService {
  public static URL:string="http://mike.com/api_restaurante/public/api/";
  public static headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  
}
