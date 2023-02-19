{
    let tasks = [];
    let hideDoneTask = false;

    const addNewTask = (newTaskContent) => {
        tasks = [
            ...tasks,
            { content: newTaskContent },
        ];
        render();
    };

    const removeTask = (taskIndex) => {
        tasks = [
            ...tasks.slice(0, taskIndex),
            ...tasks.slice(taskIndex + 1),
        ];
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks = [
            ...tasks.slice(0, taskIndex),
            { ...tasks[taskIndex], done: !tasks[taskIndex].done },
            ...tasks.slice(taskIndex + 1),
        ];
        render();
    };

    const bindRemoveEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });
    };

    const bindDoneEvents = () => {
        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    };

    const renderTasks = () => {

        htmlString = "";
        for (const task of tasks) {
            htmlString += `
            <li class="tasks__item">
              <button class="task__button js-done">
                ${task.done ? "✓" : ""}
              </button>
                <span class="task__content ${task.done ? "task__content--done" : ""}">
                ${task.content}
                </span>
              <button class="task__button task__button--remove js-remove">
                🗑
              </button>
            </li>`;
        };

        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const renderButtons = () => {
        htmlButtons = "";
        if (tasks.length > 0) {
            htmlButtons +=`
            <button>Complited Task</button>
            <button>Finish All Tasks</button>
            `;
        }

        document.querySelector(".js-buttons").innerHTML = htmlButtons;
    };

    const bindButtonsEvent = () => { };

    const render = () => {
        renderTasks();
        renderButtons();
        bindButtonsEvent();
        bindRemoveEvents();
        bindDoneEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskElement = document.querySelector(".js-newTask");
        const newTaskContent = newTaskElement.value.trim();

        if (newTaskContent !== "") {
            addNewTask(newTaskContent);
            newTaskElement.value = "";
        };

        newTaskElement.focus();
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };
    init();
}
