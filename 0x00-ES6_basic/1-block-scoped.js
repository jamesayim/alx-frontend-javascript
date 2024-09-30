export default function taskBlock(trueOrFalse) {
  let task = false; // Use let for block scope
  let task2 = true; // Use let for block scope

  if (trueOrFalse) {
    let task = true; // This task variable is different from the outer task
    let task2 = false; // This task2 variable is different from the outer task2
  }

  return [task, task2]; // Returns the outer task and task2
}
