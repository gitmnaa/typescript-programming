type Task = {
    id: number;
    title: string;
    completed: boolean;
};

const tasks: Task[] = [
    { id: 1, title: "Learn TypeScript", completed: true },
    { id: 2, title: "Build a project", completed: false },
    { id: 3, title: "Practice coding", completed: false }
];

function showTasks(list: Task[]): void {
    list.forEach(task => {
        const status = task.completed ? "DONE" : "TODO";
        console.log(`[${status}] ${task.id}. ${task.title}`);
    });
}

function countCompleted(list: Task[]): number {
    return list.filter(task => task.completed).length;
}

console.log("=== TypeScript Task Manager ===");
showTasks(tasks);
console.log(`Completed: ${countCompleted(tasks)}/${tasks.length}`);
