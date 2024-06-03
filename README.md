Bulk Mailer App with MERN Stack and SendGrid API

This project is a bulk mailer application that allows users to send customized mails to groups of people, using the MERN (MongoDB, Express, React, Node.js) stack and the SendGrid API.
The application is built using the MERN (MongoDB, Express, React, Node.js) stack, a popular full-stack JavaScript framework for building web applications.
MongoDB is used as the database to store user data, mail groups, and templates.
Express is used as the backend framework to handle HTTP requests and routes.
React is used as the frontend library to create the user interface.
Node.js is used as the server-side platform to run the backend code.
The SendGrid API is used to send bulk mails to groups of people.
Axios is used to make API requests to the backend.
Bootstrap is used for styling the user interface.
The application can be customized and extended to include additional features or functionality.
The application can be used as a learning resource for those interested in building bulk mailer applications or similar projects.

Project Setup

To run this project on your local machine, follow these steps:
Navigate to the project backend directory using cd backend
Install dependencies using npm install
Create a .env file in the root directory and add the following variables:
BASEURL=/api/v1
DATABASE= <your-mongodb-url>
Secret_Code= <your-jwt-secret>
Mail_Secret= <your-sendgrid-api-key>
Start the development server using npm start
Navigate to the project frontend directory using cd frontend
Install dependencies using npm install
Start the development server using npm start
Features
Users can sign up and log in to their account.
Users can save mail groups and templates.
Users can select a group and choose a custom message or template to send.
Users can view the details of sent mails in the sent section.

Usage

To use the application, follow these steps:
Sign up and log in to your account.
Create a mail group by entering a name and email addresses.
Create a mail template by entering a subject and body.
To send a mail, select a group and choose a custom message or template.
After sending the mail, view the details of the sent mail in the sent section.

Technologies Used

MongoDB
Express
React
Node.js
SendGrid API
Axios
Bootstrap
