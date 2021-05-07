import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModifierInterface } from 'src/app/interfaces/modifier-interface';
import { ModifierService } from '../../services/modifier.service';
import { AddModifierModalComponent } from '../add-modifier-modal/add-modifier-modal.component';

@Component({
  selector: 'app-modifiers',
  templateUrl: './modifiers.component.html',
  styleUrls: ['./modifiers.component.css']
})
export class ModifiersComponent implements OnInit {

  isLoading : boolean = false;
  modifiers : ModifierInterface[];

  constructor(
    private modifierService : ModifierService,
    private ngbModal : NgbModal
  ) { }

  ngOnInit(): void {
    this.getAllModifiers();
  }

  getAllModifiers(){
    this.modifierService.getAllModifiers().subscribe(
      resp => {
        this.modifiers = resp.data
      },
      error => console.log(error)      
    )
  }

  addModifier(){
    const ref = this.ngbModal.open(AddModifierModalComponent);
    ref.componentInstance.isEdit=false;
    ref.closed.subscribe(
      resp => {
        this.getAllModifiers();
      }
    )
  }

  editModifier(id:number){
    const ref = this.ngbModal.open(AddModifierModalComponent);
    ref.componentInstance.isEdit=true;
    ref.componentInstance.modifier_id=id;
    ref.closed.subscribe(
      resp => {
        this.getAllModifiers();
      }
    )
  }

  deleteModifier(id:number){
    this.modifierService.deleteModifier(id).subscribe(
      resp => {
        this.getAllModifiers()
      },
      error => console.log(error)      
    )
  }

}
