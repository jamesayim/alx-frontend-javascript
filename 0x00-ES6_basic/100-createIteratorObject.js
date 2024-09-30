export default function createIteratorObject(report) {
  const employees = [];

  // Gather all employees from the report
  for (const department in report.allEmployees) {
    employees.push(...report.allEmployees[department]);
  }

  // Create an iterator using the employees array
  return employees.values();
}

