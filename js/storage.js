// ============================================================
// Owner:    Eneh Izuchukwu Kenneth
// Branch:   feature/eneh-storage
// Deadline: Fri 30 Oct (end of day)
// Rule:     Only the owner edits this file. See CONTRIBUTING.md.
// ============================================================

// localStorage persistence. Must never crash the app:
// handle empty storage, invalid JSON and storage errors with try/catch.

const STORAGE_KEY = "personalTaskManager.tasks";

/**
 * Save the full tasks array to localStorage.
 * @param {Array} tasks
 */
export function saveTasks(tasks) {
  // TODO (Eneh)
}

/**
 * Load the tasks array from localStorage.
 * @returns {Array} an array (empty if nothing saved or data is invalid)
 */
export function loadTasks() {
  // TODO (Eneh)
  return [];
}
