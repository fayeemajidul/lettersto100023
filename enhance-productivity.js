function procrastinationReducer(taskList) {
    return taskList.map(task => {
        if (Math.random() > 0.5) {
            console.log(`Starting on ${task.name}...`);
            setTimeout(() => task.completed = true, Math.random() * 2000);
            return task;  
        } else {
            console.log(`Decided to watch cat videos instead of ${task.name}.`);
            return {...task, completed: false};  
        }
    });
}

const tasks = [{name: 'Write code'}, {name: 'Fix bugs'}, {name: 'Review PRs'}, {name: 'Browse memes'}];
const productivity = procrastinationReducer(tasks);
console.log(productivity);