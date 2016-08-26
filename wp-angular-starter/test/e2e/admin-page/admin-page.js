/**
 * Created by SimonaS on 22/08/2016.
 */

var AdminPage = function(){

    this.usersButton = element(by.id('usersList'));
    this.reportsButton = element(by.id('reports'));
    this.mainButton = element(by.css('.btn-success'));

    this.get = function(){
       browser.get('http://localhost:8000/admin/#/');
    };

    this.goToUsers = function(){
       this.usersButton.click();
    };

    this.goToReports = function(){
       this.reportsButton.click();
    };

    this.goToMainPage = function () {
       this.mainButton.click();
    };
};

module.exports = AdminPage;