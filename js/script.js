{
    const tasks = [
        {
            content: "zjesc obiad",
            done: true,
        },
    ];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        render();
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const render = () => {
        htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class="tasks__list">
            <button class="task__button">${task.done ? "✓" : ""}</button>
            <span class="task__content">${task.content}</span>
            <button class="task__button task__button--remove js-remove">🗑</button>
            </li>`;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;

        const removeButtons = document.querySelectorAll(".js-remove")
        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
               removeTask(index)
            });
        });

    }


    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim()

        if (newTaskContent === "") {
            return;
        }
        addNewTask(newTaskContent);
    }

    const init = () => {
        render();

        const form = document.querySelector(".js-form")

        form.addEventListener("submit", onFormSubmit);
    };
    init();
}
