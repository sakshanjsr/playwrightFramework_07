

const {test, expect} = require('@playwright/test')

test.describe("Practice Tests", () => {

    test("Get CSS Value @smoke", async ({page} , testinfo)  => {

        console.log("Test Title : "+testinfo.title)
        console.log("Test Tags : "+testinfo.tags)
        console.log("Test Status : "+testinfo.status)
        console.log("Test Retry : "+testinfo.retry)
        console.log("Test Worker Index : "+testinfo.workerIndex)
        console.log("Test Project Name : "+testinfo.project.name)
        console.log("Test Project Metadata : "+JSON.stringify(testinfo.project.metadata))
        console.log("Test Config : "+JSON.stringify(testinfo.config))
        console.log("Test File : "+testinfo.file)
        console.log("Test Line : "+testinfo.line)
        console.log("Test Column : "+testinfo.column)

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