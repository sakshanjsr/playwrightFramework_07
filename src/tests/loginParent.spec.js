const {test, expect} = require('../fixtures/login.fixture')   //>> Location of fixture
const logindata = require("../../src/testdata/logindata.json")



test("Login to Application @smoke @regression" , async function({loginPage}){

     const authFile = "src/config/auth.json"


     console.log("Environment Selected : " + process.env.ENV);
     console.log("User ID from env file is : " + process.env.userid);
   

     await loginPage.navigate()
     await loginPage.loginSteps(logindata.username , logindata.passwordList.correctPassword)

     //await page.context().storageState({path : authFile})

     

})