exports.config = {

    specs: [
        "./home-page/homepage.spec.js",
        "./sign-up-page/signup.spec.js",
        "./login-page/login.spec.js",
        "./new-listing-page/newlisting.spec.js",
        "./listing-interaction/listinginteraction.spec.js",
        "./received-messages-page/receivedmessages.spec.js",
        "./profile-page/profilepage.spec.js",
        "./admin-page/adminpage.spec.js",
        "./admin-reports-page/adminreportspage.spec.js",
        "./admin-users-page/adminuserspage.spec.js"
    ],

    capabilities: {
        "browserName": "chrome"
    },

    framework: "jasmine",

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }

};
