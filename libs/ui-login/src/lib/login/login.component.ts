import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '@workspace/core-data';

@Component({
  selector: 'workspace-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() isAuthenticated: boolean
  form: FormGroup;
  app_name: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => this.app_name = data.app_name)
    this.initForm();
  }

  login() {
    if (this.form.valid) {
      this.authService.login({...this.form.value, app_name: this.app_name});
    }
  }

  private initForm() {
    this.form = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    }, {updateOn: 'submit'})
  }

}
