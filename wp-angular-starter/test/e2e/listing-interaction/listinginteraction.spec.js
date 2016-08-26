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

    xit('should edit a listing title', function(){
        listingInteraction.editTitle('title edited');
        var title = element(by.css('.panel-heading h2')).getText();
        expect(title).toEqual('title edited');
    });

    xit('should edit a listing content', function(){
        listingInteraction.editContent('content edited');
        var content = element(by.css('.panel-body > p')).getText();
        expect(content).toEqual('content edited');
    });

    xit('should show an error message when trying to save changes with an empty title', function(){
        listingInteraction.editTitle('');
        var error = element.all(by.css('div.help-block p')).get(0);
        expect(error.getText()).toEqual('Внеси наслов на огласот');
    });

    xit('should show an error message when trying to save changes with an empty content', function(){
        listingInteraction.editContent('');
        var error = element.all(by.css('div.help-block p')).get(0);
        expect(error.getText()).toEqual('Внеси оглас');
    });

    it('should delete a listing', function () {
        listingInteraction.deleteListing();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/listings/');
    });
});