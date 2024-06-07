/*  returns an array of ids from a list of object. */
export default function getListStudentIds(arry) {
  if (!Array.isArray(arry)) {
    return [];
  }
  return arry.map((objt) => objt.id);
}
