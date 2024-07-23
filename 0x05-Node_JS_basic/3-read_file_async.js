const fs = require("fs");

module.exports = function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
      if (err) return reject(Error("Cannot load the database"));
      // Read the file synchronously
      const ln = data.split("\n").slice(1, -1);
      // plit the file data into lines and remove the header and last empty line
      const header = data.split("\n").slice(0, 1)[0].split(",");
      // extracts the header (firstline),divides it into the names of the col.
      const fIndx = header.findIndex((ele) => ele === "firstname");
      const frstNindx = header.findIndex((ele) => ele === "field");
      // Initialize objects
      const fields = {};
      const students = {};

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

      // Output the total number of students
      console.log(`Number of students: ${ln.length}`);
      // Output the number of students and list of names by each field
      for (const key in fields) {
        if (Object.hasOwnProperty.call(fields, key)) {
          const element = fields[key];
          console.log(
            `Number of students in ${key}: ${element}. List: ${students[key]}`
          );
        }
      }
      // Resolve the promise upon success
      return resolve();
    });
  });
};
