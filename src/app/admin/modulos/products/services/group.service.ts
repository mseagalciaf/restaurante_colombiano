import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/config/config.service';
import { GroupInterface } from 'src/app/interfaces/group-interface';


@Injectable({
  providedIn: 'root'
})
export class GroupService {

  endPoint:string = "groups";
  constructor(
    private http : HttpClient
  ) {
   }

  getAllGroups():Observable<any>{
    return this.http.get<GroupInterface[]>(ConfigService.URL + this.endPoint,{headers : ConfigService.headers});
  }

  getGroup(id:number): Observable<any>{
    return this.http.get<GroupInterface>(ConfigService.URL+this.endPoint+`/${id}`,{headers : ConfigService.headers});
  }

  createGroup(dataForm : GroupInterface): Observable <any>{
    return this.http.post<GroupInterface>(ConfigService.URL+this.endPoint,dataForm,{headers : ConfigService.headers});
  }

  updateGroup(dataForm:GroupInterface,id:number):Observable<any>{
    return this.http.put(ConfigService.URL+this.endPoint+`/${id}`,dataForm,{headers: ConfigService.headers});
  }

  deleteGroup(id:number):Observable<any>{
    return this.http.delete(ConfigService.URL+this.endPoint+`/${id}`,{headers: ConfigService.headers});
  }
}
