/**
 * Created by SimonaS on 14/08/2016.
 */

var NewListing = require('./new-listing.js');
var LoginPage = require('../login-page/login-page.js');
describe('New Listing Page Tests', function () {
    var newListing;
    var loginPage;

    beforeAll(function () {
        loginPage = new LoginPage();
        loginPage.get();
        loginPage.login('test', 'password');
    });

    beforeEach(function(){
        newListing = new NewListing();
        newListing.get();
    });

    it('should create a new listing', function(){
        newListing.newListing('example title', 'example content', 'Skopje');
        element(by.id('showListings')).click();
        var listing = element.all(by.css('div.title-style')).first();
        expect(listing.getText()).toEqual('example title');
    });

    it('should not create a listing with an empty title', function(){
        newListing.newListing('', 'example content', 'Skopje');
        browser.sleep(2000);
        var error = element.all(by.css('div.help-block p')).get(0);
        expect(error.getText()).toEqual('Внеси наслов на огласот');
    });

    it('should not create a listing with an empty content', function(){
        newListing.newListing('example title', '', 'Skopje');
        browser.sleep(2000);
        var error = element.all(by.css('div.help-block p')).get(0);
        expect(error.getText()).toEqual('Внеси оглас');
    });

    it('should not create a listing with an empty location', function(){
        newListing.newListing('example title', 'example content', '');
        browser.sleep(2000);
        var error = element.all(by.css('div.help-block p')).get(0);
        expect(error.getText()).toEqual('Внеси локација на огласот');
    });

    it('should show guide1 when clicked', function(){
        element(by.id('guide1')).click();
        browser.sleep(1000);
        expect(element(by.id('collapse1')).isDisplayed()).toBe(true);
    });

    it('should show guide2 when clicked', function(){
        element(by.id('guide2')).click();
        browser.sleep(1000);
        expect(element(by.id('collapse2')).isDisplayed()).toBe(true);
    });

    it('should show guide3 when clicked', function(){
        element(by.id('guide3')).click();
        browser.sleep(1000);
        expect(element(by.id('collapse3')).isDisplayed()).toBe(true);
    });

    afterAll(function () {
        loginPage.logout();
    });

});