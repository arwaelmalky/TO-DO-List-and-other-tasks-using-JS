function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== "") {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task pending';

        const taskText = document.createElement('span');
        taskText.textContent = taskInput.value;

        const doneButton = document.createElement('button');
        doneButton.className = 'done';
        doneButton.textContent = 'Done';
        doneButton.onclick = function () {
            if (taskDiv.classList.contains('pending')) {
                taskDiv.classList.remove('pending');
                taskDiv.classList.add('done');
                taskText.style.textDecoration = 'line-through';
            } else {
                taskDiv.classList.remove('done');
                taskDiv.classList.add('pending');
                taskText.style.textDecoration = 'none';
            }
        };

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            taskList.removeChild(taskDiv);
        };

        taskDiv.appendChild(taskText);
        taskDiv.appendChild(doneButton);
        taskDiv.appendChild(deleteButton);

        taskList.appendChild(taskDiv);
        taskInput.value = '';
    }
}
