import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  key : string = ConfigService.keyAES;
  
  constructor() { 
  }

  encrypt(data:string, key:string=this.key): string{
    let encryptedData:string = CryptoJS.AES.encrypt(data,key);
    return encryptedData;
  }

  decrypt(data:string , key:string=this.key): string{
    let decryptedData = CryptoJS.AES.decrypt(data,key);
    return decryptedData;
  }
}
