const {test, expect} = require('@playwright/test')
const logindata = require("../../src/testdata/logindata.json")
const LoginPage = require ("../pages/loginPage.spec")


test("Login to Application" , async function({page}){

     const authFile = "src/config/auth.json"

     await page.goto("https://practicetestautomation.com/practice-test-login/")


     //Creating obj of the loginPage class
     const loginpage = new LoginPage(page)

     await loginpage.loginSteps(logindata.username , logindata.passwordList.correctPassword)

     await page.context().storageState({path : authFile})

     

})