const addTaskModal = document.getElementById('addTaskModal');
const overlay = document.getElementById('overlay');
const addNewTaskBtn = document.getElementById('addNewTaskBtn');
const closeModalBtn  = document.getElementById('closeModalBtn');
const addTaskBtn  = document.getElementById('addTaskBtn');
const taskForm = document.getElementById('task-form')

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
    showAlert("task added succesfully");


    addTaskModal.classList.remove('open');
    overlay.classList.remove('active');
}
else{
    showAlert("please will all the columns")
}

}
);
const customAlert = document.getElementById('customAlert');
    const alertMessage = document.getElementById('alertMessage');
    const closeAlertBtn = document.getElementById('closeAlertBtn');

    // Function to show the alert
    function showAlert(message, type = 'success') {
        // Set the alert message
        alertMessage.textContent = message;

        // Change alert color based on type
        if (type === 'success') {
            customAlert.classList.remove('bg-red-500');
            customAlert.classList.add('bg-green-500');
        } else if (type === 'error') {
            customAlert.classList.remove('bg-green-500');
            customAlert.classList.add('bg-red-500');
        }

        // Show the alert
        customAlert.classList.remove('hidden');

        // Automatically hide the alert after 3 seconds
        setTimeout(() => {
            customAlert.classList.add('hidden');
        }, 3000);
    }

    // Close the alert when the close button is clicked
    closeAlertBtn.addEventListener('click', () => {
        customAlert.classList.add('hidden');
    });

    // Example usage
    // showAlert('Task Added Successfully!', 'success');
