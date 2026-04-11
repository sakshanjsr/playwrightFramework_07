const {test, expect} = require('../fixtures/login.fixture')   //>> Location of fixture
const logindata = require("../../src/testdata/logindata.json")



test("Login to Application" , async function({loginPage}){

     const authFile = "src/config/auth.json"

     //await page.goto("https://practicetestautomation.com/practice-test-login/")
     //Creating obj of the loginPage class
     //const loginpage = new LoginPage(page)

     console.log("Environment Selected : " + process.env.ENV);
     console.log("User ID from env file is : " + process.env.userid);
   

     await loginPage.navigate()
     await loginPage.loginSteps(logindata.username , logindata.passwordList.correctPassword)

     //await page.context().storageState({path : authFile})

     

})