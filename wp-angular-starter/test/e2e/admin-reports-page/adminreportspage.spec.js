/**
 * Created by SimonaS on 31/08/2016.
 */

var AdminReportsPage = require('./admin-reports-page.js');
var LoginPage = require('../login-page/login-page.js');

describe('Admin Reports Page Test', function () {
    var adminReportsPage;
    var loginPage;

    beforeAll(function () {
        loginPage = new LoginPage();
        loginPage.get();
        loginPage.login('admin', 'admin12345');
        browser.sleep(2000);
    });
    
    beforeEach(function(){
        adminReportsPage = new AdminReportsPage();
        adminReportsPage.get();
    });
    
    it('should mark report as read', function () {
        var report = element.all(by.repeater('report in reports')).get(0);
        adminReportsPage.markAsRead();
        expect(report.getAttribute('class')).not.toContain('well');
    });

    it('should mark report as unread', function () {
        var report = element.all(by.repeater('report in reports')).get(0);
        adminReportsPage.markAsUnread();
        expect(report.getAttribute('class')).toContain('well');
    });

    it('should show report content', function () {
        adminReportsPage.viewReportDetails();
        var content = element(by.css('div.well')).getText();
        expect(content).toEqual('Inappropriate content');
    });

    it('should delete a reported listing', function () {
        adminReportsPage.deleteReportedListing();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/admin/#/reports');
    });

    afterAll(function(){
        browser.get('http://localhost:8000/#/');
        loginPage.logout();
    });
});