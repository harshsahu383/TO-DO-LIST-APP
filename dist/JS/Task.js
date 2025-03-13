const customAlert = document.getElementById('customAlert');
const alertMessage = document.getElementById('alertMessage');
const closeAlertBtn = document.getElementById('closeAlertBtn');
const alertIcon = document.getElementById('alertIcon');
const addTaskModal = document.getElementById('addTaskModal');
const overlay = document.getElementById('overlay');
const addNewTaskBtn = document.getElementById('addNewTaskBtn');
const closeModalBtn  = document.getElementById('closeModalBtn');
const addTaskBtn  = document.getElementById('addTaskBtn');
const taskForm = document.getElementById('task-form');
const closeAddFormBtn = document.getElementById('closeAddFormBtn');
const markAllAsDone = document.getElementById('markAllAsDone');
const deleteTaskModal = document.getElementById('deleteTaskModal');
const deletetaskForm  = document.getElementById('delete-task-form');
const closeDeleteModalBtn = document.getElementById('closeDeleteModalBtn');
const closeDeleteFormBtn = document.getElementById('closeDeleteFormBtn');
const deleteTaskBtn = document.getElementById('deleteTaskBtn');
const deleteTaskModalBtn = document.getElementById('deleteTaskModalBtn');
const taskListBtn =document.getElementById('taskListBtn');
const taskListModal = document.getElementById('taskListModal');
const closeTaskListBtn = document.getElementById('closeTaskListBtn');
const tasksContainer = document.getElementById('tasksContainer');
// functions
function saveTaskToLocalStorage(task){
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}
function showAlert (message,type = "success"){
    alertMessage.textContent = message;
    if(type==='success'){
        customAlert.classList.remove('bg-red-500');
        customAlert.classList.add('bg-green-500');
        alertIcon.src='/images/check.png';
        overlay.classList.remove
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
function fetchTasks (){
    return JSON.parse(localStorage.getItem('tasks')) || [];
}
function displayTasks () {
    const tasks = fetchTasks();
    tasksContainer.innerHTML='';
    if(tasks.length===0){
        overlay.classList.remove('active');
        taskListModal.classList.remove('open');
        return showAlert("No tasks Are Found",'error');
    }
    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList = "bg-gray rounded-lg p-4";
        taskElement.innerHTML = `
        <h2 class="text-lg font-semibold text-gray-800">Task ID</h2>
        <h3 class="text-1xl text-gray-800">${task.id}</h3>
        <p class="text-gray-600 "> <span class=" text-black">Task Title : </span>  ${task.title}</p> 
        <p class="text-gray-600 ">  <span class=" text-black">Task Description : </span> ${task.description}</p> 
        <p class="text-gray-600 "> <span class=" text-black">Task DueDate :</span>  ${task.dueDate}</p> 
        <p class="text-gray-600 "><span class=" text-black">Task Priority :</span> ${task.priority}</p> 
        <p class="text-gray-600 "><span class=" text-black">Date  :</span> ${task.date}</p> 
        `;
        tasksContainer.append(taskElement);
    });
}

// end functions

addNewTaskBtn.addEventListener("click", function(e){
    e.preventDefault();
    addTaskModal.classList.add('open');
    overlay.classList.add('active');

});
closeModalBtn.addEventListener("click", function(e){
    addTaskModal.classList.remove('open');
    addTaskModal.classList.remove('active');
});
overlay.addEventListener("click", (e) => {
    addTaskModal.classList.remove('open');
    taskListModal.classList.remove('open');
    deleteTaskModal.classList.remove('open');
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
    showAlert("All Marked AS Done",'success')
});
// delete task functioning
deleteTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    deleteTaskModal.classList.add('open');
    overlay.classList.add('active');
})
closeDeleteFormBtn.addEventListener('click', (e) => {
    e.preventDefault();
    deleteTaskModal.classList.remove('open');
    overlay.classList.remove('active');
})
closeDeleteModalBtn.addEventListener('click',(e) => {
    e.preventDefault();
    deleteTaskModal.classList.remove('open');
    overlay.classList.remove('active');
});

deletetaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskId = document.getElementById('task-id').value;

    

    if(taskId){
        showAlert(`${taskId} is Deleted Succesfully`,'success');
        deletetaskForm.reset();
        deleteTaskModal.classList.remove('open');
        overlay.classList.remove('active');
    }
    else {
        showAlert(`${taskId} is incorrect`,'error');
        deletetaskForm.reset();
        deleteTaskModal.remove('open');
        overlay.remove('active');

        
    }
});
/// add task form functioning

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const taskTitle = document.getElementById('task-title').value.trim();
    const taskDescription= document.getElementById('task-description').value.trim();
    const dueDate= document.getElementById('due-date').value.trim();
    const priority= document.getElementById('priority').value;

    
    if(taskTitle && taskDescription && dueDate && priority){
        const task = {
            id : Date.now(),
            title : taskTitle,
            description : taskDescription,
            dueDate : dueDate,
            priority : priority,
            date : new Date().toLocaleDateString('en-GB'),
        };
        saveTaskToLocalStorage(task);
        showAlert("Task Added Successfully",'success')
        taskForm.reset();
        addTaskModal.classList.remove('open');
        overlay.classList.remove('active');
        displayTasks();
        
    }
    else{
        showAlert("Fill all the columns First", "error")
    } 
    }
    );
   
    taskListBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        taskListModal.classList.add('open');
        overlay.classList.add('active')
        displayTasks();
        
    });
    closeTaskListBtn.addEventListener('click',(e)=>{
        taskListModal.classList.remove('open');
        overlay.classList.remove('active')
    });
    
    