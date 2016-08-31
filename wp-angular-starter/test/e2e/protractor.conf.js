//jshint strict: false
exports.config = {

    specs: [
        "./home-page/homepage.spec.js",
        "./sign-up-page/signup.spec.js",
        "./login-page/login.spec.js",
        "./new-listing-page/newlisting.spec.js",
        "./listing-interaction/listinginteraction.spec.js",
        "./profile-page/profilepage.spec.js",
        "./admin-page/adminpage.spec.js",
        "./admin-reports-page/adminreports.js"
    ],

    capabilities: {
        "browserName": "chrome"
    },

    framework: "jasmine",

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }

};
