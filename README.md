Certainly! Here's a ready-made `README.md` file for your **Remind-me-later API** project — written in **English**, including all setup, dependencies, usage instructions, and Postman testing steps.
### ✅ `README.md`
````markdown
# Remind-me-later API
This is a simple Express.js and MongoDB-based backend API for storing reminders. Users can set a reminder by providing a date, time, message, and reminder type (SMS or Email). The actual sending of reminders is not implemented in this API.
---
## 📦 Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
## ⚙️ Prerequisites
Make sure you have the following installed:
- Node.js (https://nodejs.org)
- MongoDB (local or cloud instance)
- Postman (for testing API)
## 🚀 Getting Started
### 1. Clone the repository
```bash
git clone https://github.com/anulekha305/reminder.git
cd remind-me-later-api
````
### 2. Install dependencies
```bash
npm install
```
### 3. Set up environment variables
Create a `.env` file in the root directory and add:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/remindmelater
```
> You can change the Mongo URI if you're using a cloud MongoDB instance.
### 4. Start the server
```bash
node server.js
```
You should see:
```
MongoDB connected
Server running on port 5000
```
## 📬 API Endpoint
### `POST /api/reminders`
#### Description:
Save a new reminder to the database.
****************Request Method:*************
`POST`
#### URL:
```
http://localhost:5000/api/reminders
```
#### Headers:
Content-Type: application/json
```
#### Body:
Go to Postman → Body → raw → Select `JSON` → Then input:
```json
{
  "date": "2025-06-01",
  "time": "14:00",
  "message": "Team meeting",
  "reminderType": "Email"
}
```
Click **Send** to submit the request.
---
## ✅ Example Response
```json
{
  "message": "Reminder saved successfully"
}

