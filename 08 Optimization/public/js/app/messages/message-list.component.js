import { Component } from "@angular/core";
import { MessageService } from "./message.service";
export var MessageListComponent = (function () {
    function MessageListComponent(messageService) {
        this.messageService = messageService;
    }
    MessageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this creates a pointer reference to 
        //memory of message service message array 
        this.messageService.getMessage()
            .subscribe(function (messages) { _this.messages = messages; });
    };
    MessageListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-message-list',
                    template: "\n        <div class=\"col-md-8 col-md-offset-2\">\n            <app-message    [message]=\"message\"\n                            *ngFor=\"let message of messages\">\n            </app-message>         \n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    MessageListComponent.ctorParameters = [
        { type: MessageService, },
    ];
    return MessageListComponent;
}());
//# sourceMappingURL=message-list.component.js.map