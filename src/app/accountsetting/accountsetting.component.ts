import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

export interface PeriodicElement {
  name: string;
 
  weight: string;
  symbol: string;
  plan:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {plan: "plan", name: 'free', weight:"", symbol: 'Update Plan'},
  {plan: "profile", name: '5 inculde social profiles', weight: "Free with plan", symbol: 'Manage Profiles'},
  {plan: "payment", name: 'Monthly Payments', weight: "", symbol: 'Update billing'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-accountsetting',
  templateUrl: './accountsetting.component.html',
  styleUrls: ['./accountsetting.component.css']
})
export class AccountsettingComponent {

  displayedColumns: string[] = ['plan', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;



  fontStyleControl = new FormControl();
  fontStyle?: string;
  visible = true;

  
    // profile(){
    //   this.visible = !this.visible;
    // }
    // billing(){
    //   this.visible = !this.visible;
    // }
    // security(){
    //   this.visible = !this.visible;
    // }
  
 
    


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
 

  
  constructor() { }

  

}
