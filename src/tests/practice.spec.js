

const {test, expect} = require('@playwright/test')

test.describe("Practice Tests", () => {

    test("Get CSS Value @smoke", async ({page}) => {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        const button = page.getByRole('Button' , {name : 'START'} )
        const color = await button.evaluate(e1 => getComputedStyle(e1).backgroundColor)
        console.log("Button Color : "+color)
    })

    // test.only("Handle Alerts @smoke", async ({page}) => {
    //     await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    //     page.on('dialog' , async (alertWindow) => {
    //         expect(alertWindow.type()).toContain("alert")
    //     })
    //     await page.locator("//button[contains(text(),'Alert')]").click()
    // })

})