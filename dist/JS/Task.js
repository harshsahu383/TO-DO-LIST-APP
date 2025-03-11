const addTaskModal = document.getElementById('addTaskModal');
const overlay = document.getElementById('overlay');
const addNewTaskBtn = document.getElementById('addNewTaskBtn');
const closeModalBtn  = document.getElementById('closeModalBtn');
const addTaskBtn  = document.getElementById('addTaskBtn');
const taskForm = document.getElementById('task-form');
const closeAddFormBtn = document.getElementById('closeAddFormBtn');
const markAllAsDone = document.getElementById('markAllAsDone');

addNewTaskBtn.addEventListener("click", function(e){
    e.preventDefault();
    addTaskModal.classList.add('open');
    addTaskModal.classList.add('active');

});
closeModalBtn.addEventListener("click", function(e){
    addTaskModal.classList.remove('open');
    addTaskModal.classList.remove('active');
});
overlay.addEventListener("click", (e) => {
    addTaskModal.classList.remove('open');
    overlay.classList.remove('active');
});
closeAddFormBtn.addEventListener('click', () => {
    addTaskModal.classList.remove('open');
    addTaskModal.classList.remove('active');
})
// addTaskBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     alert("Task Added successFully");
// })
taskForm.addEventListener('submit', (e) => {
e.preventDefault();

const taskTitle = document.getElementById('task-title').value.trim();
const taskDescription= document.getElementById('task-description').value.trim();
const dueDate= document.getElementById('due-date').value.trim();
const priority= document.getElementById('priority').value;

if(taskTitle && taskDescription && dueDate && priority){
    showAlert("Task Added Succesfully",'success');

    taskForm.reset();
    addTaskModal.classList.remove('open');
    overlay.classList.remove('active');
}
else{
    showAlert("Fill all the columns First", "error")
}

}
);
const customAlert = document.getElementById('customAlert');
const alertMessage = document.getElementById('alertMessage');
const closeAlertBtn = document.getElementById('closeAlertBtn');
const alertIcon = document.getElementById('alertIcon');

function showAlert (message,type = "success"){
    alertMessage.textContent = message;
    if(type==='success'){
        customAlert.classList.remove('bg-red-500');
        customAlert.classList.add('bg-green-500');
        alertIcon.src='/images/check.png';

    }
    else if (type === 'error'){
        customAlert.classList.add('bg-red-500');
        customAlert.classList.remove('bg-green-500');
        alertIcon.src='/images/cross.png'
    }
    customAlert.classList.remove('hidden');

    setTimeout(() => {
        customAlert.classList.add('hidden');
    }, 3000);

}
closeAlertBtn.addEventListener('click', () => {
    customAlert.classList.add('hidden');
})

markAllAsDone.addEventListener('click', () => {
    showAlert("All Marked AS Done",'success')
});
const deleteTaskBtn = document.getElementById('deleteTaskBtn');
const deleteTaskForm = document.getElementById('deleteTaskForm');
const deleteoverlay = document.getElementById('deleteoverlay');
const closeDeleteFormBtn = document.getElementById('closeDeleteFormBtn');

// Open the Delete Task Form
deleteTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    deleteTaskForm.classList.add('open'); // Slide the form into view
    deleteoverlay.classList.add('active'); // Show the overlay
});

// Close the Delete Task Form
closeDeleteFormBtn.addEventListener('click', () => {
    deleteTaskForm.classList.remove('open'); // Slide the form out of view
    deleteoverlay.classList.remove('active'); // Hide the overlay
});

// Handle form submission
const deleteForm = document.getElementById('deleteForm');
deleteForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const taskId = document.getElementById('task-id').value.trim();

    if (taskId) {
        alert(`Task with ID ${taskId} has been deleted.`);
        deleteForm.reset(); // Reset the form
        deleteTaskForm.classList.remove('open'); // Close the form
        deleteoverlay.classList.remove('active'); // Hide the overlay
    } else {
        alert('Please enter a valid Task ID.');
    }
});

// Close the form when clicking outside (on the overlay)
deleteoverlay.addEventListener('click', () => {
    deleteTaskForm.classList.remove('open'); // Slide the form out of view
    deleteoverlay.classList.remove('active'); // Hide the overlay
});