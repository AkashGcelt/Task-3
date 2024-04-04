document.getElementById("saveButton").addEventListener("click", addEmployee);

const getEmployees=()=> {
  const employeesJson = localStorage.getItem("employees");
  return employeesJson ? JSON.parse(employeesJson) : [];
}

const saveEmployees=(employees)=> {
  localStorage.setItem("employees", JSON.stringify(employees));
}

const addEmployee=()=> {
  const name = document.getElementById("Name").value;
  const email = document.getElementById("Email").value;

  const newEmployee = { name, email };
  const employees = getEmployees();
  employees.push(newEmployee);

  saveEmployees(employees);
  displayEmployees();

  document.getElementById("Name").value = "";
  document.getElementById("Email").value = "";
}
const displayEmployees=()=> {
  const employees = getEmployees();
  const grid = document.getElementById("part_2");

  grid.innerHTML = employees
    .map(
      (employee) => `
        <div class="employee-card" id="child_part">
            <h2 id="Employee_Name">${employee.name}</h2>
            <h3 id="Employee_Email">${employee.email}</h3>
            <i id="edit" class="fa-solid fa-pen-to-square edit" onclick="editEmployee('${employee.email}')"></i>
            <i id="delete" class="fa-solid fa-trash delete" onclick="deleteEmployee('${employee.email}')"></i>
        </div>
    `
    )
    .join("");
}

const editEmployee=(email)=> {
  console.log("Edit employee with email:", email);
  // Implement the edit functionality
}

const deleteEmployee=(email)=> {
  console.log("Delete employee with email:", email);
  const employees = getEmployees();
  const filteredEmployees = employees.filter(
    (employee) => employee.email !== email
  );
  saveEmployees(filteredEmployees);
  displayEmployees();
}

document.addEventListener("DOMContentLoaded", displayEmployees);
