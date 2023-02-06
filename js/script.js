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

    const render = () => {
        htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class="tasks__list">
            <button class="task__button" >${task.done ? "✓" : ""}</button>
            <span class="task__content">${task.content}</span>
            <button class="task__button task__button--remove">🗑</button>
            </li>`;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
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
