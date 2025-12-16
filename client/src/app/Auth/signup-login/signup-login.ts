import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthServices } from '../../Services/auth-services';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarService } from '../../Services/snack-bar-service';

@Component({
  selector: 'app-signup-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup-login.html',
  styleUrls: ['./signup-login.css'],
})
export class SignupLogin {
  isLoginMode = true;
  loginForm: FormGroup;
  signupForm: FormGroup;


  roles = [
    { id: 1, name: 'Customer' }
  ];

  constructor(private fb: FormBuilder, private authService: AuthServices, private matSnackBar: MatSnackBar, private snackBarService: SnackBarService) {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });


    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      userName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phoneNumber: ['', [Validators.pattern('^[0-9]{10}$')]],
      role: [3, Validators.required]
    });
  }


  toggleMode(isLogin: boolean) {
    this.isLoginMode = isLogin;
  }


  onLogin() {
    if (this.loginForm.valid) {
      console.log('Login Payload:', this.loginForm.value);

      this.authService.loginUser(this.loginForm.value)

      this.snackBarService.handleSnackBar('Login successfull','success',3000)

    } else {
      this.loginForm.markAllAsTouched();
    }
  }


  onSignup() {
    if (this.signupForm.valid) {

      const signupPayload = {
        ...this.signupForm.value,
        loginFlag: 1,
        isDeleted: false
      };

      this.authService.registerUser(signupPayload);
      // this.snackBarService.handleSnackBar('Signup ! successfull')
      console.log('Signup Payload (C# Model Ready):', signupPayload);

    } else {
      this.signupForm.markAllAsTouched();
    }
  }
}