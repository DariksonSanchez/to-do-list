// 1. Referencias a los elementos del DOM
const todoForm = document.getElementById('todoForm');
const taskInput = document.getElementById('taskInput');
const list = document.getElementById('list');

// 2. Escuchar el evento de envío
todoForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que la página se recargue
    if (taskInput.value.trim() !== "") {
        addTask(taskInput.value);
        taskInput.value = ""; // Limpiar el input después de añadir
    }
});

// 3. Función para añadir tarea
let addTask = (taskText) => {
    // Creamos un ID único basado en el tiempo actual
    const id = Date.now();

    const taskHTML = `
    <div class="task-container" id="${id}">
        <label>
            <input type="checkbox" onchange="updateStats()">
            ${taskText}
        </label>
        <img src="https://img.icons8.com/?size=100&id=68064&format=png&color=000000" 
             class="closebtn" 
             onclick="deleteTask(${id})">
    </div>`;

    list.insertAdjacentHTML('beforeend', taskHTML);
    updateStats();
};

// 4. Función para eliminar tarea
window.deleteTask = (id) => {
    const taskElement = document.getElementById(id);
    taskElement.remove();
    updateStats();
};

// 5. Función para actualizar estadísticas
window.updateStats = () => {
    const checkboxes = list.querySelectorAll('input[type="checkbox"]');
    const completed = list.querySelectorAll('input[type="checkbox"]:checked').length;
    
    document.getElementById('pendingCount').innerText = checkboxes.length - completed;
    document.getElementById('completedCount').innerText = completed;
};