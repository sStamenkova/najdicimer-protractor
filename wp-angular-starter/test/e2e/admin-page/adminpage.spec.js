/**
 * Created by SimonaS on 22/08/2016.
 */
var AdminPage = require('./admin-page.js');
var LoginPage = require('../login-page/login-page.js');

describe('Admin Page Tests', function () {
    var adminPage;
    var loginPage;

    beforeAll(function () {
        loginPage = new LoginPage();
        loginPage.get();
        loginPage.login('admin', 'admin12345');
        browser.sleep(2000);
    });

    beforeEach(function(){
        adminPage = new AdminPage();
        adminPage.get();
    });

    it('should go to users page on navigation click', function () {
        adminPage.goToUsers();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/admin/#/users');
    });

    it('should go to reports page on navigation click', function () {
        adminPage.goToReports();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/admin/#/reports');
    });

    it('should go to main page on navigation click', function () {
        adminPage.goToMainPage();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/');
    });

    afterAll(function(){
        loginPage.logout();
    });
});