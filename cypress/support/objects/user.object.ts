export class UserObject {
    username: string;
    password: string;

    constructor(user: Partial<UserObject>){
        Object.assign(this, user);
    }
}