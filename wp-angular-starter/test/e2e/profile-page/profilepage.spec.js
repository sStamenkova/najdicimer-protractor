/**
 * Created by SimonaS on 19/08/2016.
 */
var ProfilePage = require('./profile-page.js');
var LoginPage = require('../login-page/login-page.js');
describe('Profile Page Tests', function () {

    var profilePage;
    var loginPage;

    beforeAll(function(){
        loginPage = new LoginPage();
        loginPage.get();
        loginPage.login('test', 'password');
        browser.sleep(2000);
    });

    beforeEach(function () {
        profilePage = new ProfilePage();
        profilePage.get();
    });

    it('should display current username', function(){
        expect(element(by.model('user.username')).getAttribute('value')).toEqual('test');
    });

    it('should display current name', function(){
        expect(element(by.model('user.name')).getAttribute('value')).toEqual('test');
    });

    it('should display current surname', function(){
        expect(element(by.model('user.surname')).getAttribute('value')).toEqual('test');
    });

    it('should display current email', function(){
        expect(element(by.model('user.email')).getAttribute('value')).toEqual('test@example.com');
    });

    it('should display current birthdate', function(){
        expect(element(by.model('user.birthDate')).getAttribute('value')).toEqual('10/1/1995');
    });

    it('should display current password', function(){
        expect(element(by.model('user.password')).getAttribute('value')).toEqual('password');
    });

    it('should cancel edit on cancel button click', function () {
        profilePage.cancel();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/');
    });

    it('should edit the username', function(){
        profilePage.changeUsername('usernameEdited');
        profilePage.goToProfile();
        expect(element(by.model('user.username')).getAttribute('value')).toEqual('usernameEdited');
    });

    it('should edit the name', function(){
        profilePage.changeName('nameEdited');
        profilePage.goToProfile();
        expect(element(by.model('user.name')).getAttribute('value')).toEqual('nameEdited');
    });

    it('should edit the surname', function(){
        profilePage.changeSurname('surnameEdited');
        profilePage.goToProfile();
        expect(element(by.model('user.surname')).getAttribute('value')).toEqual('surnameEdited');
    });

    it('should edit the email', function(){
        profilePage.changeEmail('emailEdited@example.com');
        profilePage.goToProfile();
        expect(element(by.model('user.email')).getAttribute('value')).toEqual('emailEdited@example.com');
    });

    it('should edit the date', function(){
        profilePage.changeDate('01/01/1995');
        profilePage.goToProfile();
        expect(element(by.model('user.birthDate')).getAttribute('value')).toEqual('01/01/1995');
    });

    it('should edit the password', function () {
        profilePage.changePassword('passwordEdited');
        profilePage.goToProfile();
        expect(element(by.model('user.password')).getAttribute('value')).toEqual('passwordEdited');
    });
    
    it('should show an error message when trying to save a user with an existing username', function () {
        profilePage.changeUsername('admin');
        var error = element.all(by.css('.help-block.ng-active')).first().getText();
        expect(error).toEqual('Корисничкото име е зафатено');
    });

    it('should show an error message when trying to save a user with an invalid email', function () {
        profilePage.changeEmail('emailEdited');
        var error = element.all(by.css('.help-block.ng-active')).first().getText();
        expect(error).toEqual('Внеси валиден email');
    });

    it('should show an error message when trying to save a user with an invalid date', function () {
        profilePage.changeDate('1/20/2003');
        var error = element.all(by.css('.help-block.ng-active')).first().getText();
        expect(error).toEqual('Внеси валидна дата');
    });

    it('should show an error message when trying to save a user with an empty username', function () {
        profilePage.changeUsername('');
        var error = element.all(by.css('.help-block.ng-active')).first().getText();
        expect(error).toEqual('Внеси корисничко име');
    });

    it('should show an error message when trying to save a user with an empty name', function () {
        profilePage.changeName('');
        var error = element.all(by.css('.help-block.ng-active')).first().getText();
        expect(error).toEqual('Внеси име');
    });

    it('should show an error message when trying to save a user with an empty surname', function () {
        profilePage.changeSurname('');
        var error = element.all(by.css('.help-block.ng-active')).first().getText();
        expect(error).toEqual('Внеси презиме');
    });

    it('should show an error message when trying to save a user with an empty email', function () {
        profilePage.changeEmail('');
        var error = element.all(by.css('.help-block.ng-active')).first().getText();
        expect(error).toEqual('Внеси email');
    });

    it('should show an error message when trying to save a user with an empty password', function () {
        profilePage.changePassword('');
        var error = element.all(by.css('.help-block.ng-active')).first().getText();
        expect(error).toEqual('Внеси лозинка');
    });

    afterAll(function () {
        loginPage.logout();
    });
});