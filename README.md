# Project Mangement Tool

This app is a Project Management tool with authentication and cloud functionalities where users can create Projects, edit them, delete them, and keep a track of them all in one SPA. To build this I used React, Redux, React-Redux, Thunk, and Firebase.
This app will have authentication(sign-up & sign-in) and features like Cloud security, Route Guarding, Cloud functions.
# Tech Stack
* React
* Redux
* React-redux
* Redux-thunk
* React-router-dom
* Materialize-css
* Firebase
* React-redux-firebase
* Redux-firestore
* Moment.js
* Cloud Functions
* Firebase Auth
* Firebase Security
* Firebase Hosting

# Build
This SPA is built using many packages front-end was mostly consists of React, Materialize-CSS and Redux for state-management. But soon there was a requirement of asynchronous behavior, for such condition Redux-Thunk was used to allow asynchronous communication between the React app and the Firebase DB. Redux-Thunk is a middleware that is a function and unlike a regular function, it halts the dispatch just like ES6 Generators. It performs async requests and then resumes the dispatch after getting all the information or sending information. In most cases, external data is grabbed and passed to the reducers. The dates are formatted using Moment.js.
All the pages are routed using a package called React-router-dom. The connection between React and Redux is made by using a package called React-Redux. 
Firebase packages like React-redux-firebase & Redux-firestore allows us to connect to the firestore and pull data from firestore and render it.

The backend was mostly consists of Firebase - the database is a No-SQL Firestore DB, the server-side code was implemented by using Firebase Cloud Functions and authorisation and authentication of users was controlled by using Firebase Auth.
The app is secured using Firebase Security rules and it is hosted using Firebase.

# Future Scope
This app will have authentication(sign-up & sign-in) and real-time notifications so anything happens like if you delete a project or create a new project or edit notification will be shown in the sidebar in real-time.
