import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './core/services/auth.service';
import Notiflix from 'notiflix';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      // Notiflix.Notify.failure('Acceso denegado, por favor inicia sesion para continuar')
      this.router.navigate(['/login']);
      return false;
    }
  }
}
