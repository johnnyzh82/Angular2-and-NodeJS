import { RouterModule } from '@angular/router';
import { SignupComponent } from "./signup.component";
import { SigninComponent } from "./signin.component";
import { LogoutComponent } from "./logout.component";
//append current route to main route as child route
var AUTH_ROUTES = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'logout', component: LogoutComponent },
];
//lazy load all component
export var authRouting = RouterModule.forChild(AUTH_ROUTES);
//# sourceMappingURL=auth.routing.js.map