import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  formError;
  constructor(
    private authService: AuthService,
    private router: Router,
    private usersService: UserService
  ) {}

  ngOnInit() {}

  onSubmit(userData) {
    this.authService
      .signUp(userData.value.email, userData.value.password)
      .then((result) => {
        console.log(result.user.uid);
        this.usersService.addNewUser(result.user.uid, userData.value.name);
        this.router.navigate(['/']);
      })
      .catch((err) => {
        this.formError = err;
      });
  }
}
