import 'rxjs/Rx';
import { Observable, Observer } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Message } from "./message.model";

//inject http service to this class
@Injectable()
export class MessageService {
    private messages: Message[] = [];

    //inject http service
	constructor(private http : Http) {
	}

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
        return this.messages;
    }

    deleteMessage(message: Message){
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}