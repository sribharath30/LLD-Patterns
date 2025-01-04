export class User {
    private id: string;
    private name: string;
    private email: string;
    private balances: Map<string, number>;
    
    constructor(id: string, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.balances = new Map();
    }

    getId(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getEmail(): string {
        return this.email;
    }

    getBalances(): Map<string, number> {
        return this.balances;
    }
}