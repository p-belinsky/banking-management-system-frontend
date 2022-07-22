import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.css']
})
export class StaffDashboardComponent implements OnInit {

  selection:any=0;
  constructor() { }

  ngOnInit(): void {
  }

  selectButton(selectionid:any){
    this.selection = selectionid;
  }
}