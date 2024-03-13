import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  showPassword = false

  constructor(
    private router: Router
  ) { }

  /**
   * create to function rediect to vehicle-management-form
   */
  login() {
    this.router.navigate(['/vehicle-management/list'])
  }

}
