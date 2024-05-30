/**  attributes:
name (String)
code (String) */

export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(dgt) {
    this._name = dgt;
  }

  get code() {
    return this._code;
  }

  set code(dgt) {
    this._code = dgt;
  }

  toString() {
    return `[object ${this.code}]`;
  }
}
