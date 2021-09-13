import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  

  // show = true;
  // thenBlock: TemplateRef<any> | null = null;
 
  // elseblock: any;
  // primaryblock: any;
  
  // @ViewChild('primaryBlock', { static: true }) primaryBlock: TemplateRef<any> | null = null;
  // @ViewChild('secondaryBlock', { static: true }) secondaryBlock: TemplateRef<any> | null = null;
  // @ViewChild('elseBlock', { static: true }) elseBlock: TemplateRef<any> | null = null;
  
  // switchPrimary() {
  //   this.thenBlock = this.thenBlock === this.primaryBlock ? this.elseBlock : this.primaryBlock;
  // }

  constructor(public router: Router) { }

   ngOnInit(): void {
    // this.primaryblock = this.elseblock;
  }

  // login() {
  //      this.router.navigate(["signin"]);
  //   }

  //   forget(){
  //     this.router.navigate(["forgetpassword"]);
  //   }
}
