const employees = createEmployeesObject('Engineering', ['John Doe', 'Guillaume Salva']);
const report = createReportObject(employees);

console.log(report.allEmployees);
// Output: { Engineering: ['John Doe', 'Guillaume Salva'] }

console.log(report.getNumberOfDepartments());
// Output: 1

