# React To-Do List

The React To-Do List is a simple and interactive web application that allows users to manage their tasks. With this application, you can easily add new tasks, mark tasks as completed, and remove tasks from your to-do list. All task data is stored in a JSON file for easy persistence.

## Features

- **Add New Tasks:** You can add new to-do items to your list by entering a task and pressing the "Add" button.

- **Mark Tasks as Completed:** When you've completed a task, simply click on it, and it will be visually marked as completed with a strikethrough.

- **Delete Tasks:** To remove a task from your list, click on the task, and it will be deleted instantly.

- **Data Persistence:** All your tasks are stored in a JSON file (`data/db.json`), so you won't lose your to-do list when you close the application.

## Getting Started

To run this application, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/react-todo-list.git
   cd react-todo-list
Install Dependencies:

bash
Copy code
npm install
Start the JSON Server:

Before running the application, you'll need to start the JSON server to handle task data. Use the following command:

bash
Copy code
npx json-server --port 3500 data/db.json -w
This command will start the JSON server, which will serve as the data source for your to-do list.

Start the React Application:

Start the development server for the React to-do list application with the following command:

bash
Copy code
npm start
Access the Application:

Open your web browser and visit http://localhost:3000 to start managing your to-do list.

Project Structure
src/: Contains the source code for the React to-do list application.
data/: Houses the JSON file (db.json) where task data is stored.
public/: Contains the static assets and the main HTML file.
Contributing
Contributions are welcome! If you'd like to contribute to this project or report issues, please follow the standard GitHub workflow:

Fork the repository.

Create a new branch for your feature or bug fix.

Make your changes and commit them with clear messages.

Push your changes to your fork.

Create a pull request.

