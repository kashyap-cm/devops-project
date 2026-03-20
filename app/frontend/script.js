const API_URL = "http://127.0.0.1:5000/todos";

async function loadTodos() {
    try {
        const response = await fetch(API_URL);
        const todos = await response.json();

        const list = document.getElementById("todoList");
        list.innerHTML = "";

        todos.forEach((todo, index) => {
            const li = document.createElement("li");

            li.innerHTML = `
                ${todo}
                <button onclick="deleteTodo(${index})">Delete</button>
            `;

            list.appendChild(li);
        });
    } catch (error) {
        console.error("Error loading todos:", error);
    }
}

async function addTodo() {
    const input = document.getElementById("taskInput");
    const task = input.value;

    if (!task.trim()) {
        alert("Task cannot be empty");
        return;
    }

    const res = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ task })
    });

    if (res.ok) {
        input.value = "";
        loadTodos();
    }
}

async function deleteTodo(index) {
    await fetch(`${API_URL}/${index}`, {
        method: "DELETE"
    });

    loadTodos();
}

window.onload = loadTodos;