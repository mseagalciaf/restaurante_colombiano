import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GroupInterface } from 'src/app/interfaces/group-interface';
import { GroupService } from '../../services/group.service';
import { AddGroupModalComponent } from '../add-group-modal/add-group-modal.component';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  isLoading:boolean;
  groups:GroupInterface[];

  constructor(
    private groupService: GroupService,
    private ngbModal : NgbModal
  ) { }

  ngOnInit(): void {
    this.isLoading=true;
    this.getAllGroups();
  }

  getAllGroups(){
    this.groupService.getAllGroups().subscribe(
      resp => {
        this.isLoading=false;
        this.groups = resp.data
      },
      error => console.log(error)
    )
  }

  addGroup(){
    const ref = this.ngbModal.open(AddGroupModalComponent);
    ref.componentInstance.isEdit=false;
    ref.closed.subscribe(
      resp => {
        this.getAllGroups()
      }
    );
  }

  editGroup(id:number){
    const ref = this.ngbModal.open(AddGroupModalComponent);
    ref.componentInstance.isEdit=true;
    ref.componentInstance.group_id=id;
    ref.closed.subscribe(
      resp => {
        this.getAllGroups();
      }
    )
  }

  deleteGroup(id:number){
    this.groupService.deleteGroup(id).subscribe(
      resp => {
        this.getAllGroups();
      }
    )
  }

}
