export class User{
    //question ? means parameter is optional
    constructor(public email: string,
                public password: string,
                public firstName?: string,
                public lastName?: string)   {}
}