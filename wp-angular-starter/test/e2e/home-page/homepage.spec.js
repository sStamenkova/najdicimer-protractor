/**
 * Created by SimonaS on 17/08/2016.
 */

var HomePage = require('./homepage.js');
describe('Home Page Tests', function(){
    var homePage;

    beforeEach(function(){
       homePage = new HomePage();
       homePage.get();
    });

    it('should perform a search on a given keyword', function(){
        homePage.search('example');
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/search/example');
    });

    it('should redirect to login page on navigation click', function () {
        homePage.goToLogin();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/login');
    });

    it('should redirect to sign up page on navigation click', function () {
        homePage.goToSignUp();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/signup');
    });
});