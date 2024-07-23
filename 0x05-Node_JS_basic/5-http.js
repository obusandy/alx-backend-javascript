const http = require("http");
const fs = require("fs");

function countStudents(path) {
  // Read the file asynchronously
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
      // Handle any errors that occur
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
      // Obj to store the result
      const l = {};

      ln.forEach((line) => {
        // Get the field and first name from the line
        const list = line.split(",");
        if (!fields[list[frstNindx]]) fields[list[frstNindx]] = 0;
        fields[list[frstNindx]] += 1;
        // Initialize the field count if it doesn't exist
        if (!students[list[frstNindx]]) students[list[frstNindx]] = "";
        students[list[frstNindx]] += students[list[frstNindx]]
          ? `, ${list[fIndx]}`
          : list[fIndx];
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
const hostname = "localhost";
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  // URL path is /, it should display str in the page body
  if (req.url === "/") res.end("Hello Holberton School!");
  if (req.url === "/students") {
    res.write("This is the list of our students\n");
    countStudents(process.argv[2])
      .then((data) => {
        res.write(data.numberStudents);
        res.write(data.listStudents.join("\n"));
        res.end();
      }) // return plain text
      .catch((err) => {
        res.end(err.message);
      });
  }
});

app.listen(port, hostname);

module.exports = app;
