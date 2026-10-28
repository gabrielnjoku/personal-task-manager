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
  return {};
}
