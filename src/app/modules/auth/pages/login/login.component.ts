import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userForm: any;
  isSubmitting = false;
  message = '';
  errorMessage = '';
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(24),
        ],
      ],
    });
  }

  get email() {
    return this.userForm.get('email');
  }
  get password() {
    return this.userForm.get('password');
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.authService.login(this.userForm.value).subscribe(
        (res: any) => {
          this.message = res.message;
          this.errorMessage = '';
        },
        (error) => {
          this.errorMessage = error.error.error;
          this.message = '';
        }
      );
    }
  }
}
