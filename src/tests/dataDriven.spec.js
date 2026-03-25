const {test, expect} = require('@playwright/test')
const multipleLoginData = require("../testdata/multipleLoginData.json")
const LoginPage = require ("../pages/loginPage.spec")





    for (const data of multipleLoginData){
        test.describe(`Login with user ${data.id}` , function() {
            test("Login to Application" , async function ({page})  {

                //await page.goto("https://practicetestautomation.com/practice-test-login/")
                console.log(data.username , data.password)
                            
            })

        })
    } 



