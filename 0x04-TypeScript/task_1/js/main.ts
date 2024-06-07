interface Teacher {

  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [key: string]: any, // allows addding any attrr. dynamically
}

interface Directors extends Teacher {
  numberOfReports: number,
}
interface printTeacherFunction extends Teacher {
  printTeacher: (firstName: string, lastName: string) => string,
}

// Interface for a Student object
interface Student {
  readonly firstName: string,
  readonly lastName: string,
  workOnHomework: () => string,
  displayName: () => string,
}

// Function to print a teacher's initials and last name
function printTeacher(firstName:string, lastName:string) {
  return `${firstName.charAt(0)}. ${lastName}`;
}

// Class implementing the Student interface
class StudentClass implements Student {

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework():string { return  "Currently working"; }
  displayName():string { return this.firstName; }
}
