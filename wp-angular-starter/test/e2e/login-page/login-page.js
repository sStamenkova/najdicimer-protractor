/**
 * Created by SimonaS on 13/08/2016.
 */
var LoginPage = function(){

    this.username = element(by.id('username'));
    this.password = element(by.id('password'));
    this.user = element(by.id('userName'));
    this.loginButton = element(by.css('.btn-success'));
    this.cancelButton = element(by.css('.btn-danger'));
    this.goToSignUpButton = element(by.css('.btn-warning'));

    this.get = function(){
        browser.get('http://localhost:8000/#/login');
    };

    this.login = function(username, password){
        this.username.sendKeys(username);
        this.password.sendKeys(password);
        this.loginButton.click();
    };

    this.logout = function(){
        this.user.click();
        element(by.id('logoutButton')).click();
    };

    this.cancel = function(){
        this.cancelButton.click();
    };

    this.goToSignUp = function(){
        this.goToSignUpButton.click();
    }
};

module.exports = LoginPage;