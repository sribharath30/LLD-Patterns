/** class which adhers to single responsibility principle */
class Logger{
    logs;
    constructor() {
        this.logs = [];
    }
    log(){
        console.log("print logs")
    };
    getLogs(){
        return "loggs"
    }
};
/** class which does not adhere to single responsibility principle
Here driving is not related to Logger class, Hence this voilates that*/
class Logger{
    logs;
    constructor() {
        this.logs = [];
    }
    log(){
        console.log("print logs")
    };
    getLogs(){
        return "loggs"
    }
    drive(){
        console.log("I am driving");
    }
};