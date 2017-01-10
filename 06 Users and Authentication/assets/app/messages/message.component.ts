import { AuthService } from '../auth/auth.service';
import { Component, Input, Output } from '@angular/core';
import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles: [`
        .author{
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config{
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]
})

export class MessageComponent {
    //@input() allows pass argument from outside, 
    // for instance:
    // <app-message    [message]="message"
    //                 *ngFor="let message of messages">
    // </app-message> 
    @Input() message: Message;    
    constructor(private messageService: MessageService,
                private authService: AuthService){}

    onEdit() {
        this.messageService.editMessage(this.message);
    }

    onDelete(){
        this.messageService.deleteMessage(this.message)
            .subscribe(
                result => console.log(result)
            );
    }

    isLoggedIn(){
        return this.authService.isLoggedIn();
    }
}