class LoginPage {

    constructor(page)
    {
        this.page = page
        this.loginButton =  page.locator('#login');
        this.userEmail = page.locator('#userEmail');
        this.userPassword = page.locator('#userPassword');

    }

    async goTo()
    {
        this.page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    }

    async validLogin(userEmail,userPassword)
    {
        await this.userEmail.fill("shafans32@gmail.com");
        await this.userPassword.fill('nDFrDdJuCq5.Gqz');
        await this.loginButton.click()
    }
}

module.exports = {LoginPage}

/****************************/
 
