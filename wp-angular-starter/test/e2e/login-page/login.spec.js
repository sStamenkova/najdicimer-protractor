/**
 * Created by SimonaS on 13/08/2016.
 */

var LoginPage = require('./login-page.js');
describe('Login Page Tests', function(){
    var loginPage;

    beforeEach(function() {
        loginPage = new LoginPage();
        loginPage.get();
    });

    it('should log in an existing user', function() {
        loginPage.login('test', 'password');
        var user = element(by.id('userName'));
        expect(user.getText()).toEqual('test');
        loginPage.logout();
    });

    it('should redirect to admin page when logged in as admin', function () {
        loginPage.login('admin', 'admin12345');
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/admin/#/');
        browser.get('http://localhost:8000/#/');
        loginPage.logout();
    });

    it('should show an error message when logging in a user with incorrect credentials', function(){
        loginPage.login('test', 'pass');
        var error = element(by.id('err-message'));
        expect(error.getText()).toEqual('Неточно корисничко име или лозинка');
    });

    it('should show an error message when username field is empty', function(){
       loginPage.login('','password');
        var error = element.all(by.css('.help-block.ng-active')).first().getText();
        expect(error).toEqual('Внеси корисничко име');
    });

    it('should show an error message when password field is empty', function () {
        loginPage.login('test','');
        var error = element.all(by.css('.help-block.ng-active')).first().getText();
        expect(error).toEqual('Внеси лозинка');
    });

    it('should cancel log in when cancel button is clicked', function () {
        loginPage.cancel();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/');
    });

    it('should redirect to sign up page when clicking the sign up button', function () {
        loginPage.goToSignUp();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/signup');
    });
});