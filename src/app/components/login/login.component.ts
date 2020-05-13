import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formError;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  onSubmit(userData) {
    this.auth
      .logIn(userData.value.email, userData.value.password)
      .then((result) => {
        console.log(result.user.uid);
        this.router.navigate(['/']);
      })
      .catch((err) => {
        this.formError = err;
        console.log(err);
      });
  }
}
