module.exports = class AppController {
  //  static method getHomepage
  static getHomepage(request, response) {
    response.status(200).send("Hello Holberton School!"); //  returns a 200 status and a message
  }
};
