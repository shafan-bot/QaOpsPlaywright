const { test, expect } = require('@playwright/test');

test("calendar testing", async({page})=>
{
await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");

const month = "6";
const date = "15";
const year = "2027";

const expectedValue = [month,date,year];

await page.locator(".react-date-picker__inputGroup").click();
await page.locator(".react-calendar__navigation__label__labelText--from").click();
await page.locator(".react-calendar__navigation__label__labelText--from").click();
await page.getByText(year).click();

await page.locator(".react-calendar__year-view__months__month").nth(Number(month-1)).click();

await page.locator(".react-calendar__month-view__days__day").nth(Number(date)).click();

// await page.locator("//abbr[text='"+date+"']").click();

const input = await page.locator(".react-date-picker__inputGroup");

for(let i =0; i<expectedValue.lenght; ++i)
{

    const value = await input.nth(i).inputValue();
    await expect(value).toEqual(expectedValue[i]);

}

await page.pause();

});


