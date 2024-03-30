//Constructor --> works as factory for objects.
class color{
    constructor(r,g,b){
        this.values=[r,g,b];
    }
}
const blue = new color(0,0,250)

console.log(color);
console.log(blue); 

const anotherblue = new color(0, 0, 250);
console.log(blue === anotherblue);


class user{
    constructor(username, email, password){
        this.username= username;
        this.email= email;
        this.password=password;
    }
    encryptpassword(){
        return `${this.password}~~~`;
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}
const rita= new user("Rita","rita@gmail.com","124589")
console.log(rita.encryptpassword());
console.log(rita.changeusername());

//BEHIND THE SCENE
function User(username, email, password){
    this.username= username;
    this.email= email;
    this.password=password;

}
User.prototype.encryptpassword= function(){
    return `${this.password}~~~`;
}
User.prototype.emailencrpty= function(){
    return` $$$$${this.email}$$$$`
}
const mahima= new User("Mahima","Mahima","Mahima")
console.log(mahima.encryptpassword());

console.log(mahima.emailencrpty());