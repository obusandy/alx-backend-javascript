/** Constructor attributes:
code (String)
name (String)
*/
export default class Currency {
  constructor(code, name) {
    if (typeof name !== "string") {
      throw new TypeError("Name must be a string");
    }
    if (typeof code !== "string") {
      throw new TypeError("Name must be a string");
    }
    this._code = code;
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
  /** Values */

  set name(name) {
    if (typeof value === "string") {
      this._name = name;
    } else {
      throw new TypeError("Name must be a string");
    }
  }

  set code(name) {
    if (typeof code === "number") {
      this._code = name;
    } else {
      throw new TypeError("Code must be a string");
    }
  }
}
