const {test, expect} = require('@playwright/test')
const XLSX = require('xlsx');
const path = require('path');



const userDataFile = path.join(__dirname, '../testdata/data.xlsx');
const workbook = XLSX.readFile(userDataFile);
const worksheet = workbook.Sheets['Sheet1'];
const xlsToJson = XLSX.utils.sheet_to_json(worksheet);
// console.log(xlsToJson);
// console.log(xlsToJson.length);




xlsToJson.forEach((data, index) => {
  test(`Read Data from Excel - Row ${index + 1}`, async ({ page }) => {
    console.log(`Executing for row ${index + 1}`);
    console.log("Data : "+JSON.stringify(data));

    // Example usage assuming Excel columns are username and password
    console.log("Name : "+data.name);
    console.log("Roll no. : "+data.rollNo);

  });
});

 



