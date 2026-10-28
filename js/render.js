// ============================================================
// Owner:    Ogbozo Mmesoma Emmanuella
// Branch:   feature/ogbozo-render
// Deadline: Sat 31 Oct (end of day)
// Rule:     Only the owner edits this file. See CONTRIBUTING.md.
// ============================================================

// Display tasks using DOM manipulation (createElement, not big innerHTML strings
// with user input, to avoid injecting user text as HTML).
// Uses #task-list and #empty-state from index.html.
// Class names are fixed by the contract: .task-card, .completed,
// .priority-low/.priority-medium/.priority-high, .task-title, .task-meta,
// .task-actions, .btn, .btn-danger

// import { formatDate } from "./utils.js";

/**
 * Render the whole task list.
 * Show #empty-state when there are no tasks.
 * Each card shows title, description, priority, due date, status and
 * buttons to complete/undo, edit and delete.
 * @param {Array} tasks
 * @param {{onToggle: function, onEdit: function, onDelete: function}} handlers
 *   each handler receives the task id
 */
export function renderTasks(tasks, { onToggle, onEdit, onDelete }) {
  // TODO (Ogbozo)
}
