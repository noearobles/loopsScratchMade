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

for (const person of arrayOfPersons) {
  if (parseInt(person.birthDate.slice(-1)) % 2) {
    console.log(person.birthDate);
  }
}

const mapPersons = arrayOfPersons.map((i) => console.log(i));

const filterpersons = arrayOfPersons.filter((person) =>
  console.log(person.gender)
);

const test = (input) => {
  if (parseInt(input.slice(-4)) < 1990) {
    return true;
  } else {
    return false;
  }
};

for (const person of arrayOfPersons) {
  console.log(test(person.birthDate));
}
