// console.log('running script');

console.log('===========Part 1: Refactoring Old Code=========');
// Function to parse CSV data
function parseCSV(csvString) {
  // Split the CSV string into rows
  const rows = csvString.split('\n');

  
  for (let i = 1; i < rows.length; i++) {
    
    if (rows[i].trim() === '') continue;

    
    const cells = rows[i].split(',');

   
    const rowData = {
      ID: cells[0],
      Name: cells[1],
      Occupation: cells[2],
      Age: cells[3]
    };

   
    console.log(rowData);
  }
}


const example1 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
const example2 = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

console.log("Example 1:");
parseCSV(example1);

console.log("\nExample 2:");
parseCSV(example2);

  
  console.log('========Part 2: Expanding Functionality======');

 // Function to parse CSV data
function parseCSV(csvString) {
  
  const rows = csvString.split('\n');

  
  const parsedData = [];

  
  const headerRowCells = rows[0].split(',');
  const numColumns = headerRowCells.length;

  
  console.log("Number of Columns:", numColumns);

  
  for (let i = 1; i < rows.length; i++) {
    // Skip empty rows
    if (rows[i].trim() === '') continue;

   
    const cells = rows[i].split(',');

    
    const rowData = {};

   
    for (let j = 0; j < numColumns; j++) {
      rowData[headerRowCells[j]] = cells[j];
    }

   
    parsedData.push(rowData);
  }

  
  parsedData.unshift(headerRowCells);

 
  console.log("Parsed Data:", parsedData);

 
  return parsedData;
}


const example3 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
const example4 = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

console.log("Example 3:");
const parsedData1 = parseCSV(example3);

console.log("\nExample 4:");
const parsedData2 = parseCSV(example4);

console.log('===========Part 3===================');
// Function to transform data
function transformData(parsedData) {
  
  const transformedData = [];

  
  for (let i = 1; i < parsedData.length; i++) {
    
    const rowObject = {};

   
    for (let j = 0; j < parsedData[0].length; j++) {
      
      const key = parsedData[0][j].toLowerCase();
      
      rowObject[key] = parsedData[i][j];
    }

    
    transformedData.push(rowObject);
  }

  
  console.log("Transformed Data:", transformedData);

  
  return transformedData;
}

// Test with the provided examples from Part 2
const parsedData3 = [
  ["ID", "Name", "Occupation", "Age"],
  ["42", "Bruce", "Knight", "41"],
  ["57", "Bob", "Fry Cook", "19"],
  ["63", "Blaine", "Quiz Master", "58"],
  ["98", "Bill", "Doctor’s Assistant", "26"]
];

const parsedData4 = [
  ["Index", "Mass (kg)", "Spring 1 (m)", "Spring 2 (m)"],
  ["1", "0.00", "0.050", "0.050"],
  ["2", "0.49", "0.066", "0.066"],
  ["3", "0.98", "0.087", "0.080"],
  ["4", "1.47", "0.116", "0.108"],
  ["5", "1.96", "0.142", "0.138"],
  ["6", "2.45", "0.166", "0.158"],
  ["7", "2.94", "0.193", "0.174"],
  ["8", "3.43", "0.204", "0.192"],
  ["9", "3.92", "0.226", "0.205"],
  ["10", "4.41", "0.238", "0.232"]
];

// console.log("Transformed Data 1:");
// const transformedData1 = transformData(parsedData1);

// console.log("\nTransformed Data 2:");
// const transformedData2 = transformData(parsedData2);
console.log("\nTransformed Data 2:");
const transformedData2 = transformData(parsedData2);

console.log('===========Part 4=============');

// Part 4: Sorting and Manipulating Data
function manipulateData(transformedData) {
 
  const manipulatedData = [...transformedData];

  // Task 1: Remove the last element from the array
  manipulatedData.pop();

  // Task 2: Insert an object at index 1
  const newObject = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
  manipulatedData.splice(1, 0, newObject);

  // Task 3: Add an object to the end of the array
  const endObject = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
  manipulatedData.push(endObject);

  
  console.log("Manipulated Data:", manipulatedData);

  // Task 4: Calculate the average age
  let totalAge = 0;
  for (let i = 0; i < manipulatedData.length; i++) {
    totalAge += parseInt(manipulatedData[i].age);
  }

  const averageAge = totalAge / manipulatedData.length;

 
  console.log("Average Age:", averageAge);

  return manipulatedData;
}

// Test data from Part 3
console.log("\nManipulate Data 1:");
const manipulatedData1 = manipulateData(parsedData1);

console.log("\nManipulate Data 2:");
const manipulatedData2 = manipulateData(transformedData2);

console.log("===============Part 5=================");

// convert data to csv format
function convertToCSV(manipulateData) {

  const headings = Object.keys(manipulateData[0]);

  let csvStr = headings.join(',') + '\n';

  manipulateData.forEach(obj => {
    const row = headings.map(key => obj[key]);
    csvStr += row.join(',') + '\n';
  });

console.log("CSV String");
console.log(csvStr);

return csvStr;
}

//manipulated data from Part 4
console.log("\nConverted to CSV:");
const csvData = convertToCSV(manipulatedData1);