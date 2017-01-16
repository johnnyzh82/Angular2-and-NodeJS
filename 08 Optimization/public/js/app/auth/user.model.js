export var User = (function () {
    //question ? means parameter is optional
    function User(email, password, firstName, lastName) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return User;
}());
//# sourceMappingURL=user.model.js.map