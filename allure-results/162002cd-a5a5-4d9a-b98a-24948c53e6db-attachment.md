# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ecommerce.spec.js >> List all items in the page
- Location: tests/ecommerce.spec.js:3:1

# Error details

```
Test timeout of 50000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 50000ms exceeded.
Call log:
  - waiting for locator('.col-text')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e11] [cursor=pointer]:
      - /url: https://techsmarthire.com/
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
      - listitem [ref=e22] [cursor=pointer]:
        - button "Sign Out" [ref=e23]:
          - generic [ref=e24]: 
          - text: Sign Out
  - generic [ref=e25]:
    - heading "Your Orders" [level=1] [ref=e26]
    - table [ref=e27]:
      - rowgroup [ref=e28]:
        - row "Order Id Product Image Name Price Ordered Date View Delete" [ref=e29]:
          - columnheader "Order Id" [ref=e30]
          - columnheader "Product Image" [ref=e31]
          - columnheader "Name" [ref=e32]
          - columnheader "Price" [ref=e33]
          - columnheader "Ordered Date" [ref=e34]
          - columnheader "View" [ref=e35]
          - columnheader "Delete" [ref=e36]
      - rowgroup [ref=e37]:
        - row "69ef4d72f86ba51a658b933b ADIDAS ORIGINAL $ 11500 Mon Apr 27 View Delete" [ref=e38]:
          - rowheader "69ef4d72f86ba51a658b933b" [ref=e39]
          - cell [ref=e40]:
            - img [ref=e41]
          - cell "ADIDAS ORIGINAL" [ref=e42]
          - cell "$ 11500" [ref=e43]
          - cell "Mon Apr 27" [ref=e44]
          - cell "View" [ref=e45]:
            - button "View" [ref=e46] [cursor=pointer]
          - cell "Delete" [ref=e47]:
            - button "Delete" [ref=e48] [cursor=pointer]
        - row "69ef4b58f86ba51a658b8b21 ADIDAS ORIGINAL $ 11500 Mon Apr 27 View Delete" [ref=e49]:
          - rowheader "69ef4b58f86ba51a658b8b21" [ref=e50]
          - cell [ref=e51]:
            - img [ref=e52]
          - cell "ADIDAS ORIGINAL" [ref=e53]
          - cell "$ 11500" [ref=e54]
          - cell "Mon Apr 27" [ref=e55]
          - cell "View" [ref=e56]:
            - button "View" [ref=e57] [cursor=pointer]
          - cell "Delete" [ref=e58]:
            - button "Delete" [ref=e59] [cursor=pointer]
        - row "69ef4699f86ba51a658b7592 ADIDAS ORIGINAL $ 11500 Mon Apr 27 View Delete" [ref=e60]:
          - rowheader "69ef4699f86ba51a658b7592" [ref=e61]
          - cell [ref=e62]:
            - img [ref=e63]
          - cell "ADIDAS ORIGINAL" [ref=e64]
          - cell "$ 11500" [ref=e65]
          - cell "Mon Apr 27" [ref=e66]
          - cell "View" [ref=e67]:
            - button "View" [ref=e68] [cursor=pointer]
          - cell "Delete" [ref=e69]:
            - button "Delete" [ref=e70] [cursor=pointer]
        - row "69ef4659f86ba51a658b740b ADIDAS ORIGINAL $ 11500 Mon Apr 27 View Delete" [ref=e71]:
          - rowheader "69ef4659f86ba51a658b740b" [ref=e72]
          - cell [ref=e73]:
            - img [ref=e74]
          - cell "ADIDAS ORIGINAL" [ref=e75]
          - cell "$ 11500" [ref=e76]
          - cell "Mon Apr 27" [ref=e77]
          - cell "View" [ref=e78]:
            - button "View" [ref=e79] [cursor=pointer]
          - cell "Delete" [ref=e80]:
            - button "Delete" [ref=e81] [cursor=pointer]
        - row "69ef4626f86ba51a658b733a ADIDAS ORIGINAL $ 11500 Mon Apr 27 View Delete" [ref=e82]:
          - rowheader "69ef4626f86ba51a658b733a" [ref=e83]
          - cell [ref=e84]:
            - img [ref=e85]
          - cell "ADIDAS ORIGINAL" [ref=e86]
          - cell "$ 11500" [ref=e87]
          - cell "Mon Apr 27" [ref=e88]
          - cell "View" [ref=e89]:
            - button "View" [ref=e90] [cursor=pointer]
          - cell "Delete" [ref=e91]:
            - button "Delete" [ref=e92] [cursor=pointer]
        - row "69ef45c2f86ba51a658b7191 ADIDAS ORIGINAL $ 11500 Mon Apr 27 View Delete" [ref=e93]:
          - rowheader "69ef45c2f86ba51a658b7191" [ref=e94]
          - cell [ref=e95]:
            - img [ref=e96]
          - cell "ADIDAS ORIGINAL" [ref=e97]
          - cell "$ 11500" [ref=e98]
          - cell "Mon Apr 27" [ref=e99]
          - cell "View" [ref=e100]:
            - button "View" [ref=e101] [cursor=pointer]
          - cell "Delete" [ref=e102]:
            - button "Delete" [ref=e103] [cursor=pointer]
        - row "69ef4593f86ba51a658b7042 ADIDAS ORIGINAL $ 11500 Mon Apr 27 View Delete" [ref=e104]:
          - rowheader "69ef4593f86ba51a658b7042" [ref=e105]
          - cell [ref=e106]:
            - img [ref=e107]
          - cell "ADIDAS ORIGINAL" [ref=e108]
          - cell "$ 11500" [ref=e109]
          - cell "Mon Apr 27" [ref=e110]
          - cell "View" [ref=e111]:
            - button "View" [ref=e112] [cursor=pointer]
          - cell "Delete" [ref=e113]:
            - button "Delete" [ref=e114] [cursor=pointer]
    - generic [ref=e115]: "* If orders Will be more than 7 your last order will get deleted"
  - generic [ref=e117]:
    - button "Go Back to Shop" [ref=e118] [cursor=pointer]
    - button "Go Back to Cart" [ref=e119] [cursor=pointer]
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('List all items in the page', async({page})=> 
  4  | {
  5  | const userEmail = page.locator('#userEmail');
  6  | const Login = page.locator('#login');
  7  | const products = page.locator(".card-body");
  8  | const productName = 'ADIDAS ORIGINAL'
  9  | 
  10 | await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  11 | 
  12 | await page.locator('#userEmail').fill('shafans32@gmail.com');       // to enter email id 
  13 | await page.locator('#userPassword').fill('nDFrDdJuCq5.Gqz');        // to enter password
  14 | 
  15 | await page.locator('#login').click();                               // to click on login button
  16 | // you can also write this to get login web element - await page.getByRole('button', { name: 'login' });
  17 | 
  18 | //to print all the name of items
  19 | 
  20 | await page.waitForLoadState('networkidle');   // waits until all the API's are loaded 
  21 | await page.locator('.card-body b').first().waitFor();
  22 | const titles = await page.locator('.card-body b').allTextContents();
  23 | 
  24 | console.log(titles);
  25 | 
  26 | // To add Adidas original to cart 
  27 | // first to identify the title name = productName
  28 | 
  29 | const productCount = await products.count();
  30 | 
  31 | for(let i =0; i < productCount; ++i)
  32 | {
  33 | if (await products.nth(i).locator("b").textContent() === productName)
  34 | 
  35 | {
  36 | await products.nth(i).locator("text= Add To Cart").click();
  37 | break;
  38 | }
  39 | }
  40 | 
  41 | await page.locator("[routerlink*='cart']").click();
  42 | 
  43 | const bool = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
  44 | expect(bool).toBeTruthy();
  45 | 
  46 | await page.getByRole('button', { name: 'Checkout' } ).click();
  47 | 
  48 | // await page.locator().waitFor()
  49 | await page.getByPlaceholder('Select Country').pressSequentially('ind');
  50 | const dropdown = await page.locator(".ta-results");
  51 | await dropdown.waitFor();
  52 | const dropdownCount = await dropdown.count();
  53 | 
  54 | await page.locator(".ta-results button:has-text('India')").last().click();
  55 | 
  56 | await expect(
  57 |   page.locator(".user__name [type='text']").first()
  58 | ).toContainText('shafans32@gmail.com');
  59 | 
  60 | await page.locator(".btnn.action__submit.ng-star-inserted").click();
  61 | await expect(page.locator(".hero-primary")).toHaveText(/ Thankyou for the order. /);
  62 | 
  63 | const orderID = await page.locator(".ng-star-inserted .ng-star-inserted").nth(1).textContent();
  64 | 
  65 | console.log(orderID);
  66 | 
  67 | const rows = page.locator("tbody tr")
  68 | 
  69 | await page.locator('button[routerlink*="myorders"]').click();
  70 | await page.waitForLoadState('networkidle')
  71 | 
  72 | const rowsCount = await rows.count();
  73 | 
  74 | for(let i=0; i<rowsCount; ++i)
  75 |  {
  76 |     const rowOrderID = await rows.nth(i).locator("th").textContent();
  77 |     if(orderID.includes(rowOrderID))
  78 |      {
  79 |         await rows.nth(i).locator("button").first().click();
  80 |         break; 
  81 |         }
  82 | }
  83 | 
> 84 | const orderIdDetails = await page.locator(".col-text").textContent();
     |                                                        ^ Error: locator.textContent: Test timeout of 50000ms exceeded.
  85 | expect(orderID.includes(orderIdDetails)).toBeTruthy();
  86 | 
  87 | });
  88 | 
  89 | 
```