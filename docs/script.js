const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
});

const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
  }
});

function addTodo(text) {
  const li = document.createElement('li');
  li.className = 'task-card';

  const content = document.createElement('div');
  content.className = 'task-content';
  content.textContent = text;

  const actions = document.createElement('div');
  actions.className = 'task-actions';

  const editBtn = document.createElement('button');
  editBtn.textContent = '✎';
  editBtn.addEventListener('click', () => {
    const newText = prompt('Edit your task:', content.textContent);
    if (newText !== null && newText.trim() !== '') {
      content.textContent = newText;
    }
  });

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✔';
  completeBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✖';
  deleteBtn.addEventListener('click', () => {
    li.style.opacity = 0;
    setTimeout(() => li.remove(), 300);
  });

  actions.appendChild(editBtn);
  actions.appendChild(completeBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(content);
  li.appendChild(actions);

  list.appendChild(li);
}
