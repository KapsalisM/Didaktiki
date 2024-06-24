let stack = [];
let queue = [];

function pushToStack() {
    const stackContainer = document.getElementById('stack');
    const newElement = document.createElement('div');
    newElement.textContent = `Element ${stack.length + 1}`;
    newElement.style.bottom = `${stack.length * 35}px`;
    stackContainer.appendChild(newElement);
    stack.push(newElement);
}

function popFromStack() {
    if (stack.length === 0) return;
    const stackContainer = document.getElementById('stack');
    const element = stack.pop();
    stackContainer.removeChild(element);
}

function enqueue() {
    const queueContainer = document.getElementById('queue');
    const newElement = document.createElement('div');
    newElement.textContent = `Element ${queue.length + 1}`;
    newElement.style.top = `${queue.length * 35}px`;
    queueContainer.appendChild(newElement);
    queue.push(newElement);
}

function dequeue() {
    if (queue.length === 0) return;
    const queueContainer = document.getElementById('queue');
    const element = queue.shift();
    queueContainer.removeChild(element);
    // Adjust positions
    queue.forEach((el, index) => {
        el.style.top = `${index * 35}px`;
    });
}
