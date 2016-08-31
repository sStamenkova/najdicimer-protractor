/**
 * Created by SimonaS on 31/08/2016.
 */
var AdminUsersPage = function () {

    this.viewAndEdit = element.all(by.id('editUser')).last();
    this.deleteUser = element.all(by.id('deleteUser')).last();

    this.get = function(){
        browser.get('http://localhost:8000/admin/#/users');
    };

    this.editNameAndSurname = function(name, surname){
        this.viewAndEdit.click();
        element(by.id('changeInfo')).click();
        var nameInput = element(by.model('user.name'));
        var surnameInput = element(by.model('user.surname'));
        nameInput.clear();
        surnameInput.clear();
        nameInput.sendKeys(name);
        surnameInput.sendKeys(surname);
        element(by.id('saveChanges')).click();
    };

    this.editUsername = function(username){
        this.viewAndEdit.click();
        element(by.id('changeInfo')).click();
        var usernameInput = element(by.model('user.username'));
        usernameInput.clear();
        usernameInput.sendKeys(username);
        element(by.id('saveChanges')).click();
    };

    this.editEmail = function (email) {
        this.viewAndEdit.click();
        element(by.id('changeInfo')).click();
        var emailInput = element(by.model('user.email'));
        emailInput.clear();
        emailInput.sendKeys(email);
        element(by.id('saveChanges')).click();
    };

    this.editPassword = function (password){
        this.viewAndEdit.click();
        element(by.id('changeInfo')).click();
        var passwordInput = element(by.model('user.password'));
        passwordInput.clear();
        passwordInput.sendKeys(password);
        element(by.id('saveChanges')).click();
    };

    this.editDate = function(date){
        this.viewAndEdit.click();
        element(by.id('changeInfo')).click();
        var dateInput = element(by.model('user.birthDate'));
        dateInput.clear();
        dateInput.sendKeys(date);
        element(by.id('saveChanges')).click();
    };

    this.delete = function () {
        this.deleteUser.click();
    };

};

module.exports = AdminUsersPage;