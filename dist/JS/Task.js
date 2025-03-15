const customAlert = document.getElementById('customAlert');
const alertMessage = document.getElementById('alertMessage');
const closeAlertBtn = document.getElementById('closeAlertBtn');
const alertIcon = document.getElementById('alertIcon');
const addTaskModal = document.getElementById('addTaskModal');
const overlay = document.getElementById('overlay');
const addNewTaskBtn = document.getElementById('addNewTaskBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskForm = document.getElementById('task-form');
const closeAddFormBtn = document.getElementById('closeAddFormBtn');
const markAllAsDone = document.getElementById('markAllAsDone');
const deleteTaskModal = document.getElementById('deleteTaskModal');
const deletetaskForm = document.getElementById('delete-task-form');
const closeDeleteModalBtn = document.getElementById('closeDeleteModalBtn');
const closeDeleteFormBtn = document.getElementById('closeDeleteFormBtn');
const deleteTaskBtn = document.getElementById('deleteTaskBtn');
const deleteTaskModalBtn = document.getElementById('deleteTaskModalBtn');
const taskListBtn = document.getElementById('taskListBtn');
const taskListModal = document.getElementById('taskListModal');
const closeTaskListBtn = document.getElementById('closeTaskListBtn');
const tasksContainer = document.getElementById('tasksContainer');
const filterTaskModal = document.getElementById('filterTaskModal');
const modalfilterTasksBtn = document.getElementById('modalFilterTasksBtn');
const submitFilterTasksBtn = document.getElementById('submitFilterTasksBtn');
const closeFilterFormBtn = document.getElementById('closeFilterFormBtn');
const cancelFlterTaskBtn = document.getElementById('cancelFlterTaskBtn');
const filterTaskForm = document.getElementById('filter-task-form');
const filteredTasksContainer = document.getElementById('filteredTasksContainer');

// Functions
function filterTaskByDate(fromDate, toDate) {
    const tasks = fetchTasks();
    const from = new Date(fromDate);
    const to = new Date(toDate);

    const filteredTasks = tasks.filter(task => {
        const taskDate = new Date(task.date);
        return taskDate >= from && taskDate <= to;
    });

    return filteredTasks;
}

function saveTaskToLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function showAlert(message, type = "success") {
    alertMessage.textContent = message;
    if (type === 'success') {
        customAlert.classList.remove('bg-red-500');
        customAlert.classList.add('bg-green-500');
        alertIcon.src = '/images/check.png';
    } else if (type === 'error') {
        customAlert.classList.add('bg-red-500');
        customAlert.classList.remove('bg-green-500');
        alertIcon.src = '/images/cross.png';
    }
    customAlert.classList.remove('hidden');

    setTimeout(() => {
        customAlert.classList.add('hidden');
    }, 3000);
}

function fetchTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

// Original display function for all tasks
function displayTasks() {
    let tasks = fetchTasks();
    tasksContainer.innerHTML = '';

    if (tasks.length === 0) {
        tasksContainer.innerHTML = '<p class="text-gray-500">No tasks found.</p>';
        return;
    }

    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList = "bg-gray-50 rounded-lg p-4 mb-4";
        taskElement.innerHTML = `
            <h2 class="text-lg font-semibold text-gray-800">Task ID: ${task.id}</h2>
            <p class="text-gray-600"><span class="text-black">Task Title:</span> ${task.title}</p>
            <p class="text-gray-600"><span class="text-black">Task Description:</span> ${task.description}</p>
            <p class="text-gray-600"><span class="text-black">Task Due Date:</span> ${task.dueDate}</p>
            <p class="text-gray-600"><span class="text-black">Task Priority:</span> ${task.priority}</p>
            <p class="text-gray-600"><span class="text-black">Date Added:</span> ${task.date}</p>
        `;
        tasksContainer.appendChild(taskElement);
    });
}

// New display function for filtered tasks
function displayFilteredTasks(filteredTasks) {
    const container = document.getElementById('filteredTasksContainer');
    container.innerHTML = '';

    if (filteredTasks.length === 0) {
        container.innerHTML = '<p class="text-gray-500">No tasks found in the given date range.</p>';
        return;
    }

    filteredTasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList = "bg-gray-50 rounded-lg p-4 mb-4";
        taskElement.innerHTML = `
            <h2 class="text-lg font-semibold text-gray-800">Task ID: ${task.id}</h2>
            <p class="text-gray-600"><span class="text-black">Task Title:</span> ${task.title}</p>
            <p class="text-gray-600"><span class="text-black">Task Description:</span> ${task.description}</p>
            <p class="text-gray-600"><span class="text-black">Task Due Date:</span> ${task.dueDate}</p>
            <p class="text-gray-600"><span class="text-black">Task Priority:</span> ${task.priority}</p>
            <p class="text-gray-600"><span class="text-black">Date Added:</span> ${task.date}</p>
        `;
        container.appendChild(taskElement);
    });
}

