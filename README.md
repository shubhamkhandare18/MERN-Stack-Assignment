MERN Stack Assignment
This project is a full-stack web application that showcases a transaction dashboard. It uses the MERN stack (MongoDB, Express, React, Node.js) and features APIs to manage transactions and visualize data using charts and tables.

Features
Backend:

Fetch and initialize data from a third-party API.
Provide RESTful APIs for:
Listing transactions with pagination and search.
Calculating monthly transaction statistics.
Generating data for bar and pie charts.
Combining multiple API responses into a single API call.
Frontend:

Interactive dashboard with:
Transaction table (searchable and paginated).
Monthly transaction statistics.
Bar chart for price ranges.
Pie chart for product categories.
Month selection dropdown.
Real-time search and navigation.
Technologies Used
Frontend:

React.js
React-Bootstrap
Axios
Backend:

Node.js
Express.js
MongoDB (Mongoose ODM)
Others:

Chart.js for data visualization
Bootstrap for UI styling
Axios for API communication
Prerequisites
Make sure you have the following installed:

Node.js (v14 or later)
MongoDB (local or cloud instance)
Git (for version control)
Setup Instructions
Clone the Repository
bash
Copy code
git clone https://github.com/your-username/mern-stack-assignment.git
cd mern-stack-assignment
Backend Setup
Navigate to the backend folder:

bash
Copy code
cd backend
Install dependencies:

bash
Copy code
npm install
Create a .env file in the backend folder with the following:

env
Copy code
PORT=5000
MONGO_URI=your_mongo_db_connection_string
Start the backend server:

bash
Copy code
npm start
The backend will be running on http://localhost:5000.

Frontend Setup
Navigate to the frontend folder:

bash
Copy code
cd frontend
Install dependencies:

bash
Copy code
npm install
Start the React development server:

bash
Copy code
npm start
The frontend will be running on http://localhost:3000.

Usage
Open your browser and navigate to http://localhost:3000.
Use the dropdown to select a month.
View and interact with:
Transaction Table: Search and paginate through transactions.
Statistics Box: View total sales, sold items, and unsold items for the selected month.
Bar Chart: See price ranges for the selected month.
Pie Chart: View product categories and their counts.
API Documentation
1. Initialize Database
Endpoint: GET /api/init

Description: Fetches data from the third-party API and seeds the database.

2. List Transactions
Endpoint: GET /api/transactions

Query Parameters:

month (required): The month to filter transactions.
search (optional): Search term for title, description, or price.
page (optional): Page number (default: 1).
3. Transaction Statistics
Endpoint: GET /api/statistics

Query Parameters:

month (required): The month to calculate statistics.
4. Bar Chart Data
Endpoint: GET /api/barchart

Query Parameters:

month (required): The month to calculate price ranges.
5. Pie Chart Data
Endpoint: GET /api/piechart

Query Parameters:

month (required): The month to categorize items.
6. Combined Data
Endpoint: GET /api/combined

Query Parameters:

month (required): The month for combined data.
Folder Structure
arduino
Copy code
mern-stack-assignment/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── db.js
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.js
│   │   └── index.js
│   └── public/
├── README.md
