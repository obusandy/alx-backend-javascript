/* start by importing */
import getListStudentIds from "./1-get_list_student_ids";

export default function getStudentIdsSum(students) {
  /* returns the sum of all the student ids. */
  if (!Array.isArray(students)) {
    return 0;
  }
  const ttlids = getListStudentIds(students);
  return ttlids.reduce((sum, id) => sum + id, 0);
}
