const fs = require("fs");

module.exports = function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
      if (err) return reject(Error("Cannot load the database"));
      // plit the file data into lines and remove the header.last empty line
      const ln = data.split("\n").slice(1, -1);
      // Extract the header (firstline) splits it into column names
      const header = data.split("\n").slice(0, 1)[0].split(",");
      // Find the index of the "firstname" and "field" columns
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
        // increments the field count
        fields[lst[frstNindx]] += 1;
        // Initialize the field count if it doesn't exist
        if (!students[lst[frstNindx]]) students[lst[frstNindx]] = "";
        students[lst[frstNindx]] += students[lst[frstNindx]]
          ? `, ${lst[fIndx]}`
          : lst[fIndx];
      });
      for (const key in fields) {
        if (Object.hasOwnProperty.call(fields, key)) {
          const number = fields[key];
          l[key] = {
            students: `List: ${students[key]}`,
            number,
          };
        }
      }

      return resolve(l); // Resolve the promise with the result obj
    });
  });
};
