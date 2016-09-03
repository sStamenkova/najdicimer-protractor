/**
 * Created by SimonaS on 02/09/2016.
 */

var ReceivedMessagesPage = require('./received-messages-page.js');
var LoginPage = require('../login-page/login-page.js');

describe('Received Messages Page Tests', function () {
    var receivedMessagesPage;
    var loginPage;

    beforeAll(function () {
        loginPage = new LoginPage();
        loginPage.get();
        loginPage.login('user1', 'user1pass');
        browser.sleep(1000);
    });

    beforeEach(function(){
        receivedMessagesPage = new ReceivedMessagesPage();
        receivedMessagesPage.get();
    });
    
    it('should mark a message as unread', function () {
        var message = element.all(by.repeater('message in messages')).first();
        receivedMessagesPage.markAsUnread();
        expect(message.getAttribute('class')).toContain('well');
    });

    it('should mark a message as read', function () {
        var message = element.all(by.repeater('message in messages')).first();
        receivedMessagesPage.markAsRead();
        expect(message.getAttribute('class')).not.toContain('well');
    });
    
    it('should read a message', function () {
        receivedMessagesPage.readTheMessage();
        expect(element(by.css('p')).getText()).toEqual('Hello');
    });

    afterAll(function(){
       loginPage.logout();
    });
});