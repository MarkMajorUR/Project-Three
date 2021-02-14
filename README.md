
# Empower

## Descripttion 
This application will be used by people with an addiction that want to either reduce their use or eliminate it completely. The application is
deployed on Heroku.
[Empower](https://empower-me-2.herokuapp.com/)

## Table of Contents
1. [Installation Instructions](#installation)
2. [Usage](#usage)
3. [Contributing to this Application](#contributing)
4. [How to test](#how-to-test)
5. [License](#license)
6. [Questions](#questions)

## Installation
This application is deployed on Heroku and does not require any installation for use.

## Usage
Users can create an account and begin adding goals. The goal is an addiction they want to reduce or eliminate completely. They 
can enter a Title, Start Date, Completion Date, and a Reason for creating the goal. 
 
## Contributing
None

## How to Test
None

## Loading Seed Data
1. Pull latest code down from github
2. Open terminal and run 
    ```mongo```
    ```npm run seed ``` 
   This will create the empowerDB in mongo. Check Robo 3T to make sure it loads

3. Run ```npm start``` 

## API Calls
1. Use Postman to test the API calls to the DB.
2. Get all goals in the DB. Use a **GET** to http://localhost:3000/api/goals/#
3. Get all users in the DB. Use a **GET** to http://localhost:3000/api/users/#
4. Create/Register a user. Use a **POST** #http://localhost:3000/api/user/register#
    ```
    {
    "name":     "Bill Hibbens",
    "email":    "bihibbs@gmail.com",
    "password": "123456"
    }
    ```
5. User login with postman and an existing user POST http://localhost:3000/api/user/login
    ```
    {
    "email":    "bihibbs@gmail.com",
    "password": "123456"
    }
    ```

## Future Developments
We did not have a chance to implement all the features we wanted. A few items to complete in the future are:
* Fine tune the styling
* Include a calendar to help the user better track the progress. 
* Fully implement Login from the front end. There were issues using the auth-token when it was returned from the server side.

## Questions
Have questions? Contact the developer at: 
* GitHub Username: giocordova20
* Email: giocordova@gmail.com
