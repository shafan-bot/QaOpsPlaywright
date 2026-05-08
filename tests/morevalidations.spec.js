const { test, expect } = require('@playwright/test');

test("more validations", async({page})=> 
{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
// await page.goto("https://google.com");
// await page.goBack();
// await page.goForward();

await expect(page.locator("#displayed-text")).toBeVisible();
await page.locator("#hide-textbox").click();
await expect(page.locator("#displayed-text")).toBeHidden();

//await page.pause();
page.on('dialog',dialog => dialog.accept());
await page.locator("#confirmbtn").click();

//when you ahve iframes or any frames

const framesPage = page.frameLocator("#courses-iframe");

await framesPage.getByRole('link', { name: 'All-Access' }).first().click();

const textConfirm = await framesPage.getByText("Premium Access Plans");

await expect(textConfirm).toBeVisible();
const textCont = await textConfirm.textContent();

console.log(await textCont.split(" ")[0]);



}




);