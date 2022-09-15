let username = null;
let isLoggedIn = false;

class LoginManager {


    static setUsername(usernameParam){
        username = usernameParam;
    }
    static getUsername() {
        return username;
    }

    static getLoginStatus(){
        return isLoggedIn;
    }

    static login(){
        isLoggedIn = true;
    }

    static logout(){
        isLoggedIn = false;
    }
}


module.exports.LoginManager = LoginManager;