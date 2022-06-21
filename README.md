# Auth0ExerciseFull

The purpose of this application is to demonstrate how to use the client and action endpoints of the Auth0 Management API V2. The use of authentication and Role Based Access Control is also shown within this application. In order to take advantage of this application you will also need to use the sample Express API which can be found here: https://github.com/cornejog553/Auth0ExpressAPI


#Running the Sample Application


The sample can be run locally, by cloning the repository to your machine and then following the steps below.

##Create a new Regular Web Application in Auth0


##Specify Auth0 Credentials in the .env file


Change the values of SECRET, BASEURL, CLIENTID, CLIENTSECRET, and ISSUER to match what is found in your dashboard.

##Installation


After cloning the repository, run:

$ npm install
This will install all of the necessary packages in order for the sample to run.


##Running the Application


This version of the application uses an Express server that can serve the site. To start the app from the terminal, run:

$ npm start

In order to access the secure page you have to be logged in. Log in as an admin user to view the Client and action data.
