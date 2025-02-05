function addTask() {
  let input = document.getElementById('taskInput');
  let taskText = input.value.trim();
  if (taskText === '') return;

  let li = document.createElement('li');
  let timer = document.createElement('span');
  timer.className = 'timer';
  timer.textContent = '00:30';

  let countdown = setInterval(() => {
    let timeParts = timer.textContent.split(':');
    let minutes = parseInt(timeParts[0]);
    let seconds = parseInt(timeParts[1]);

    if (seconds === 0 && minutes === 0) {
      clearInterval(countdown);
      li.style.textDecoration = 'line-through';
    } else {
      if (seconds === 0) {
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }
      timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
  }, 1000);

  li.innerHTML = `${taskText} <button class="delete" onclick="removeTask(this)">X</button>`;
  li.appendChild(timer);
  document.getElementById('taskList').appendChild(li);
  input.value = '';
}

function removeTask(button) {
  button.parentElement.remove();
}
