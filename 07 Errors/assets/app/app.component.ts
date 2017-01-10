import { Component }        from '@angular/core';

import { MessageService }   from './messages/message.service';

//Dependency injection in providers creates only one instance
//in this component and all children component 
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [ MessageService ]
})

export class AppComponent {

}