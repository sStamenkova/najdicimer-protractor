/**
 * Created by SimonaS on 13/08/2016.
 */

var SignUpPage = require('./sign-up-page.js');
describe('Sign Up Page Tests', function(){
    var signupPage;

    beforeEach(function() {
        signupPage = new SignUpPage();
        signupPage.get();
    });

    it('should register a new user', function(){
        signupPage.signup('test', 'test', 'test@example.com', 'test', 'password', 'password');
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/');
    });

    it('should not register a user with an existing username', function(){
        signupPage.signup('test1', 'test1', 'test1@example.com', 'test', 'password', 'password');
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/signup');
    });

    it('should show an error message when signing up a user with an invalid email', function () {
        signupPage.signup('test1', 'test1', 'test1', 'test1', 'password', 'password');
        var error = element.all(by.css('.help-block.ng-active')).first().getText();
        expect(error).toEqual('Внеси валиден email');
    });

    it('should show an error message when passwords dont match', function(){
        signupPage.signup('test1', 'test1', 'test1@example.com', 'test1', 'password', 'pass');
        var error = element.all(by.css('.help-block.ng-active')).first().getText();
        expect(error).toEqual('Лозинката не се совпаѓа');
    });

    it('should show an error message when name field is empty', function(){
        signupPage.signup('', 'test1', 'test1@example.com', 'test1', 'password', 'password');
        var error = element.all(by.css('.help-block.ng-active')).first().getText();
        expect(error).toEqual('Внеси име');
    });

    it('should show an error message when surname field is empty', function(){
        signupPage.signup('test1', '', 'test1@example.com', 'test1', 'password', 'password');
        var error = element.all(by.css('.help-block.ng-active')).first().getText();
        expect(error).toEqual('Внеси презиме');
    });

    it('should show an error message when email field is empty', function(){
        signupPage.signup('test1', 'test1', '', 'test1', 'password', 'password');
        var error = element.all(by.css('.help-block.ng-active')).first().getText();
        expect(error).toEqual('Внеси email');
    });

    it('should show an error message when username field is empty', function(){
        signupPage.signup('test1', 'test1', 'test1@example.com', '', 'password', 'password');
        var error = element.all(by.css('.help-block.ng-active')).first().getText();
        expect(error).toEqual('Внеси корисничко име');
    });

    it('should show an error message when password field is empty', function(){
        signupPage.signup('test1', 'test1', 'test1@example.com', 'test1', '', 'password');
        var error = element.all(by.css('.help-block.ng-active')).first().getText();
        expect(error).toEqual('Внеси лозинка');
    });

    it('should show an error message when password field is empty', function(){
        signupPage.signup('test1', 'test1', 'test1@example.com', 'test1', 'password', '');
        var error = element.all(by.css('.help-block.ng-active')).first().getText();
        expect(error).toEqual('Потврди лозинка');
    });

    it('should cancel sign up when cancel button is clicked', function(){
       signupPage.cancel();
       expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/');
    });

    it('should redirect to login page when clicking the login button', function () {
        signupPage.goToLogin();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/login');
    });
});