// Event Listeners
addNewTaskBtn.addEventListener("click", function (e) {
    e.preventDefault();
    addTaskModal.classList.add('open');
    overlay.classList.add('active');
});

closeModalBtn.addEventListener("click", function (e) {
    addTaskModal.classList.remove('open');
    overlay.classList.remove('active');
});

overlay.addEventListener("click", (e) => {
    addTaskModal.classList.remove('open');
    deleteTaskModal.classList.remove('open');
    taskListModal.classList.remove('open');
    filterTaskModal.classList.remove('open');
    overlay.classList.remove('active');
});

closeAddFormBtn.addEventListener('click', () => {
    addTaskModal.classList.remove('open');
    overlay.classList.remove('active');
});

closeAlertBtn.addEventListener('click', () => {
    customAlert.classList.add('hidden');
});

markAllAsDone.addEventListener('click', () => {
    showAlert("All Tasks Marked As Done", 'success');
});

// Delete Task Functionality
deleteTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    deleteTaskModal.classList.add('open');
    overlay.classList.add('active');
});

closeDeleteFormBtn.addEventListener('click', (e) => {
    e.preventDefault();
    deleteTaskModal.classList.remove('open');
    overlay.classList.remove('active');
});

closeDeleteModalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    deleteTaskModal.classList.remove('open');
    overlay.classList.remove('active');
});

deletetaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskId = document.getElementById('task-id').value.trim();

    if (taskId) {
        let tasks = fetchTasks();
        tasks = tasks.filter(task => task.id !== parseInt(taskId)); // Remove the task with the matching ID
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Update local storage
        showAlert(`Task ${taskId} Deleted Successfully`, 'success');
        deletetaskForm.reset();
        deleteTaskModal.classList.remove('open');
        overlay.classList.remove('active');
        displayTasks(); // Refresh the task list
    } else {
        showAlert("Please enter a valid Task ID", "error");
    }
});

// Add Task Functionality
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const taskTitle = document.getElementById('task-title').value.trim();
    const taskDescription = document.getElementById('task-description').value.trim();
    const dueDate = document.getElementById('due-date').value.trim();
    const priority = document.getElementById('priority').value;

    if (taskTitle && taskDescription && dueDate && priority) {
        const task = {
            id: Date.now(),
            title: taskTitle,
            description: taskDescription,
            dueDate: dueDate,
            priority: priority,
            date: new Date().toISOString().split('T')[0],
        };
        saveTaskToLocalStorage(task);
        showAlert("Task Added Successfully", 'success');
        taskForm.reset();
        addTaskModal.classList.remove('open');
        overlay.classList.remove('active');
        displayTasks(); // Refresh the task list
    } else {
        showAlert("Fill all the columns First", "error");
    }
});

// Task List Functionality
taskListBtn.addEventListener('click', (e) => {
    e.preventDefault();
    taskListModal.classList.add('open');
    overlay.classList.add('active');
    displayTasks(); // Load tasks into the modal
});

closeTaskListBtn.addEventListener('click', (e) => {
    taskListModal.classList.remove('open');
    overlay.classList.remove('active');
});

// Filter Task Functionality
modalfilterTasksBtn.addEventListener('click', (e) => {
    e.preventDefault();
    filterTaskModal.classList.add('open');
    overlay.classList.add('active');
});

closeFilterFormBtn.addEventListener('click', (e) => {
    e.preventDefault();
    filterTaskModal.classList.remove('open');
    overlay.classList.remove('active');
});

cancelFlterTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    filterTaskModal.classList.remove('open');
    overlay.classList.remove('active');

    // Hide the filtered task list and show the original task list
    document.getElementById('filteredTasksContainer').classList.add('hidden');
    document.getElementById('tasksContainer').classList.remove('hidden');

    // Display all tasks in the original container
    displayTasks();
});

filterTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fromDate = document.getElementById('From-date').value;
    const toDate = document.getElementById('To-date').value;

    if (fromDate && toDate) {
        const filteredTasks = filterTaskByDate(fromDate, toDate);
        if (filteredTasks.length > 0) {
            // Hide the original task list and show the filtered task list
            document.getElementById('filteredTasksContainer').classList.remove('hidden');

            // Display filtered tasks in the filtered tasks container
            displayFilteredTasks(filteredTasks);

            // Close the filter modal
            filterTaskModal.classList.remove('open');
            overlay.classList.remove('active');
        } else {
            showAlert("No tasks found in the given date range.", "error");
        }
    } else {
        showAlert("Please select both From Date and To Date.", "error");
    }
});