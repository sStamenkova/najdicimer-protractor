/**
 * Created by SimonaS on 24/08/2016.
 */

var LoginPage = require('../login-page/login-page.js');
var ListingInteraction = require('./listing-interaction.js');

describe('Listing Interaction Tests', function () {
    var loginPage;
    var listingInteraction;
    
    beforeAll(function () {
        loginPage = new LoginPage();
        loginPage.get();
        loginPage.login('test', 'password');
    });
    
    beforeEach(function () {
        listingInteraction = new ListingInteraction();
        listingInteraction.get();
    });

    it('should edit a listing title', function(){
        listingInteraction.editTitle('title edited');
        var title = element(by.css('.panel-heading h2')).getText();
        expect(title).toEqual('title edited');
    });

    it('should edit a listing content', function(){
        listingInteraction.editContent('content edited');
        var content = element(by.css('.panel-body > p')).getText();
        expect(content).toEqual('content edited');
    });

    it('should show an error message when trying to save changes with an empty title', function(){
        listingInteraction.editTitle('');
        var error = element.all(by.css('div.help-block p')).get(0);
        expect(error.getText()).toEqual('Внеси наслов на огласот');
    });

    it('should show an error message when trying to save changes with an empty content', function(){
        listingInteraction.editContent('');
        var error = element.all(by.css('div.help-block p')).get(0);
        expect(error.getText()).toEqual('Внеси оглас');
    });

    it('should delete a listing', function () {
        listingInteraction.deleteListing();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/listings/');
    });

    it('should report an inappropriate listing', function () {
        listingInteraction.sendReport('Inappropriate content');
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/listing/11');
    });
    
    it('should send a message to a user', function () {
        listingInteraction.sendMessage('Hello');
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/listing/11');
    });
});