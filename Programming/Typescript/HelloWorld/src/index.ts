
// Advanced Types
type Users = 
{
name: string,
age: number,
Occupation?: string;
};

type bird = {
  fly: () => void;
  };

type fish = {
    swim: () => void;
    };
type Pet = bird |fish;

let age : number = 30;
if (age < 50)
  age += 10;

  let numbers = [1,2,3,'4'];
  let user : [number, string] = [1, 'ishmael']

  class Account {
    id: number;
    owner: string;
    balance : number;

    constructor (id:number, owner:string, balance: number){
      this.id = id;
      this.owner = owner;
      this.balance = balance;    }
    
    deposit(amount:number):void{
      if (amount <= 0)
       throw new Error("Invalid Amount");
      this.balance += amount;
      }

  }
  
