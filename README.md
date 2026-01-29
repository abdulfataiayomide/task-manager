 Task Manager – React Frontend

This project is a simple **React-based task management application** built as part of a frontend intern assessment. It demonstrates clean component structure, basic CRUD operations, mock API integration, and readiness to connect to a real backend API.

 Features
 **List Tasks**: Fetch and display tasks on page load
 **Create Task**: Add new tasks using a form
 **Update Task**: Inline update of task status and priority
 **Delete Task**: Remove tasks with confirmation
 **User Experience**: Loading indicators and simple error messages

 Tech Stack

 **React** (functional components & hooks)
 **JavaScript**
 **CSS** (custom styling)
 **Mock service layer** with simulated API calls

 Setup & Run
bash
npm install
npm run dev


Open your browser at:
http://localhost:5173

 API Configuration

The API base URL is stored in a single place for easy configuration:

env
VITE_API_URL=http://localhost:5000


This value is accessed via `src/config.js`.

---

## 🧪 Mock Mode (Current Setup)

* The application runs in **mock mode by default**
* Task data is stored in memory
* Network requests are simulated using `setTimeout`
* All CRUD operations (Create, Read, Update, Delete) work without a backend

---

## 🔁 Switching to a Real Backend

To connect the app to a real API:

1. Open `src/services/taskService.js`
2. Set:

   ```js
   const USE_MOCK = false;
   ```
3. Update the API base URL in `.env`
4. Ensure the backend exposes the following endpoints:

   * `GET /api/tasks`
   * `POST /api/tasks`
   * `PUT /api/tasks/:id`
   * `DELETE /api/tasks/:id`
No UI or component changes are required.

📁 Project Structure

src/
 ├─ components/
 │   ├─ TaskForm.jsx      # Create task form
 │   └─ TaskList.jsx      # Task list with inline editing
 ├─ services/
 │   └─ taskService.js    # API & mock logic
 ├─ config.js             # API base URL configuration
 ├─ App.jsx               # Main container & state management
 └─ index.css             # Global styles

 Components Overview

 **TaskForm** – Handles task creation
 **TaskList** – Displays tasks and supports inline updates
 **App** – Manages state, API calls, loading, and error handling

(Screenshots are included in the repository.)


<img width="1364" height="677" alt="image" src="https://github.com/user-attachments/assets/b3fbb92f-89d0-4752-aa45-ce7084c0247a" />


<img width="1361" height="686" alt="image" src="https://github.com/user-attachments/assets/b20611f9-45f1-4554-8c67-76c4fb5a35ab" />

<img width="1340" height="682" alt="image" src="https://github.com/user-attachments/assets/2c167558-cd38-4673-b336-06d672c5eade" />
