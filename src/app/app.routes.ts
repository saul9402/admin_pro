import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NopagefoundComponent }
];

/** Se usa forRoot() cuando son las rutas principales de la aplicacion 
y se usa forChild()  cuando son rutas dentro de rutas*/
export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
