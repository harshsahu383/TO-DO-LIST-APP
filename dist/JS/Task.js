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