import { Routes }           from "@angular/router";

import { SignupComponent }  from "./signup.component";
import { SigninComponent }  from "./signin.component";
import { LogoutComponent }  from "./logout.component";

//append current route to main route as child route
export const AUTH_ROUTES: Routes = [
    {  path: '', redirectTo: 'signup', pathMatch: 'full' },
    {  path: 'signup', component: SignupComponent },
    {  path: 'signin', component: SigninComponent },
    {  path: 'logout', component: LogoutComponent },
]