import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reinit-mdp',
  templateUrl: './reinit-mdp.component.html',
  styleUrls: ['./reinit-mdp.component.css']
})
export class ReinitMdpComponent implements OnInit {

  resetPwdForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.resetPwdForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    const email = this.resetPwdForm.get('email').value;
    
    this.authService.resetPassword(email).then(
      () => {
        this.router.navigate(['/connexion']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

}
