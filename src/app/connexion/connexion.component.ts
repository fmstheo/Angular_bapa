import { Component, OnInit } from '@angular/core';
import { Id } from '../modeles/id';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  connexionForm: FormGroup;
  errorMessage: string;

  identifiants: Id = { id: '', mdp: '' };
  oublie: boolean = false;
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.connexionForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit() {
    const email = this.connexionForm.get('email').value;
    const password = this.connexionForm.get('password').value;
    
    this.authService.signInUser(email, password).then(
      () => {
        this.router.navigate(['/intranet']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }
  setForgotPwd() {
    this.oublie = !this.oublie;
  }

  envoieID(f) {
    this.authService.setConnecte();
    console.log('On a soumis le formulaire avec pseudo : ', this.identifiants.id, ' et mdp :', this.identifiants.mdp);
    console.log('variable local form1 : ', f);

  }

}
