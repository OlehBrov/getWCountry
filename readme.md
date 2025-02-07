# Fullstack Application (Frontend & Backend)

This is a fullstack application containing both frontend and backend components. The frontend is built using **Next.js**, and the backend is built with **Express.js**.

## **Project Structure**
```text
/ (root)
├── frontend/ (Next.js frontend)
├── backend/ (Express backend)
└── README.md (This file)
```


## Prerequisites
Make sure you have the following installed:

Node.js (v18+ recommended)
npm or yarn



## Setup Instructions

### 1. Clone the Repository
``` text
git clone https://github.com/yourusername/your-repo-name.git
```
Navigate into the project directory:
``` text
cd your-repo-name
```
### 2. Install Dependencies
Install dependencies for both frontend and backend projects.
Navigate to the frontend folder and install dependencies:
``` text
cd frontend
npm install
```
Navigate to the backend folder and install dependencies:
``` text
cd ../backend
npm i
```

# Running the Application
## Frontend (Development Mode)
1. Navigate to the frontend folder:

```
cd frontend
```
2. Run the development server:
```
npm run dev
```
3. Open your browser and navigate to:
```http://localhost:3000```

## Backend (Development Mode)
1. Navigate to the backend folder:
```
cd backend
```


2. Start the backend development server:

```
npm run dev
```
The backend server will run at: ```http://localhost:9999```


# Building for Production
## Frontend
1. Navigate to the frontend folder:

```
cd frontend
```
2. Build the project:
```
npm run build
```
3. Start the production server:
```
npm run start
```

## Backend
1. Navigate to the backend folder:
```
cd backend
```
2. Start the backend in production mode:
```
npm run start
```

# Technologies Used
## Frontend
Next.js: React-based framework for server-side rendering and static site generation.\
React\
Tailwind CSS: Utility-first CSS framework.\
Chart.js: JavaScript library for creating charts.
## Backend
Express.js: Web framework for Node.js.\
dotenv: Environment variable management.\
CORS: Middleware for handling Cross-Origin Resource Sharing.\
Axios: Promise-based HTTP client for making API requests.

## License

[MIT](https://choosealicense.com/licenses/mit/)