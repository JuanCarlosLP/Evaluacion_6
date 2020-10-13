import jc from './jc.js';

const ages = [5, 8, 10, 34, 2, 56, 34];
const users = [{ name: 'Luis', age: 40 }, { name: 'Ana', age: 25 }, { name: 'Carlos', age: 20 }];

// Callback para forEach
const printAges = (element, i) => {
    console.log(`La edad ${element} esta en la posicion ${i}`);
}

// Callback para Filter
const getChildren = (age) => {
    return age < 18;
}

// Callback para Map
const agesPlus10 = (age) => {
    const age2 = age + 10;
    return age2;
}

// Callback para Find, findIndex y Contains
const get34 = (age) => {
    return age === 34;
}

// Callback para Pluck
const usersNames = (user) => {
    const userName = user.name;
    return userName;
}

// Callback para Without
const getwithout34 = (age) => {
    return age != 34;
}

jc.forEach(ages, printAges)

const children = jc.filter(ages, getChildren);
console.log(children);

const ageOlder = jc.map(ages, agesPlus10);
console.log(ageOlder);

const age34 = jc.find(ages, get34);
console.log(age34);

const age34Index = jc.findIndex(ages, get34);
console.log(age34Index);

const agesContains34 = jc.contains(ages, get34);
console.log(agesContains34);

const names = jc.pluck(users, usersNames);
console.log(names);

const without34 = jc.without(ages, getwithout34);
console.log(without34);