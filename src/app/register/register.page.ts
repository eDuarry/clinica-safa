import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Form, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(6), Validators.required]],
    confirmPassword: ['', [Validators.minLength(6), Validators.required]],
  });

  showError = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

  register() {
    if (this.form.valid) {
      const { email, password, confirmPassword } = this.form.getRawValue();
      console.log(email, password);
      this.showError = false;
    } else {
      this.form.markAsTouched();
      this.showError = true;
    }
  }

}
