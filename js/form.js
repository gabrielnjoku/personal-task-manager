// ============================================================
// Owner:    Thankgod Chimeremeze Ikekwem
// Branch:   feature/thankgod-form
// Deadline: Sat 31 Oct (end of day)
// Rule:     Only the owner edits this file. See CONTRIBUTING.md.
// ============================================================

// Form handling (DOM). Uses these IDs from index.html:
// #task-form, #task-id, #title, #description, #priority, #due-date,
// #submit-btn, #cancel-edit-btn,
// #title-error, #description-error, #priority-error, #due-date-error

import { validateTask } from "./validation.js";

// Keep references to the existing form elements so we can reuse them.
const form = document.getElementById("task-form");
const taskIdInput = document.getElementById("task-id");
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const priorityInput = document.getElementById("priority");
const dueDateInput = document.getElementById("due-date");
const submitButton = document.getElementById("submit-btn");
const cancelButton = document.getElementById("cancel-edit-btn");

// An empty errors object clears any messages from a previous submission.
function showErrors(errors) {
  document.getElementById("title-error").textContent = errors.title || "";
  document.getElementById("description-error").textContent = errors.description || "";
  document.getElementById("priority-error").textContent = errors.priority || "";
  document.getElementById("due-date-error").textContent = errors.dueDate || "";

  // These attributes also activate the invalid-field styles in components.css.
  titleInput.setAttribute("aria-invalid", errors.title ? "true" : "false");
  descriptionInput.setAttribute("aria-invalid", errors.description ? "true" : "false");
  priorityInput.setAttribute("aria-invalid", errors.priority ? "true" : "false");
  dueDateInput.setAttribute("aria-invalid", errors.dueDate ? "true" : "false");
}

/**
 * Attach the form listeners.
 * On submit: read the values, run validateTask(), show errors,
 * and call onSubmit(data) only when valid.
 * data = { id (empty string when adding), title, description, priority, dueDate }
 * @param {{onSubmit: function}} options
 */
export function initForm({ onSubmit }) {
  form.addEventListener("submit", function (event) {
    // Handle the submission with JavaScript without reloading the page.
    event.preventDefault();

    const data = {
      id: taskIdInput.value,
      title: titleInput.value.trim(),
      description: descriptionInput.value.trim(),
      priority: priorityInput.value,
      dueDate: dueDateInput.value
    };

    const errors = validateTask(data);
    showErrors(errors);

    // Do not send invalid data to main.js.
    if (Object.keys(errors).length > 0) {
      return;
    }

    // main.js decides whether to add or update using data.id.
    onSubmit(data);
  });

  cancelButton.addEventListener("click", function () {
    resetForm();
  });
}

/**
 * Switch to edit mode: fill the fields from a task, set #task-id,
 * change the button text, and show #cancel-edit-btn.
 * @param {object} task
 */
export function fillForm(task) {
  // Remove previous values and errors before loading the selected task.
  resetForm();

  taskIdInput.value = task.id;
  titleInput.value = task.title;
  descriptionInput.value = task.description;
  priorityInput.value = task.priority;
  dueDateInput.value = task.dueDate;

  submitButton.textContent = "Save changes";
  cancelButton.hidden = false;
  titleInput.focus();
}

/**
 * Clear the fields and errors and return to add mode.
 */
export function resetForm() {
  // Restore the form's original field values from index.html.
  form.reset();

  // An empty ID tells main.js that the next submission adds a new task.
  taskIdInput.value = "";
  showErrors({});
  submitButton.textContent = "Add task";
  cancelButton.hidden = true;
}
