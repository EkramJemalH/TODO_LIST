let myTask = [];
const addBtn = document.getElementById("add-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

addBtn.addEventListener("click", function () {
  if (inputEl.value.trim() !== "") {
    myTask.push({ text: inputEl.value.trim(), status: "not-done" }); 
    renderlist();
    inputEl.value = ""; 
  }
});

function renderlist() {
  ulEl.innerHTML = ""; 
  for (let i = 0; i < myTask.length; i++) {
    const li = document.createElement("li");

    const circle = document.createElement("span");
    circle.classList.add("circle");
    if (myTask[i].status === "done") {
      circle.classList.add("clicked");
    }

    const taskText = document.createElement("span");
    taskText.textContent = myTask[i].text;
    taskText.classList.add("task-text");
    if (myTask[i].status === "done") {
      taskText.classList.add("clicked");
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    circle.addEventListener("click", function () {
      myTask[i].status = myTask[i].status === "done" ? "not-done" : "done";
      myTask.splice(i, 1);
      li.classList.add("removing"); 
      setTimeout(() => {
        renderlist(); 
      }, 500); 
    
    });

    deleteBtn.addEventListener("click", function () {
      myTask.splice(i, 1); 
      renderlist();
    });

    li.appendChild(circle);
    li.appendChild(taskText);
    li.appendChild(deleteBtn);
    ulEl.appendChild(li);
  }
}
