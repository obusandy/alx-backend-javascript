/* start by importing */
import getListStudentIds from "./1-get_list_student_ids";

export default function getStudentIdsSum(students) {
  /* returns the sum of all the student ids. */
  if (!Array.isArray(students)) {
    return 0;
  }
  const ids = getListStudentIds(students);
  return ids.reduce((ttlsum, id) => ttlsum + id, 0);
}
