import { ErrorService } from '../errors/error.service';
import 'rxjs/Rx';
import { Observable, Observer } from 'rxjs/Rx';
import { EventEmitter, Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Message } from "./message.model";

//inject http service to this class
//  When dealing with real data 
//  always call http first -> map data -> catch error
@Injectable()
export class MessageService {
    private messages: Message[] = [];
    messageIsEdit = new EventEmitter<Message>();
    //inject http service
	constructor(private http : Http, private errorService: ErrorService) {}

    addMessage(message: Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        //this line only setup observable, not send request
        //need to subscribe the component        
        return this.http.post('http://localhost:3000/message' + token, body, { headers: headers })
                    .map((response: Response) => {                        
                        const result = response.json();
                        const message = new Message(
                            result.obj.content, 
                            result.obj.user.firstName, 
                            result.obj._id, 
                            result.obj.user._id);
                        this.messages.push(message);
                        return message;
                    })
                    .catch((error: Response) => {
                        this.errorService.handleError(error.json());
                        return Observable.throw(error.json());
                    }); 
    }

    getMessage(){
        //let ... of ... syntax is foreach loop in typescript
        return this.http.get('http://localhost:3000/message')
            .map((response: Response) => {
                const messages = response.json().obj;
                let transformedMessages: Message[] = [];

                for (let message of messages){
                    console.log(message);
                    transformedMessages.push(new Message(
                        message.content, 
                        message.user.firstName, 
                        message._id, 
                        message.user._id)
                    );
                }
                this.messages = transformedMessages;    //for later on access
                return transformedMessages;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            }); 
    }

    editMessage(message: Message){
        this.messageIsEdit.emit(message);
    }

    updateMessage(message: Message){
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.patch('http://localhost:3000/message/' + message.messageId + token, body, { headers: headers })
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            }); 
    }

    deleteMessage(message: Message){
        this.messages.splice(this.messages.indexOf(message), 1);
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.delete('http://localhost:3000/message/' + message.messageId + token)
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            }); 
    }
}