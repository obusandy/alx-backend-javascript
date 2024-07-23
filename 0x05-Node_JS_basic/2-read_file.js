const fs = require("fs");

module.exports = function countStudents(path) {
  try {
    // Read the file synchronously
    const fileDt = fs.readFileSync(path, { encoding: "utf-8" });
    // plit the file data into lines and remove the header and last empty line
    const ln = fileDt.split("\n").slice(1, -1);
    // extracts the header (firstline),divides it into the names of the col.
    const header = fileDt.split("\n").slice(0, 1)[0].split(",");
    // finds the inde of the "firstname" and "field" columns
    const fIndx = header.findIndex((ele) => ele === "firstname");
    const frstNindx = header.findIndex((ele) => ele === "field");
    // Initialize objects
    const students = {};
    const fields = {};
    // Iterate over each line of student data
    ln.forEach((line) => {
      const lst = line.split(","); // Get the field and first name from the line
      if (!fields[lst[frstNindx]]) fields[lst[frstNindx]] = 0;
      fields[lst[frstNindx]] += 1;
      if (!students[lst[frstNindx]]) students[lst[frstNindx]] = "";
      students[lst[frstNindx]] += students[lst[frstNindx]]
        ? `, ${lst[fIndx]}`
        : lst[fIndx];
    });

    // Output the total no of students
    console.log(`Number of students: ${ln.length}`);
    for (const key in fields) {
      if (Object.hasOwnProperty.call(fields, key)) {
        const element = fields[key];
        console.log(
          `Number of students in ${key}: ${element}. List: ${students[key]}`
        );
      }
    }
  } catch (error) {
    // Throw an error if the file cannot be loaded or processed
    throw new Error("Cannot load the database");
  }
};
