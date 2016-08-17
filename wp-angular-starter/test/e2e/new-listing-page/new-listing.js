/**
 * Created by SimonaS on 14/08/2016.
 */

var NewListing = function(){

    this.title = element(by.model('title'));
    this.content = element(by.id('ui-tinymce-0_ifr'));
    this.location = element(by.model('location'));
    this.postListing = element(by.css('.btn-primary'));

    this.get = function () {
        browser.get('http://localhost:8000/#/listing');
    };

    this.newListing = function(title, content, location){
        browser.refresh();
        this.title.sendKeys(title);
        this.content.click().sendKeys(content);
        this.location.sendKeys(location);
        browser.sleep(2000);
        element(by.css('.container')).click();
        this.postListing.click();
    };
};

module.exports = NewListing;