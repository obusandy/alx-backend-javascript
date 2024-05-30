/** Implement a class named Car */
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this.color = color;
  }
  /** brand (String) */
  get brand() {
    return this._brand;
  }
  /** motor (String) */
  get motor() {
    return this._motor;
  }
  /** color (String) */
  get color() {
    return this._color;
  }
  /** values */
  set brand(value) {
    this._brand = value;
  }
  /** values */
  set motor(value) {
    this._motor = value;
  }
  /** values */
  set color(value) {
    this._color = value;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];

    return new Species();
  }
}
