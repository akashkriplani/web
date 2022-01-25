import { User } from "./models/User";

const user = new User({ name: "John", age: 36 });

user.set({name: "Jack"});
console.log(user.get('name'));
console.log(user.get('age'));
