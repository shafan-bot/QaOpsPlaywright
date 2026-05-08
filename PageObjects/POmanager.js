const {LoginPage} = require("./LoginPage")
const {DashBoard} = require("./DashBoard")

class POmanager {

    constructor(page)
    {
        this.loginPage = new LoginPage(page)
        this.dashboard = new this.dashboard(page)

    }
    async getLoginPage()
        {
            return this.loginPage;
        }
    async getDashboard()
    {
        return this.dashboard;
    }    
    

}