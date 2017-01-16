import { Routes, RouterModule }         from "@angular/router";

import { MessagesComponent }            from "./messages/messages.components";
import { AuthenticationComponent }      from "./auth/authentication.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/messages', pathMatch: 'full' }, //only react to this path if this is full path
    { path: 'messages', component: MessagesComponent },
    { path: 'auth', component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule' } //tell angular 2 to lazy load this
]

//register route in angular route module
export const routing = RouterModule.forRoot(APP_ROUTES);