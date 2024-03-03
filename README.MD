# AUTH PROJECT - Using MERN Stack

**AUTH PROJECT** is a full-stack web application built using the MERN (MongoDB, Express.js, React, Node.js) stack.

It provides user **authentication** and **authorization** features, allowing users to `register`, `login`, `update their profile`, `change password`, `reset password`, and more.

## Hosted Link For Demo With Video

### [Frontend Live](https://auth-project-mern-stack.vercel.app) | [Backend Live](https://backendforlpu.onrender.com) | [Video Link](https://youtu.be/mO-7eyeVPiA)

## Backend Tech Stack

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing user data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **bcrypt**: Library for hashing passwords.
- **jsonwebtoken**: Library for generating JSON Web Tokens for user authentication.
- **cookie-parser**: Middleware for parsing cookies in Express.
- **cors**: Middleware for handling Cross-Origin Resource Sharing.
- **dotenv**: Library for loading environment variables.
- **nodemailer**: Library for sending emails.
- **validator**: Library for input validation.

## Frontend Tech Stack

- **React**: JavaScript library for building user interfaces.
- **Chakra UI**: Component library for React applications.
- **Redux Toolkit**: State management library for React.
- **axios**: HTTP client for making requests to the backend.
- **framer-motion**: Animation library for React.
- **protected-route-react**: Library for handling protected routes in React.
- **react-helmet**: Library for managing document head tags in React.
- **react-hot-toast**: Library for displaying toasts in React.
- **react-icons**: Library for using icons in React.
- **react-redux**: Official Redux bindings for React.
- **react-router-dom**: Library for handling routing in React.
- **vite**: Fast build tool for React applications.

## Set Up Environment Variables

Create a `.env` file in both the backend and frontend directories and add necessary variables.

Example `.env` file for the backend:

```base

PORT=4000

MONGODB_URI=your_mongo_db_connection_string

JWT_SECRET=your_secret_key_for_jwt

FRONTEND_URL="https://auth-project-mern-stack.vercel.app"

SMTP_HOST=sandbox.smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USER=your_mailtrap_username
SMTP_PASS=your_mailtrap_password

MY_MAIL=example@gmail.com

```

## Hosting Platforms

- `Frontend:` The React application can be hosted on **Vercel**. Configure Vercel to deploy from your **GitHub** repository for automatic deployments.
- `Backend: `The Node.js backend can be hosted on **Render**. Configure Render to deploy from your **GitHub** repository for automatic deployments.

## Additional Information

- Ensure that `MongoDB` is running, and the connection string is correctly set in the .env file.
- For testing email functionality, `Mailtrap` is used. Check the Mailtrap dashboard for received emails.

## Screenshot

![App Screenshot](https://raw.githubusercontent.com/BCAPATHSHALA/AUTH-PROJECT-MERN-STACK/main/AUTH%20PROJECT%20MERN%20STACK.png)
