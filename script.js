document.getElementById('envelope-container').addEventListener('click', function() {
    this.classList.toggle('open');
  });
  function redirectToToDoList(response) {
    if (response === 'yes' || response === 'Yes') {
        window.location.href = 'todolist.html';
   }
}
