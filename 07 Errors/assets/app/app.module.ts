import { ErrorComponent }           from './errors/error.component';
import { AuthService }              from './auth/auth.service';
import { HttpModule }               from '@angular/http';
import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }             from "./app.component";
import { MessageComponent }         from "./messages/message.component";
import { MessageListComponent }     from "./messages/message-list.component";
import { MessageInputComponent }    from "./messages/message-input.component";
import { MessagesComponent }        from "./messages/messages.components";

import { AuthenticationComponent }  from "./auth/authentication.component";
import { SigninComponent }          from "./auth/signin.component";
import { SignupComponent }          from "./auth/signup.component";
import { LogoutComponent }          from "./auth/logout.component";

import { HeaderComponent }          from "./header.component";
import { routing }                  from "./app.routing";

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        SigninComponent,
        SignupComponent,
        LogoutComponent,
        HeaderComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule, 
        FormsModule, 
        routing, 
        ReactiveFormsModule,
        HttpModule 
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {

}