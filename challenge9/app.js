const dogs = [{
    name: 'Snickers',
    age: 2
}, {
    name: 'Hugo',
    age: 8
}];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

//regular
console.log('hello');

//interpolated
console.log('hello I am a %s string!', 'poop');

const poo = 'poop';
console.log(`hello I am ${poo}`);

//styled
console.log('%c I am some great text', 'font-size: 50px; background: red; text-shadow: 10px 10px 0 blue');

//warning
console.warn('attention');

//error
console.error('oh no something went wrong ERROR');

//info
console.info('I am only the messenger');

//testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'you did not select the right Element');

console.assert(1 === 2 , 'that is wrong');

//viewing DOM elements
console.log(p);
console.dir(p);

//clear
console.clear();

//grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`);
    console.log(`Dog's name is: ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dogs yrs old`);
    console.groupEnd(`${dog.name}`);
})

//counting
console.count('ola');
console.count('ola');
console.count('ola');
console.count('ola');
console.count('iza');
console.count('ola');
console.count('iza');
console.count('ola');
console.count('ola');
console.count('ola');
console.count('ola');
console.count('ola');
console.count('ola');
console.count('ola');

//timing
console.time('start timer');
fetch('https://api.github.com/users/wesbos')
.then(data => data.json())
.then(data => {
    console.timeEnd('start timer');
    console.log(data);
});