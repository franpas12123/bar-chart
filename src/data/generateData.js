const fs = require('fs');
const faker = require('faker');

function createRandomName() {
  return faker.name.findName();
}

function createCompanyName() {
  return faker.name.findName();
}

// function randomTimestamp(start, end) {
//   return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
// }

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function createSpecialists(numberOfSpecialists) {
  const specialists = [];
  for (let i = 0; i < numberOfSpecialists; i++) {
    specialists.push(createRandomName());
  }
  return specialists;
}

// Returns a random date of birth from min to max year - 1
function randomDOB(min, max) {
  let dob;

  // Math.ceil prevents the value from being 0;
  let month = Math.ceil(Math.random() * 12);
  let day = Math.ceil(Math.random() * 28);
  let year = Math.floor(Math.random() * (max - min) + min);

  //this ensures that the format will stay mm/dd/yyyy;
  if (month < 10) {
    month = '0' + month;
  }
  if (day < 10) {
    day = '0' + day;
  }
  //concatenates random dob in mm/dd/yyyy format;
  // dob = month + "/" + day + "/" + year;
  dob = year + '-' + month + '-' + day;

  return dob;
}

const json = [];

// Create data
const numberOfData = 100000;

const specialists = createSpecialists(20);

// for (let index = 0; index < numberOfData; index++) {
/*
    [
      {
        "id": 0,
        "name": "Lloyd Sawayn",
        "companyName": "Jorge Dach",
        "createdAt": "05/10/2021"
      }
    ]
  */
// create a JSON object
// const user = {
//   id: index,
//   name: createRandomName(),
//   // companyName: createCompanyName(),
//   specialist: specialists[randomNum(0, specialists.length)],
//   // createdAt: randomTimestamp(new Date(2020, 0, 1), new Date()),
//   createdAt: randomDOB(2022, 2022),
// };

// json.push(user);
// }

json.push({ businessPlan: randomNum(1000, 100000) });
json.push({ marketingPlan: randomNum(1000, 100000) });
json.push({ proFormaFinancials: randomNum(1000, 100000) });
json.push({ preUnderwriting: randomNum(1000, 100000) });

// convert JSON object to string
// const data = JSON.stringify(json, null, 4); // pretty version
const data = JSON.stringify(json);

// write JSON string to a file
const destinationFile = '../../public/technicalAssistanceChartData.json';
// const destinationFile = 'contacts.json'
fs.writeFile(destinationFile, data, (err) => {
  if (err) {
    throw err;
  }
  console.log('JSON data is saved.');
});
