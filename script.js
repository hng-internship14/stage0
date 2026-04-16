const todo = {
  title: "Gym Session with Personal Trainer",
  description: "Guided workout session focused on strength, form, and consistency. This is a long description to test expand collapse behavior.",
  priority: "High",
  status: "Pending",
  dueDate: new Date(Date.now() + 4 * 86400000),
  completed: false
};

const el = id => document.getElementById(id);

let interval;

/* RENDER */
function render() {
  el("todo-title").textContent = todo.title;
  el("todo-desc").textContent = collapsed
    ? todo.description.slice(0, 60) + "..."
    : todo.description;

  const statusEl = el("todo-status");
  statusEl.textContent = todo.status;

  // RESET classes
  statusEl.className = "status";

  if (todo.status === "Pending") {
    statusEl.classList.add("pending");
  } else if (todo.status === "Done") {
    statusEl.classList.add("done");
  } else if (todo.status === "In Progress") {
    statusEl.classList.add("in-progress");
  }

  el("status-control").value = todo.status;
  el("priority-badge").textContent = todo.priority;

  el("card").className = "card priority-" + todo.priority.toLowerCase();

  el("toggle").checked = todo.completed;

  updateTime();
}

/* TIME */
function updateTime() {
  if (todo.completed) {
    el("time-remaining").textContent = "Completed";
    return;
  }

  const diff = todo.dueDate - new Date();

  if (diff < 0) {
    el("overdue").textContent = "Overdue";
    el("overdue").classList.add("overdue");
  } else {
    el("overdue").textContent = "";
  }

  const days = Math.floor(diff / 86400000);
  el("time-remaining").textContent = `Due in ${days} days`;
}

/* TOGGLE */
el("toggle").addEventListener("change", () => {
  todo.completed = el("toggle").checked;
  todo.status = todo.completed ? "Done" : "Pending";
  render();
});

/* STATUS */
el("status-control").addEventListener("change", () => {
  todo.status = el("status-control").value;
  todo.completed = todo.status === "Done";
  render();
});

/* EXPAND */
let collapsed = true;
el("expand-btn").onclick = () => {
  collapsed = !collapsed;
  el("expand-btn").textContent = collapsed ? "Expand" : "Collapse";
  render();
};

/* EDIT */
el("edit-btn").onclick = () => {
  el("edit-form").hidden = false;
  el("card").classList.add("editing");

  el("edit-title").value = todo.title;
  el("edit-desc").value = todo.description;
  el("edit-priority").value = todo.priority;
  el("edit-date").value = todo.dueDate.toISOString().split("T")[0];
};

/* SAVE */
el("edit-form").onsubmit = (e) => {
  e.preventDefault();

  todo.title = el("edit-title").value;
  todo.description = el("edit-desc").value;
  todo.priority = el("edit-priority").value;
  todo.dueDate = new Date(el("edit-date").value);

  el("edit-form").hidden = true;
  el("card").classList.remove("editing");

  render();
};

/* CANCEL */
el("cancel-btn").onclick = () => {
  el("edit-form").hidden = true;
  el("card").classList.remove("editing");
};

/* INIT */
render();
interval = setInterval(updateTime, 60000);