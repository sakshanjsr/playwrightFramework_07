

class LoginPage{
    
    // this constructor will get the instance of page 
    // and all the locators will be initialized
    constructor(page){
        this.page = page
        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.submitButton = page.locator('#submit');
    }


    // Actions
    async navigate() {
        await this.page.goto('https://practicetestautomation.com/practice-test-login/');
    }


    async loginSteps(usernameFromLoginParent , passwordFromLoginParent){
        //await this.page.fill(this.username , "student")
        await this.username.fill(usernameFromLoginParent);
        await this.password.fill(passwordFromLoginParent);
        await this.submitButton.click();
    }

}

module.exports = LoginPage


