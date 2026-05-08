const { test, expect } = require('@playwright/test');

test('@login test', async ({browser})=> {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://the-internet.herokuapp.com/login");

    await page.locator('#username').fill("tomsmith");

    await page.locator('#password').fill("SuperSecretPassword!");

    await page.getByRole('button', { name: ' Login'}).click();

    await page.waitForSelector('#flash');
    
    console.log(await page.locator('#flash').textContent());

    //assertion

    await expect (page.locator('#flash')).toContainText('You logged into a secure area!');

 await console.log("test passed");


});

/*

const { test, expect } = require('@playwright/test');
const { only } = require('node:test');

test('Child Window Handle/ New tab test', async({browser})=>

   { const context = await browser.newContext();
    const page = context.newPage();


    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

    const [newPage] = Promise.all(
    [
    context.waitForEvent('page'),
    page.locator("[type='value']").click(),
    ])


// mentor@rahulshettyacademy.com_space_

    



}); */
