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
// import { filterTasks, sortTasks } from "./filters.js"; // bonus, once merged

// TODO (Gabriel): redraw the list from the current tasks
function refresh() {
}

// TODO (Gabriel): data comes from the form (data.id is "" when adding).
// Add or update, reset the form, then refresh.
function handleSubmit(data) {
}

// TODO (Gabriel): toggle a task, then refresh
function handleToggle(id) {
}

// TODO (Gabriel): find the task and send it to fillForm()
function handleEdit(id) {
}

// TODO (Gabriel): delete a task (consider a confirm), then refresh
function handleDelete(id) {
}

// TODO (Gabriel): initForm({ onSubmit: handleSubmit }), then the first refresh()
function init() {
}

document.addEventListener("DOMContentLoaded", init);
