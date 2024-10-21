Users Information website: React & Typescript Exercise:

LTX Onboarding is a web-based application built using React, TypeScript, and Zustand for state management. The project serves as an onboarding exercise, demonstrating essential web development concepts such as fetching data from APIs, handling routing, managing state with Zustand, and implementing user profile management features.

Table of Contents

    •	Features
    •	Installation
    •	Usagreact-exercise/src/components/edit-profile-form/EditPorfileForm.scsse
    •	API Reference
    •	Technologies
    •	Contributing
    •	License

Features

    •	Fetch and display user data from a local JSON server
    •	User profile management (view, edit, and delete user details)
    •	React Router for navigation between users lists and specific profile pages
    •	Zustand for efficient state management
    •	Responsive UI using SCSS
    •	API integration with a local json-server to simulate backend services

Installation

To get started with the project, follow these steps:

    1.	Clone the repository:

git clone git@github.com:shirrashko/LTX-onboarding.git
cd "react-exercise"

    2.	Install dependencies:

Make sure you have Node.js installed. Then run:

npm install

    3.	Run the JSON server:

Start the json-server for simulating a backend server to fetch users:

json-server --watch db.json --port 4000

    4.	Start the development server:

Start the React application:

npm run dev

    5.	Visit the app:

Open your browser and visit:

http://localhost:3000

Usage

    1.	Home Page:

Displays a list of users fetched from the JSON server. 2. User Profiles:
Navigate to a user’s profile page by clicking on their name in the list. 3. Editing Profiles:
From the user profile page, edit the user’s details, which are reflected in the application state. 4. Add / Delete Users: Add new users or delete existing ones using the corresponding form and buttons.

API Reference

The application uses a json-server to simulate a backend API. The following endpoints are available:

    •	GET /users: Fetch all users.
    •	GET /users/:id: Fetch a single user by ID.

Technologies

    •	React: A JavaScript library for building user interfaces.
    •	TypeScript: Superset of JavaScript that adds static typing.
    •	Zustand: State management library for React.
    •	React Router: For routing and navigation between pages.
    •	SCSS: CSS preprocessor for modular and scalable styles.
    •	json-server: A fake REST API to simulate data fetching and mutation.
