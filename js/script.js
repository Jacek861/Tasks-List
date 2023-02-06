{
    const tasks = [
        {
            content: "zjesc obiad",
            done: true,
        },
    ];

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



    const init = () => {
        render();
    }

    init();

}




