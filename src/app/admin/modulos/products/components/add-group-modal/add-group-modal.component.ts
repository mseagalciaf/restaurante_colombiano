import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GroupInterface } from 'src/app/interfaces/group-interface';
import { ModifierInterface } from 'src/app/interfaces/modifier-interface';
import { GroupService } from '../../services/group.service';
import { ModifierService } from '../../services/modifier.service';

@Component({
  selector: 'app-add-group-modal',
  templateUrl: './add-group-modal.component.html',
  styleUrls: ['./add-group-modal.component.css']
})
export class AddGroupModalComponent implements OnInit {

  @Input() isEdit:boolean;
  @Input() group_id:number;
  isGetting:boolean=false;
  modifiers: ModifierInterface[];
  isLoading:boolean=false;


  checkoutGroupCreateForm = this.formBuilder.group({
    name : ['',Validators.required],
    modifiers : ['',Validators.required]
  });

  constructor(
    public activeModal : NgbActiveModal,
    private formBuilder : FormBuilder,
    private groupService : GroupService,
    private modifierService : ModifierService
  ) {
    console.log(this.group_id);
    
  }
  
  ngOnInit(): void {
    if (this.isEdit) {
      this.isGetting=true;
      this.getGroup(this.group_id);
      this.getAllModifiers();
    }else{
      this.getAllModifiers()
    }
  }

  getAllModifiers(){
    this.modifierService.getAllModifiers().subscribe(
      resp => {
        this.modifiers = resp.data
      },
      error => console.log(error)      
    )
  }

  createGroup(dataForm:GroupInterface){
    this.isLoading=true;
    this.groupService.createGroup(dataForm).subscribe(
      resp => {
        this.isLoading=false;
        this.activeModal.close();
      },
      error => console.log(error)
    )
  }

  getGroup(id:number){
    this.groupService.getGroup(id).subscribe(
      resp => {
        this.isGetting=false;
        this.checkoutGroupCreateForm.controls['name'].setValue(resp.data.name);
      }
    )
  }

  editGroup(dataForm : GroupInterface, id:number = this.group_id){
    this.isLoading=true;
    console.log(dataForm);
    
    this.groupService.updateGroup(dataForm,id).subscribe(
      resp => {
        this.isLoading = false;
        this.activeModal.close();
      },
      error => console.log(error)
    )
  }

}
