import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/config/config.service';
import { ModifierInterface } from 'src/app/interfaces/modifier-interface';

@Injectable({
  providedIn: 'root'
})
export class ModifierService {

  endpoint:string="modifiers";

  constructor(
    private http : HttpClient
  ) { }

  getAllModifiers(): Observable<any>{
    return this.http.get<ModifierInterface[]>(ConfigService.URL+this.endpoint,{headers: ConfigService.headers});
  }

  getModifier(id:number): Observable<any>{
    return this.http.get<ModifierInterface>(ConfigService.URL+this.endpoint+`/${id}`,{headers:ConfigService.headers})
  }

  createModifier(dataForm:ModifierInterface) : Observable<any>{
    return this.http.post(ConfigService.URL+this.endpoint,dataForm,{headers:ConfigService.headers});
  }

  updateModifier(dataForm:ModifierInterface,id:number){
    return this.http.put(ConfigService.URL+this.endpoint+`/${id}`,dataForm, {headers:ConfigService.headers});
  }

  deleteModifier(id:number): Observable<any>{
    return this.http.delete(ConfigService.URL+this.endpoint+`/${id}`,{headers:ConfigService.headers});
  }
}
