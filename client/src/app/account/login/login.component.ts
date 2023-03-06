import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
//export class LoginComponent implements OnInit {

  //constructor() { }

  //ngOnInit(): void {
  //}

//}

export class LoginComponent {
  //Create a login form
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })
  returnUrl: string;
  
  constructor(private accountService: AccountService, private router: Router, 
    private activatedRoute: ActivatedRoute) {
      this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/shop'
  }

  onSubmit() {
    //console.log(this.loginForm);
    this.accountService.login(this.loginForm.value).subscribe({
      next: () => this.router.navigateByUrl(this.returnUrl)
    })
  }
}
