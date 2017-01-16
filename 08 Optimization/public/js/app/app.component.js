import { Component } from '@angular/core';
//Dependency injection in providers creates only one instance
//in this component and all children component 
export var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-app',
                    templateUrl: './app.component.html'
                },] },
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = [];
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map