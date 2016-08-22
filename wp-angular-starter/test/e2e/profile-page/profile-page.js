/**
 * Created by SimonaS on 19/08/2016.
 */
var ProfilePage = function(){

    this.editUsername = element(by.model('user.username'));
    this.editName = element(by.model('user.name'));
    this.editSurname = element(by.model('user.surname'));
    this.editEmail = element(by.model('user.email'));
    this.editDate = element(by.model('user.birthDate'));
    this.editPassword = element(by.model('user.password'));
    this.saveButton = element(by.css('.btn-warning'));
    this.cancelButton = element(by.css('.btn-default'));
    this.user = element(by.id('userName'));

    this.get = function () {
        browser.get('http://localhost:8000/#/profile');
    };

    this.changeUsername = function (username) {
        this.editUsername.clear();
        this.editUsername.sendKeys(username);
        this.saveButton.click();
    };

    this.changeName = function (name) {
        this.editName.clear();
        this.editName.sendKeys(name);
        this.saveButton.click();
    };

    this.changeSurname = function (surname) {
        this.editSurname.clear();
        this.editSurname.sendKeys(surname);
        this.saveButton.click();
    };

    this.changeEmail = function (email) {
        this.editEmail.clear();
        this.editEmail.sendKeys(email);
        this.saveButton.click();
    };
    
    this.changeDate = function (date) {
        this.editDate.clear();
        this.editDate.sendKeys(date);
        this.saveButton.click();
    };

    this.changePassword = function (password) {
        this.editPassword.clear();
        this.editPassword.sendKeys(password);
        this.saveButton.click();
    };

    this.cancel = function () {
        this.cancelButton.click();
    };
    
    this.goToProfile = function (){
        this.user.click();
        var profile = element(by.id('profilePage'));
        profile.click();
    };
};

module.exports = ProfilePage;