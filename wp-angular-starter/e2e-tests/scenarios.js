describe('ProtractorTests', function(){

    beforeEach(function() {
        browser.get('http://localhost:8000/');
    });

    it('should register a new user', function(){

        var signupButton = element(by.id('signupButton'));
        signupButton.click();

        var name = element(by.model('name'));
        var surname = element(by.model('surname'));
        var email = element(by.model('email'));
        var username = element(by.model('username'));
        var day = element(by.model('day'));
        var month = element(by.model('monthT'));
        var year = element(by.model('year'));
        var password = element(by.model('password'));
        var confirm = element(by.model('confirm'));
        var save = element(by.css('.btn-success'));

        name.sendKeys('test');
        surname.sendKeys('test');
        email.sendKeys('test@example.com');
        username.sendKeys('test');

        day.element(by.cssContainingText('option', '1')).click();
        month.element(by.cssContainingText('option', 'Јануари')).click();
        year.element(by.cssContainingText('option', '1995')).click();
        password.sendKeys('password');
        confirm.sendKeys('password');
        save.click();

        expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/');
    });

    it('should log in an existing user', function() {
        var loginButton = element(by.id("loginButton"));

        var username = element(by.id("username"));
        var password = element(by.id("password"));
        var login = element(by.css(".btn-success"));

        loginButton.click();
        username.sendKeys('test');
        password.sendKeys('password');
        login.click();

        var user = element(by.id('userName'));

        expect(user.getText()).toEqual('test');
        user.click();
        element(by.id('logoutButton')).click();
    });

    it('should not register a user with an existing username', function(){

        var signupButton = element(by.id('signupButton'));
        signupButton.click();

        var name = element(by.model('name'));
        var surname = element(by.model('surname'));
        var email = element(by.model('email'));
        var username = element(by.model('username'));
        var day = element(by.model('day'));
        var month = element(by.model('monthT'));
        var year = element(by.model('year'));
        var password = element(by.model('password'));
        var confirm = element(by.model('confirm'));
        var save = element(by.css('.btn-success'));

        name.sendKeys('test1');
        surname.sendKeys('test1');
        email.sendKeys('test1@example.com');
        username.sendKeys('test');

        day.element(by.cssContainingText('option', '1')).click();
        month.element(by.cssContainingText('option', 'Јануари')).click();
        year.element(by.cssContainingText('option', '1995')).click();
        password.sendKeys('password');
        confirm.sendKeys('password');
        save.click();

        expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/signup');

    });

    it('should not log in a user with incorrect credentials', function(){

        var loginButton = element(by.id("loginButton"));

        var username = element(by.id("username"));
        var password = element(by.id("password"));
        var login = element(by.css(".btn-success"));

        loginButton.click();
        username.sendKeys('test');
        password.sendKeys('pass');
        login.click();

        var error = element(by.id('err-message'));
        expect(error.getText()).toEqual('Неточно корисничко име или лозинка');

    });
    it('should create a new listing', function(){

        var loginButton = element(by.id("loginButton"));

        var username = element(by.id("username"));
        var password = element(by.id("password"));
        var login = element(by.css(".btn-success"));

        loginButton.click();
        username.sendKeys('test');
        password.sendKeys('password');
        login.click();

        var newListingButton = element(by.id('newListing'));
        newListingButton.click();
        browser.sleep(2000);
        browser.refresh();

        var title = element(by.model('title'));
        var content = element(by.id('ui-tinymce-0_ifr'));
        var location = element(by.model('location'));
        var postListing = element(by.css('.btn-primary'));
        var showListings = element(by.id('showListings'));

        title.sendKeys('example title');
        content.click().sendKeys('example content');
        location.sendKeys('Skopje');
        browser.sleep(1000);
        element(by.css('.container')).click();
        postListing.click();
        showListings.click();

        var listing = element.all(by.css('div.title-style')).first();
        expect(listing.getText()).toEqual('example title');

        var user = element(by.id('userName'));
        user.click();
        element(by.id('logoutButton')).click();

    });

    it('should not create a listing with an empty title', function(){

        var loginButton = element(by.id("loginButton"));

        var username = element(by.id("username"));
        var password = element(by.id("password"));
        var login = element(by.css(".btn-success"));

        loginButton.click();
        username.sendKeys('test');
        password.sendKeys('password');
        login.click();

        var newListingButton = element(by.id('newListing'));
        newListingButton.click();
        browser.sleep(2000);
        browser.refresh();

        var title = element(by.model('title'));
        var content = element(by.id('ui-tinymce-0_ifr'));
        var location = element(by.model('location'));
        var postListing = element(by.css('.btn-primary'));

        content.click().sendKeys('example content');
        location.sendKeys('Skopje');
        browser.sleep(1000);
        element(by.css('.container')).click();
        postListing.click();
        browser.sleep(3000);

        var error = element.all(by.css('div.help-block p')).get(0);
        expect(error.getText()).toEqual('Внеси наслов на огласот');

        var user = element(by.id('userName'));
        user.click();
        element(by.id('logoutButton')).click();
    });

    it('should not create a listing with an empty content', function(){

        var loginButton = element(by.id("loginButton"));

        var username = element(by.id("username"));
        var password = element(by.id("password"));
        var login = element(by.css(".btn-success"));

        loginButton.click();
        username.sendKeys('test');
        password.sendKeys('password');
        login.click();

        var newListingButton = element(by.id('newListing'));
        newListingButton.click();
        browser.sleep(2000);
        browser.refresh();

        var title = element(by.model('title'));
        var content = element(by.id('ui-tinymce-0_ifr'));
        var location = element(by.model('location'));
        var postListing = element(by.css('.btn-primary'));

        title.sendKeys('example title');
        location.sendKeys('Skopje');
        browser.sleep(1000);
        element(by.css('.container')).click();
        postListing.click();
        browser.sleep(3000);

        var error = element.all(by.css('div.help-block p')).get(0);
        expect(error.getText()).toEqual('Внеси оглас');

        var user = element(by.id('userName'));
        user.click();
        element(by.id('logoutButton')).click();

    });

    it('should not create a listing with an empty content', function(){

        var loginButton = element(by.id("loginButton"));

        var username = element(by.id("username"));
        var password = element(by.id("password"));
        var login = element(by.css(".btn-success"));

        loginButton.click();
        username.sendKeys('test');
        password.sendKeys('password');
        login.click();

        var newListingButton = element(by.id('newListing'));
        newListingButton.click();
        browser.sleep(2000);
        browser.refresh();

        var title = element(by.model('title'));
        var content = element(by.id('ui-tinymce-0_ifr'));
        var location = element(by.model('location'));
        var postListing = element(by.css('.btn-primary'));

        title.sendKeys('example title');
        content.click().sendKeys('example content');
        postListing.click();
        browser.sleep(3000);

        var error = element.all(by.css('div.help-block p')).get(0);
        expect(error.getText()).toEqual('Внеси локација на огласот');

        var user = element(by.id('userName'));
        user.click();
        element(by.id('logoutButton')).click();

    });

});