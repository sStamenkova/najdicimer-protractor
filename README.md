# Najdi cimer

## Description
This repository is published with the intention to test the initial project found at /dMeshko/WP_Project.
The project represents the source code for a single-page web application intended for simple & easy finding roommates by posting listings.

## Development
The project is being tested using Protractor, which is an end-to-end test framework for Angular JS.

## How to run?
First open the web-programming-spring-mvc-starter in any IDE and run the Maven configuration. This will deploy your API on

    http://localhost:8080
Next, open the wp-angular-starter in a new tab of your IDE. Navigate to the wp-angular-starter folder using the command line and run

    npm install
    bower install
This will install the node modules and bower components which are needed to start your app. In the 'gulpfile.js' file run all the previous tasks then run the 'build' task, and after it finishes building run the 'default' task. The application will be deployed on

    http://localhost:8000
In order to run the protractor tests, navigate in the wp-angular-starter folder using the command line and type

    npm run protractor
This will run the tests and provide their output on the command line.

## Requirements
In order for the tests to run correctly, in your local database you need to have one admin user, at least one listing created by one of the users and you need to enter the correct credentials for the users when using the login function in the tests.
