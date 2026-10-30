// ============================================================
// Owner:    Gabriel Njoku (Leader)
// Branch:   feature/gabriel-main
// Deadline: Sun 1 Nov (end of day)
// Rule:     Only the owner edits this file. See CONTRIBUTING.md.
// ============================================================

// Entry point. This file only wires the modules together:
// it contains no business logic, no validation and no DOM building.

import { getTasks, addTask, updateTask, deleteTask, toggleTask } from "./tasks.js";
import { initForm, fillForm, resetForm } from "./form.js";
import { renderTasks } from "./render.js";
import { filterTasks, sortTasks } from "./filters.js";

// Filter and sort controls (bonus feature)
const searchInput = document.getElementById("search-input");
const statusSelect = document.getElementById("filter-status");
const prioritySelect = document.getElementById("filter-priority");
const sortSelect = document.getElementById("sort-by");

// Redraw the list from the current tasks
function refresh() {
  const filters = {
    status: statusSelect.value,
    priority: prioritySelect.value,
    search: searchInput.value
  };

  let tasks = getTasks();
  tasks = filterTasks(tasks, filters);
  tasks = sortTasks(tasks, sortSelect.value);

  renderTasks(tasks, {
    onToggle: handleToggle,
    onEdit: handleEdit,
    onDelete: handleDelete
  });
}

// data comes from the form (data.id is "" when adding)
function handleSubmit(data) {
  if (data.id === "") {
    addTask(data);
  } else {
    updateTask(data.id, data);
  }

  resetForm();
  refresh();
}

// Mark a task as completed or pending
function handleToggle(id) {
  toggleTask(id);
  refresh();
}

// Find the task and put its values into the form
function handleEdit(id) {
  const tasks = getTasks();

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      fillForm(tasks[i]);
      break;
    }
  }
}

// Ask the user first, then delete the task
function handleDelete(id) {
  const sure = confirm("Are you sure you want to delete this task?");
  if (!sure) {
    return;
  }

  deleteTask(id);

  // If the deleted task was being edited, clear the form
  if (document.getElementById("task-id").value === id) {
    resetForm();
  }

  refresh();
}

function init() {
  initForm({ onSubmit: handleSubmit });

  // Redraw the list when a filter or the sort option changes
  searchInput.addEventListener("input", refresh);
  statusSelect.addEventListener("change", refresh);
  prioritySelect.addEventListener("change", refresh);
  sortSelect.addEventListener("change", refresh);

  refresh();
}

document.addEventListener("DOMContentLoaded", init);
