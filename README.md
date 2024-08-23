# Linktik-prueba

Linktik-prueba is a full-stack application with an Angular frontend and an Express.js backend.

## Project Structure

- `front/`: Angular frontend application
- `back/`: Express.js backend application

## Prerequisites

- Node.js (version 18.x or higher recommended)
- npm (version 8.x or higher)
- Angular CLI (version 18.2.0)
- MongoDB (Make sure you have a MongoDB instance running)

## Frontend (Angular)

### Installation

1. Navigate to the frontend directory:
   ```
   cd front
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Running the Frontend

To start the development server:


The application will be available at `http://localhost:4200`.

### Building the Frontend

To create a production build:


This will create a `dist/` directory with the built assets.

### Frontend Features

- Angular 18.2.0
- Angular Material for UI components
- Tailwind CSS for styling
- Server-Side Rendering with Angular Universal
- Toastr for notifications
- Notiflix for additional UI notifications

## Backend (Express.js)

### Installation

1. Navigate to the backend directory:
   ```
   cd back
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Configuration

1. Create a `.env` file in the root of the `back` directory.
2. Add the following environment variables (adjust as needed):
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/your_database_name
   JWT_SECRET=your_jwt_secret_key
   ```

### Running the Backend

To start the development server with hot-reloading:



The backend will be available at `http://localhost:3000` (or the port specified in your .env file).

### Backend Features

- Express.js web server
- MongoDB integration with Mongoose
- JWT authentication
- File upload support with Multer
- API documentation with Swagger
- CORS support

### API Documentation

API documentation is available via Swagger UI. After starting the server, visit:



## Running the Full Stack Application

1. Start the backend server (from the `back` directory):
   ```
   npm run dev
   ```

2. In a new terminal, start the frontend development server (from the `front` directory):
   ```
   ng serve
   ```



