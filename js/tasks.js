// ============================================================
// Owner:    Chijioke Emmanuel Nnekwelugo
// Branch:   feature/chijioke-tasks
// Deadline: Fri 30 Oct (end of day)
// Rule:     Only the owner edits this file. See CONTRIBUTING.md.
// ============================================================

// Task data and CRUD logic. This module owns the tasks array.
//
// Persistence: this module calls loadTasks() once when it starts and
// saveTasks(tasks) after every change, using ./storage.js (Eneh).
// main.js does not touch localStorage.
//
// Task object shape (shared contract):
// { id, title, description, priority: "low"|"medium"|"high",
//   dueDate: "YYYY-MM-DD", completed: false, createdAt: number }

// import { generateId } from "./utils.js";
// import { loadTasks, saveTasks } from "./storage.js";

let tasks = []; // TODO (Chijioke): initialise from loadTasks()

/** @returns {Array} all tasks */
export function getTasks() {
  return tasks;
}

/**
 * Create a task from form data and store it.
 * @param {{title:string, description:string, priority:string, dueDate:string}} data
 * @returns {object} the new task
 */
export function addTask(data) {
  // TODO (Chijioke)
}

/**
 * Update an existing task.
 * @param {string} id
 * @param {object} data fields to change
 * @returns {object|null} the updated task, or null if not found
 */
export function updateTask(id, data) {
  // TODO (Chijioke)
  return null;
}

/**
 * Delete a task.
 * @param {string} id
 * @returns {boolean} true if a task was removed
 */
export function deleteTask(id) {
  // TODO (Chijioke)
  return false;
}

/**
 * Flip a task between completed and pending.
 * @param {string} id
 * @returns {object|null} the updated task, or null if not found
 */
export function toggleTask(id) {
  // TODO (Chijioke)
  return null;
}
