import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Form, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(6), Validators.required]],
  });

  showError = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

  login() {
    if (this.form.valid) {
      const { email, password } = this.form.getRawValue();
      console.log(email, password);
      this.showError = false;
    } else {
      this.form.markAsTouched();
      this.showError = true;
    }
  }

}