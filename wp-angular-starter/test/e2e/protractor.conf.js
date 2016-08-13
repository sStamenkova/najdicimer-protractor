//jshint strict: false
exports.config = {

    specs: [
        "./sign-up-page/signup.spec.js",
        "./login-page/login.spec.js"
    ],

    capabilities: {
        "browserName": "chrome"
    },

    framework: "jasmine",

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }

};
