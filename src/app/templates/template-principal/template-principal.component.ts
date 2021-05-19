import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config/config.service';
import { SucursalService } from 'src/app/services/sucursal.service';

@Component({
  selector: 'app-template-principal',
  templateUrl: './template-principal.component.html',
  styleUrls: ['./template-principal.component.css']
})
export class TemplatePrincipalComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
    
  }

}
