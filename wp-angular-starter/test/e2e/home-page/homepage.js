/**
 * Created by SimonaS on 17/08/2016.
 */

var HomePage = function(){

    this.searchInput = element(by.model('keyword'));
    this.searchButton = element(by.css('.btn-secondary'));
    this.loginButton = element(by.id('loginButton'));
    this.signupButton = element(by.id('signupButton'));
    
    this.get = function(){
      browser.get('http://localhost:8000/#/');
    };

    this.search = function(keyword){
      this.searchInput.sendKeys(keyword);
      this.searchButton.click();
    };

    this.goToLogin = function(){
      this.loginButton.click();
    };

    this.goToSignUp = function(){
      this.signupButton.click();
    };
};

module.exports = HomePage;