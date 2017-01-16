import { Component } from "@angular/core";
export var MessagesComponent = (function () {
    function MessagesComponent() {
    }
    MessagesComponent.decorators = [
        { type: Component, args: [{
                    selector: "app-messages",
                    template: "\n        <div class=\"row\">\n            <app-message-input></app-message-input>\n        </div>\n        <hr />\n        <div class=\"row\">\n            <app-message-list></app-message-list>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    MessagesComponent.ctorParameters = [];
    return MessagesComponent;
}());
//# sourceMappingURL=messages.components.js.map