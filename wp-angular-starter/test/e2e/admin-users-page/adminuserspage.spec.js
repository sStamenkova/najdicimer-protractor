/**
 * Created by SimonaS on 31/08/2016.
 */

var AdminUsersPage = require('./admin-users-page.js');
var LoginPage = require('../login-page/login-page.js');

describe('Admin Users Page Tests', function () {
    var adminUsersPage;
    var loginPage;

    beforeAll(function () {
        loginPage = new LoginPage();
        loginPage.get();
        loginPage.login('admin', 'admin12345');
        browser.sleep(2000);
    });

    beforeEach(function(){
        adminUsersPage = new AdminUsersPage();
        adminUsersPage.get();
    });
    
    it('should edit the full name of the user', function () {
        adminUsersPage.editNameAndSurname('test', 'test');
        expect(element(by.id('fullName')).getText()).toEqual('test test');
    });

    it('should edit the username of the user', function () {
        adminUsersPage.editUsername('test');
        expect(element(by.id('username')).getText()).toEqual('test');
    });

    it('should edit the email of the user', function () {
        adminUsersPage.editEmail('test@example.com');
        expect(element(by.id('email')).getText()).toEqual('test@example.com');
    });

    it('should edit the password of the user', function () {
        adminUsersPage.editPassword('password');
        expect(element(by.id('password')).getText()).toEqual('password');
    });
    
    it('should edit the date of birth of the user', function () {
        adminUsersPage.editDate('10/1/1995');
        expect(element(by.id('dateOfBirth')).getText()).toEqual('10/1/1995');
    });

    it('should delete a user', function () {
        adminUsersPage.delete();
        var user = element.all(by.id('username')).last();
        expect(user).not.toEqual('test');
    });

    afterAll(function(){
        browser.get('http://localhost:8000/#/');
        loginPage.logout();
    });
});