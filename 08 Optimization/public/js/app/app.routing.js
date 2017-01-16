import { RouterModule } from "@angular/router";
import { MessagesComponent } from "./messages/messages.components";
import { AuthenticationComponent } from "./auth/authentication.component";
var APP_ROUTES = [
    { path: '', redirectTo: '/messages', pathMatch: 'full' },
    { path: 'messages', component: MessagesComponent },
    { path: 'auth', component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule' } //tell angular 2 to lazy load this
];
//register route in angular route module
export var routing = RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map