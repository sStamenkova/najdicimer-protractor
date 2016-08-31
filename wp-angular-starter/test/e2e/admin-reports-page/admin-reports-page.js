/**
 * Created by SimonaS on 31/08/2016.
 */
var AdminReportsPage = function () {
    this.markRead = element.all(by.id('markReportRead')).get(0);
    this.markUnread = element.all(by.id('markReportUnread')).get(0);
    this.viewReport = element.all(by.id('openReport')).get(0);

    this.get = function(){
        browser.get('http://localhost:8000/admin/#/reports');
    };

    this.markAsRead = function(){
        this.markRead.click();
    };

    this.markAsUnread = function(){
        this.markUnread.click();
    };

    this.viewReportDetails = function () {
        this.viewReport.click();
    };

    this.deleteReportedListing = function () {
        this.viewReport.click();
        element(by.id('deleteListing')).click();
    };
};

module.exports = AdminReportsPage;