import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModifierInterface } from 'src/app/interfaces/modifier-interface';
import { ModifierService } from '../../services/modifier.service';

@Component({
  selector: 'app-add-modifier-modal',
  templateUrl: './add-modifier-modal.component.html',
  styleUrls: ['./add-modifier-modal.component.css']
})
export class AddModifierModalComponent implements OnInit {
  isLoading: boolean=false

  //Modifier to Edit
  isGetting: boolean=false;
  @Input() isEdit: boolean=false;
  @Input() modifier_id:number;

  checkoutModifierCreateForm = this.formBuiler.group({
    name : ['', Validators.required]
  });

  constructor(
    public activeModal : NgbActiveModal,
    private formBuiler : FormBuilder,
    private modifierService : ModifierService
  ) { }

  ngOnInit(): void {
    if (this.isEdit) {
      this.isGetting=true;
      this.getModifier(this.modifier_id);
    }
  }

  createModifier(dataForm:ModifierInterface){
    this.isLoading=true;
    this.modifierService.createModifier(dataForm).subscribe(
      resp => {
        this.isLoading=false;
        this.activeModal.close();
      },
      error => console.log(error)
    )
  }

  getModifier(id:number) {
    this.modifierService.getModifier(id).subscribe(
      resp => {
        this.isGetting=false;
        console.log(resp);
        
        this.checkoutModifierCreateForm.controls['name'].setValue(resp.data.name);
      },
      error => console.log(error)
    )
  }

  editModifier(dataForm:ModifierInterface,id = this.modifier_id){
    this.isLoading=true;
    this.modifierService.updateModifier(dataForm,id).subscribe(
      resp => {
        this.isLoading=false;
        this.activeModal.close();
      },
      error => console.log(error)      
    )
  }
}
