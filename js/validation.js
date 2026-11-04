// ============================================================
// Owner:    Edidiong Essiet Alphonsus
// Branch:   feature/edidiong-validation
// Deadline: Fri 30 Oct (end of day)
// Rule:     Only the owner edits this file. See CONTRIBUTING.md.
// ============================================================

// Form validation. Pure logic only: no DOM code in this file.
//
// Suggested rules (agree final rules with the team):
// - title: required, not just spaces, sensible min/max length
// - description: required, sensible max length
// - priority: must be "low", "medium" or "high"
// - dueDate: required, must be a valid date

/**
 * Validate task form data.
 * @param {{title:string, description:string, priority:string, dueDate:string}} data
 * @returns {object} {} when valid, otherwise an object of messages keyed by field,
 *   e.g. { title: "Title is required", dueDate: "Due date is required" }
 *   Keys must be: title, description, priority, dueDate
 */
export function validateTask(data) {
  // TODO (Edidiong)
  let errors = {};

  // 1. Check title
  if (!data.title || data.title.trim() === "") {
    errors.title = "Title is required";
  } else if (data.title.trim().length < 3) {
    errors.title = "Title must be at least 3 characters";
  } else if (data.title.trim().length > 100) {
    errors.title = "Title must be less than 100 characters";
  }

  // 2. Check description
  if (!data.description || data.description.trim() === "") {
    errors.description = "Description is required";
  } else if (data.description.trim().length > 250) {
    errors.description = "Description must be less than 250 characters";
  }

  // 3. Check priority
  if (!data.priority || data.priority === "") {
    errors.priority = "Priority is required";
  } else if (
    data.priority !== "low" &&
    data.priority !== "medium" &&
    data.priority !== "high"
  ) {
    errors.priority = "Priority must be low, medium, or high";
  }

  // 4. Check due date
  if (!data.dueDate || data.dueDate === "") {
    errors.dueDate = "Due date is required";
  } else if (isNaN(new Date(data.dueDate))) {
    errors.dueDate = "Please select a valid date";
  }

  return errors;
}