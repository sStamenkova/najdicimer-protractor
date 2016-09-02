/**
 * Created by SimonaS on 02/09/2016.
 */

var ReceivedMessagesPage = function(){
    this.markRead = element.all(by.id('markRead')).first();
    this.markUnread = element.all(by.id('markUnread')).first();
    this.readMessage = element.all(by.id('readMessage')).first();

    this.get = function () {
        browser.get('http://localhost:8000/#/messages/inbox');
    };
    
    this.markAsRead = function(){
        this.markRead.click();
    };

    this.markAsUnread = function () {
        this.markUnread.click();
    };

    this.readTheMessage = function () {
        this.readMessage.click();
    };
};

module.exports = ReceivedMessagesPage;