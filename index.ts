// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;


type personName = 'Jan' | 'Ala' | 'Marta';

type personOtherInfo = {
  id: number;
  age: number;
}

type personInfo = personName | personOtherInfo;

type Person = {
  name: personInfo;
  details: personInfo;
}

// Old solution before ts 4.9
const studentFirst: Person = {
  name: 'Ala',
  details: {
    id: 2,
    age: 20,
  },
};

if (typeof studentFirst.name === 'string') {
  studentFirst.name.toUpperCase();
};


const student = {
  name: 'Jan',
  details: { id: 1, age: 24 }, 
} satisfies Person;

student.name.toLowerCase();

const studentThree = {
  name: 'Jan',
  details: {
    id: 1,
    age: 23,
  }, 
} satisfies Person;

studentThree.name.toLowerCase();

type RGB = [number, number, number];
type Color = { value: string | RGB }

const myFavouriteColor = { value: 'red' } satisfies Color;

myFavouriteColor.value.toUpperCase()

console.log(myFavouriteColor);

