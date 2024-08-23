import { Routes } from '@angular/router';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { ListReservationsComponent } from './views/pages/list-reservations/list-reservations.component';
import { NewReservationComponent } from './views/pages/new-reservation/new-reservation.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: "login",
    component: LoginComponent,
    },
    {
      path: "register",
      component: RegisterComponent,
    },
    {
      path: "list",
      component: ListReservationsComponent,
      canActivate: [AuthGuard]
    },
    {
      path: "new",
      component: NewReservationComponent,
      canActivate: [AuthGuard]
    },
    {
      path: "edit/:id",
      component: NewReservationComponent,
      canActivate: [AuthGuard]
    },
    {
      path: '**', redirectTo: 'login', pathMatch: 'full'
    }
];
