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
            <li>
            ${task.content}
            </li>`;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    }



    const init = () => {
        render();
    }

    init();

}




