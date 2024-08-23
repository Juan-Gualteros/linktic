import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './views/layouts/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isLoginPage = false;
  isRegisterPage = false;

  constructor(private router: Router) {}
  title = 'Linktik-prueba';

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = this.router.url.includes('/login');
        this.isRegisterPage = this.router.url.includes('/register');
      }
    });
  }
}
