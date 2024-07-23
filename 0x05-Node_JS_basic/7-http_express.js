const express = require("express");
const fs = require("fs");

function countStudents(path) {
  // Read the file asynchronously
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
      // Handle any errors that occur
      if (err) return reject(Error("Cannot load the database"));
      // plit the file data into lines and remove the header.last empty line
      const ln = data.split("\n").slice(1, -1);
      // extracts the header (firstline),divides it into the names of the col.
      const header = data.split("\n").slice(0, 1)[0].split(",");
      // fetch firstname and fieldname
      const fIndx = header.findIndex((ele) => ele === "firstname");
      const frstNindx = header.findIndex((ele) => ele === "field");
      // Initialize objects
      const fields = {};
      const students = {};
      // Obj to store the result
      const l = {};

      ln.forEach((line) => {
        // Get the field and first name from the line
        const lst = line.split(",");
        if (!fields[lst[frstNindx]]) fields[lst[frstNindx]] = 0;
        fields[lst[frstNindx]] += 1;
        // Initialize the field count if it doesn't exist
        if (!students[lst[frstNindx]]) students[lst[frstNindx]] = "";
        students[lst[frstNindx]] += students[lst[frstNindx]]
          ? `, ${lst[fIndx]}`
          : lst[fIndx];
      });

      // Store the total no of students in the result obj
      l.numberStudents = `Number of students: ${ln.length}\n`;
      // Initialize an array to store the list of students for each field
      l.listStudents = [];
      for (const key in fields) {
        if (Object.hasOwnProperty.call(fields, key)) {
          const element = fields[key];
          l.listStudents.push(
            `Number of students in ${key}: ${element}. List: ${students[key]}`
          );
        }
      }
      // Resolve the promise with the result obj
      return resolve(l);
    });
  });
}

// listen on port 1245
const app = express();
const port = 1245;

// request response
app.get("/", (req, res) => {
  res.send("Hello Holberton School!");
});
app.get("/students", (req, res) => {
  res.write("This is the list of our students\n");
  countStudents(process.argv[2])
    .then((data) => {
      res.write(data.numberStudents);
      res.end(data.listStudents.join("\n"));
    })
    .catch((err) => {
      res.end(err.message);
    });
});
app.listen(port); // Start the HTTP server and listen

module.exports = app;
