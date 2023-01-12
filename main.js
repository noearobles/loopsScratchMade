let i = 0;
do {
  console.log(i);
  i++;
} while (i <= 1000);

const [person1] = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female",
};

const [person2] = {
  firstName: "John",
  lastName: "Doe",
  birthDate: "Dec 14, 1943",
  gender: "male",
};

const [person3] = {
  firstName: "Jack",
  lastName: "Black",
  birthDate: "Oct 20, 1965",
  gender: "male",
};

console.log(Object.keys(person1));

console.log(Object.entries(person1));

const arrayOfPersons = [person1, person2, person3];

console.log(arrayOfPersons);

for (const array of arrayOfPersons) {
  if (parseInt(array.birthDate.slice(-1)) % 2) {
  
    console.log(array.birthDate);
  }
}

const mapArray = arrayOfPersons.map((i) => console.log(i));

const filterArray = arrayOfPersons.filter((array) =>
 
console.log(array.gender)
);

const bDate = (input) => {
  if (parseInt(input.slice(-4)) < 1990) {
    
    return true;
  } else {
    return false;
  }
};

for (const person of arrayOfPersons) {
  
  console.log(bDate(person.birthDate));
}
