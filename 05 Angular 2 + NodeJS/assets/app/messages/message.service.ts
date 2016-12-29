import 'rxjs/Rx';
import { Observable, Observer } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Message } from "./message.model";

//inject http service to this class
//  When dealing with real data 
//  always call http first -> map data -> catch error
@Injectable()
export class MessageService {
    private messages: Message[] = [];

    //inject http service
	constructor(private http : Http) {}

    addMessage(message: Message) {
        this.messages.push(message);
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        //this line only setup observable, not send request
        //need to subscribe the component        
        return this.http.post('http://localhost:3000/message', body, { headers: headers })
                    .map((response: Response) => response.json())
                    .catch((error: Response) => Observable.throw(error.json())); 
    }

    getMessage(){
        //let ... of ... syntax is foreach loop in typescript
        return this.http.get('http://localhost:3000/message')
            .map((response: Response) => {
                const messages = response.json().obj;
                let transformedMessages: Message[] = [];
                for (let message of messages){
                    transformedMessages.push(new Message(message.content, 'Dummy', message.id, null));
                }
                this.messages = transformedMessages;    //for later on access
                return transformedMessages;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    deleteMessage(message: Message){
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}