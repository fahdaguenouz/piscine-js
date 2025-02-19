//const clone1=new Object(person)
//const clone2=new Object(person)
const samePerson=new Object(person)
//Object.assign(clone1,person)
//Object.assign(clone2,person)
const clone1={...person}
const clone2={...person}

//const clone1=Object.assign({},person)
//Object.freeze(clone1)
//Object.freeze(clone2)
console.log("clone1",clone1);

person.age++
person.country='FR'

console.log("person",person);
console.log("clone1",clone1);
console.log("clone2",clone2);
console.log("samePerson",samePerson);

