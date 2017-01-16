import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout.component';
import { SignupComponent } from './signup.component';
import { SigninComponent } from './signin.component';
import { authRouting } from './auth.routing';
export var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        SigninComponent,
                        SignupComponent,
                        LogoutComponent,
                    ],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        authRouting //import since app.module reference to this 
                    ]
                },] },
    ];
    /** @nocollapse */
    AuthModule.ctorParameters = [];
    return AuthModule;
}());
//# sourceMappingURL=auth.module.js.map