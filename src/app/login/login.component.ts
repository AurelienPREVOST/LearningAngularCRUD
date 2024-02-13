import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  message: string = 'Vous êtes actuellement déconnécté ("AURELIEN" / "PREVOST")'
  name: string;
  password: string;
  auth: AuthService 

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.auth = this.authService// Comme on utilise aussi le service coté template
  }

  setMessage() {
    if(this.auth.isLoggedIn) {
      this.message = "Connécté!"
    } else {
      this.message = "Identifiant ou mot de passe incorrect "
    }

  }

  login() {
    this.message = "Tentative de connexion..."
    this.auth.login(this.name, this.password)
      .subscribe((isLoggedIn: boolean) => {
        this.setMessage()
        if(isLoggedIn) {
          this.router.navigate(['/pokemons'])
        } else {
          this.router.navigate(['/login'])
        }
      })
  }


  logout() {
    this.auth.logout();
    this.message = "Deconnecté"
  }
}
