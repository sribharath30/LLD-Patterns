class SingleTon {
    static instance: SingleTon;

    private constructor() {
    }

    public static getInstance(){
        if(!this.instance){
            this.instance = new SingleTon();
        }
        return this.instance;
    }
}

// const instance = new SingleTon(); does not work since it is private;

const s1 = SingleTon.getInstance();
const s2 = SingleTon.getInstance();

console.log(s1 == s2)