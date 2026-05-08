const { test, expect } = require('@playwright/test');

test('List all items in the page', async({page})=> 
{
const userEmail = page.locator('#userEmail');
const Login = page.locator('#login');
const products = page.locator(".card-body");
const productName = 'ADIDAS ORIGINAL'

await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

await page.locator('#userEmail').fill('shafans32@gmail.com');       // to enter email id 
await page.locator('#userPassword').fill('nDFrDdJuCq5.Gqz');        // to enter password

await page.locator('#login').click();                               // to click on login button
// you can also write this to get login web element - await page.getByRole('button', { name: 'login' });

//to print all the name of items

await page.waitForLoadState('networkidle');   // waits until all the API's are loaded 
await page.locator('.card-body b').first().waitFor();
const titles = await page.locator('.card-body b').allTextContents();

console.log(titles);

// To add Adidas original to cart 
// first to identify the title name = productName

const productCount = await products.count();

for(let i =0; i < productCount; ++i)
{
if (await products.nth(i).locator("b").textContent() === productName)

{
await products.nth(i).locator("text= Add To Cart").click();
break;
}
}

await page.locator("[routerlink*='cart']").click();

const bool = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
expect(bool).toBeTruthy();

await page.getByRole('button', { name: 'Checkout' } ).click();

// await page.locator().waitFor()
await page.getByPlaceholder('Select Country').pressSequentially('ind');
const dropdown = await page.locator(".ta-results");
await dropdown.waitFor();
const dropdownCount = await dropdown.count();

await page.locator(".ta-results button:has-text('India')").last().click();

await expect(
  page.locator(".user__name [type='text']").first()
).toContainText('shafans32@gmail.com');

await page.locator(".btnn.action__submit.ng-star-inserted").click();
await expect(page.locator(".hero-primary")).toHaveText(/ Thankyou for the order. /);

const orderID = await page.locator(".ng-star-inserted .ng-star-inserted").nth(1).textContent();

console.log(orderID);

const rows = page.locator("tbody tr")

await page.locator('button[routerlink*="myorders"]').click();
await page.waitForLoadState('networkidle')

const rowsCount = await rows.count();

for(let i=0; i<rowsCount; ++i)
 {
    const rowOrderID = await rows.nth(i).locator("th").textContent();
    if(orderID.includes(rowOrderID))
     {
        await rows.nth(i).locator("button").first().click();
        break; 
        }
}

const orderIdDetails = await page.locator(".col-text").textContent();
expect(orderID.includes(orderIdDetails)).toBeTruthy();

});

