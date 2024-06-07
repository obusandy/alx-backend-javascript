interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
// student's details
const student1: Student = {
  firstName: "Ava",
  lastName: "Mike",
  age: 19,
  location: "Nairobi",
};

const student2: Student = {
  firstName: "Lisa",
  lastName: "Davis",
  age: 21,
  location: "Kericho",
};

const studentList: Student[] = [student1, student2];

const body = document.querySelector("body");
const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

/**
 * creating a table for displaying the info.
 * students as the parameter
 */
thead.innerHTML = `
<tr>
  <th>First Name</th>
  <th>Last Name</th>
  <th>Age</th>
  <th>Location</th>
</tr>
`;
let tableData: string;

studentList.forEach((student) => {
  tableData += `
      <tr>
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.age}</td>
        <td>${student.location}</td>
      </tr>
    `;
});

tbody.innerHTML = tableData;

table.appendChild(thead);
table.appendChild(tbody);
body.appendChild(table);
