/**
 * Created by SimonaS on 13/08/2016.
 */
var SignUpPage = function(){

    this.name = element(by.model('name'));
    this.surname = element(by.model('surname'));
    this.email = element(by.model('email'));
    this.username = element(by.model('username'));
    this.day = element(by.model('day'));
    this.month = element(by.model('monthT'));
    this.year = element(by.model('year'));
    this.password = element(by.model('password'));
    this.confirm = element(by.model('confirm'));
    this.signupButton = element(by.css('.btn-success'));
    this.cancelButton = element(by.css('.btn-danger'));
    this.goToLoginButton = element(by.css('.btn-warning'));
    
    this.get = function () {
        browser.get('http://localhost:8000/#/signup');
    };

    this.signup = function(name, surname, email, username, password, confirm){
        this.name.sendKeys(name);
        this.surname.sendKeys(surname);
        this.email.sendKeys(email);
        this.username.sendKeys(username);
        this.day.element(by.cssContainingText('option', '10')).click();
        this.month.element(by.cssContainingText('option', 'Јануари')).click();
        this.year.element(by.cssContainingText('option', '1995')).click();
        this.password.sendKeys(password);
        this.confirm.sendKeys(confirm);
        this.signupButton.click();
    };

    this.cancel = function () {
      this.cancelButton.click();
    };

    this.goToLogin = function(){
      this.goToLoginButton.click();
    };
};

module.exports = SignUpPage;