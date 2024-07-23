const readDatabase = require("../utils");

module.exports = class StudentsController {
  // first static
  static getAllStudents(request, response) {
    // request and response args
    readDatabase(process.argv[2])
      // calls the function readDatabase from the utils file
      .then((data) => {
        let printData = "This is the list of our students";
        for (const field in data) {
          if (Object.hasOwnProperty.call(data, field)) {
            const element = data[field];
            printData += `\nNumber of students in ${field}: ${element.number}. ${element.students}`;
          }
        }
        response.send(printData); // return a status 200
      })
      .catch((err) => {
        response.send(err.message); // return a status 500 and the error message
      });
  }

  // first static
  static getAllStudentsByMajor(request, response) {
    // request and response args
    if (!["SWE", "CS"].includes(request.params.major))
      response.status(500).send("Major parameter must be CS or SWE");
    readDatabase(process.argv[2])
      .then((data) => {
        const printData = data[request.params.major].students;
        if (printData) response.send(printData);
        // the user is passing another param,the server should return a 500 and the err
        response.status(500).send("Major parameter must be CS or SWE");
      })
      .catch((err) => {
        response.send(err.message);
      });
  }
};
