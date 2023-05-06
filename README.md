# QueueEase

## Teammembers: 
- Victor Li(wentaol4)
- Kevin Yan(guanwen2)
## Summary

Introducing "QueueEase", an innovative online waitlist platform designed to streamline and improve the waitlist experience across various industries. QueueEase offers user-friendly features and a scalable architecture, catering to both small businesses and large enterprises. Our ultimate goal is to transform the way waitlists are managed, elevating convenience and satisfaction for everyone involved.

## Demo

**Link to Our Final Presentation Video:** [Insert Demo URL]

## Technical Architecture

QueueEase is built using Node.js and leverages several npm packages:

- mysql2: Database connection and management
- @faker-js/faker: Random email address generation for testing purposes
- express: Web application framework
- body-parser: Request body parsing middleware

## Installation Instructions

1. Clone the repository to your local machine.
2. Run `npm install` to install the necessary dependencies.
3. Create a `.env` file and configure your MySQL settings, including host, port, user, password, and database.
4. Run the application using `npm start`.
5. Access the web application at `http://localhost:3000`.

## Code Overview

The application's main file `app.js` consists of the following sections:

1. Package imports and app configuration.
2. MySQL connection setup and testing using the `mysql2` package.
3. Commented out sections for inserting sample data into the database using various methods, including the `@faker-js/faker` package for generating random email addresses.
4. Main application routes for the home page, user registration, and some additional example routes.
5. Application startup on port 3000.
