export class RandomGenerator {

    _password: string = '';

    constructor(length: number, text: boolean = false, numeric: boolean = false, symbol:boolean = false) {
        let i: number = 0;
        while (i<length) {
            if (text && i<length) {
                this._password += this.getRandomLower();
                i++;
            }
            if (numeric && i<length) {
                this._password += this.getRandomNumber();
                i++;
            }
            if (symbol && i<length) {
                this._password += this.getRandomSymbol();
                i++;
            }
        }
    }
    
    get password():string {
        return this._password;
    }

    getRandomLower(): String {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    
    getRandomNumber(): String {
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }
    
    getRandomSymbol(): String {
        const symbols = "!@#$%^&*(){}[]=<>/,.";
        return symbols[Math.floor(Math.random() * symbols.length)];
    }
}
