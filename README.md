#  Adaptive IQ Assessment System

An interactive web-based Adaptive IQ Assessment System designed to evaluate users through dynamically generated IQ questions. The application adjusts the assessment flow based on user interactions and stores user activity securely using MongoDB Atlas.

##  Features

* User registration and login authentication.
* Adaptive IQ assessment with dynamically presented questions.
* Stores user login details securely in MongoDB Atlas.
* Records user responses and assessment sessions.
* Calculates and generates IQ assessment results.
* Responsive and user-friendly interface.
* Separate frontend and backend architecture.

##  Tech Stack

### Frontend

* React.js
* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

##  Project Structure

adaptive-iq-assessment/

* client/ → React frontend
* server/ → Express backend
* server/models/ → Database schemas
* server/routes/ → API routes

##  Database Functionality

MongoDB Atlas is used to store:

* User registration and login information.
* IQ assessment questions.
* User responses submitted during assessments.
* Game/session details.
* Assessment history and generated results.

##  How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/adaptive-iq-assessment.git
cd adaptive-iq-assessment
```

### 2. Install Backend Dependencies

```bash
npm install
```

### 3. Install Frontend Dependencies

```bash
cd client
npm install
cd ..
```

### 4. Configure MongoDB Atlas

Create a `.env` file inside the project root or server directory and add:

```env
MONGO_URI=your_mongodb_atlas_connection_string
```

Update the backend to use:

```javascript
mongoose.connect(process.env.MONGO_URI)
```

instead of hardcoding the connection string.

### 5. Start the Backend Server

```bash
node server/server.js
```

The backend runs on:

```text
http://localhost:8000
```

### 6. Start the Frontend

Open another terminal:

```bash
cd client
npm start
```

The frontend runs on:

```text
http://localhost:3000
```

##  Future Enhancements

* Admin dashboard for managing questions.
* Performance analytics and reports.
* Difficulty-level customization.
* Enhanced assessment insights.

## 👥 Academic Project

This project was developed as an academic initiative to demonstrate the integration of web technologies, adaptive assessment concepts, and cloud database services to build an intelligent IQ evaluation platform.
