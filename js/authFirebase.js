const USERNAME_LENGTH = 3;
const PASSWORD_LENGTH = 3;



export default class User{
    constructor(username, password){
        if(username.length < 3){
            throw Error(`The username should be at least ${USERNAME_LENGTH} characters long1`);
        }else if(password.length < 3){
            throw Error(`The password should be at least ${PASSWORD_LENGTH} characters long`);
        }
        this.username = username;
        this.password = password;

    }


}