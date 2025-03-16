
📝 To-Do List Project
Hi, I am Harsh! 👋
Welcome to my To-Do List web application! This project is built using HTML, CSS, JavaScript, and Tailwind CSS, with Git for version control. It’s designed to help users manage their tasks efficiently with features like adding, editing, deleting, and filtering tasks.

🚀 Features
✅ Add Task: Add new tasks with a title, description, due date, and priority.
✏️ Edit Task: Edit existing tasks by entering the task ID and updating the details.
🗑️ Delete Task: Delete tasks by entering the task ID.
🔍 Filter Tasks: Filter tasks by date range.
✔️ Mark All as Done: A button to mark all tasks as completed (placeholder functionality).
📋 Task List: Displays all tasks with their details (ID, title, description, due date, priority, and date added).

🖼️ Modals
The project uses the following modals for a smooth user experience:

Add Task Modal:

Slides in from the left.

Contains a form to add a new task.

Edit Task Modal:

Slides in from the right.

Contains a form to edit an existing task by entering the task ID.

Delete Task Modal:

Slides in from the right.

Contains a form to delete a task by entering the task ID.

Filter Task Modal:

Slides in from the left.

Contains a form to filter tasks by date range.

Task List Modal:

Slides in from the right.

Displays all tasks in a list.

🛠️ Technologies Used
Technology	Logo
HTML	<img src="https://img.icons8.com/color/48/000000/html-5.png" alt="HTML" width="30">
CSS	<img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS" width="30">
JavaScript	<img src="https://img.icons8.com/color/48/000000/javascript.png" alt="JavaScript" width="30">
Tailwind CSS	<img src="https://img.icons8.com/color/48/000000/tailwindcss.png" alt="Tailwind CSS" width="30">
Git	<img src="https://img.icons8.com/color/48/000000/git.png" alt="Git" width="30">
🚧 Issues Faced During Development
Filtering Tasks by Date Range:

Initially, the filtered tasks were not displaying correctly. The issue was resolved by ensuring the date comparison logic was accurate and updating the UI to show the filtered tasks in a separate container.

Edit Task Functionality:

The edit form was not updating the correct task. This was fixed by using the task ID to identify and update the specific task in the tasks array.

Modal Positioning and Animation:

The modals were not sliding in/out smoothly. This was resolved by adding proper CSS transitions and JavaScript logic to handle the modal states.

Local Storage Integration:

Tasks were not being saved or retrieved correctly from local storage. This was fixed by ensuring the tasks array was properly serialized and deserialized.

Responsive Design:

The UI was not fully responsive on smaller screens. This was addressed by using Tailwind CSS's responsive utility classes.

🏃‍♂️ How to Run the Project
Clone the repository:

bash
Copy
git clone https://github.com/your-username/your-repo-name.git
Open the project folder:

bash
Copy
cd your-repo-name
Open the index.html file in your browser.

🔮 Future Improvements
Add user authentication to allow multiple users to manage their own tasks.

Implement a "Mark as Done" feature for individual tasks.

Add drag-and-drop functionality to reorder tasks.

Improve the UI/UX with animations and better visual feedback.

📜 License
This project is licensed under the MIT License. See the LICENSE file for details.

🙏 Acknowledgments
Tailwind CSS for making styling so much easier.

GitHub for hosting the repository.

ChatGPT for helping me debug and implement features.


