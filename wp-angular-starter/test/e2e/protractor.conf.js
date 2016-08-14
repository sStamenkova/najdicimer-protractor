//jshint strict: false
exports.config = {

    specs: [
        "./new-listing-page/newlisting.spec.js"
    ],

    capabilities: {
        "browserName": "chrome"
    },

    framework: "jasmine",

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }

};
