//jshint strict: false
exports.config = {

    specs: [
        "./home-page/homepage.spec.js"
    ],

    capabilities: {
        "browserName": "chrome"
    },

    framework: "jasmine",

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }

};
