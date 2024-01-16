# BookMyDoc
## A Comprehensive Appointment Booking System

[![Build Status](https://travis-ci.org/yourusername/yourrepository.svg?branch=master)](https://travis-ci.org/yourusername/yourrepository)

BookMyDoc is an open-source project developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack.

## Features

- **User Registration and Authentication:**
  - Patients and doctors can register on the portal.
  - Authentication mechanism secures user accounts.

- **Patient View:**
  - Search for nearby doctors based on specific criteria.
  - Book available time slots with selected doctors.
  - Receive notifications about appointment status (accepted/rejected).

- **Doctor View:**
  - Register and fill out an application form.
  - Verification process by the admin.
  - Set and manage available time slots for appointments.
  - Receive notifications for new appointment requests.
  - Accept or reject appointment requests.

- **Admin View:**
  - Verify doctor applications.
  - Manage doctor accounts.
  - Block or unblock users and doctors.
  - Monitor and handle system-related issues.

- **Database (MongoDB):**
  - Store user data (patients, doctors, admins).
  - Store doctor application information.
  - Store appointment details.

- **Notification System:**
  - Notify doctors about new appointment requests.
  - Notify patients about appointment status changes.

- **Authorization and Role-Based Access Control (RBAC):**
  - Differentiate access levels and permissions for patients, doctors, and admins.

- **Frontend (React.js):**
  - Implement user interfaces for patients, doctors, and admins.
  - Display available doctors and time slots.
  - Handle user interactions and form submissions.

- **Backend (Node.js and Express.js):**
  - Implement APIs for user registration, authentication, and authorization.
  - Handle doctor verification process.
  - Manage appointment booking, acceptance, and rejection.

- **Real-Time Updates:**
  - Implement real-time updates of activity using notification.

- **Security:**
  - Implement secure authentication and authorization practices.
  - Sanitize and validate user inputs to prevent security vulnerabilities.

- **Deployment:**
  - Deploy the application on a hosting platform Render.

## Tech

This project uses a number of open source projects to work properly:

- [ReactJS] - For FrontEnd
- [NodeJS] - For BackEnd
- [Mongodb] - For database
- [Cloudinary] - For storage of images
- [Materialize] - Great UI boilerplate for modern web apps
- [node.js] - Evented I/O for the backend
- [Express] - Fast node.js network app framework

## Installation

This Website requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
npm i
npm start
```
For production environments...

```sh
npm install --production
NODE_ENV=production node app
```

## Development

Want to contribute? Great!
Please feel free to ask any doubt and start contribution ..........

Verify the deployment by navigating to your server address in
your preferred browser.
```sh
127.0.0.1:4000
```

## License

Ravi Ranjan Kumar

**Free Software, Hell Yeah!**
