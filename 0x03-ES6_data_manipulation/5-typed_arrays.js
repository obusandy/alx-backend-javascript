/* returns a new ArrayBuffer with an Int8 value at a specific position */
export default function createInt8TypedArray(length, position, value) {
  if (position > length) {
    throw new Error("Position outside range");
  }
  const bufr = new ArrayBuffer(length);
  const dtView = new DataView(bufr);
  dtView.setInt8(position, value);
  return dtView;
}
