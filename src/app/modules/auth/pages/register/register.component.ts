import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  userForm: any;
  isSubmitting = false;
  message = '';
  errorMessage = '';
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(24),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      type: ['user', Validators.required],
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

  get username() {
    return this.userForm.get('username');
  }

  get email() {
    return this.userForm.get('email');
  }

  get type() {
    return this.userForm.get('type');
  }

  get password() {
    return this.userForm.get('password');
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.authService.register(this.userForm.value).subscribe(
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
