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

// import { validateTask } from "./validation.js";

/**
 * Attach the form listeners.
 * On submit: read the values, run validateTask(), show errors,
 * and call onSubmit(data) only when valid.
 * data = { id (empty string when adding), title, description, priority, dueDate }
 * @param {{onSubmit: function}} options
 */
export function initForm({ onSubmit }) {
  // TODO (Thankgod)
}

/**
 * Switch to edit mode: fill the fields from a task, set #task-id,
 * change the button text, and show #cancel-edit-btn.
 * @param {object} task
 */
export function fillForm(task) {
  // TODO (Thankgod)
}

/**
 * Clear the fields and errors and return to add mode.
 */
export function resetForm() {
  // TODO (Thankgod)
}
