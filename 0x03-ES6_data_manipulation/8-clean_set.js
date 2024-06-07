/**
 *
 * @param {*} set -  Set of strings to filter
 * @param {*} startString
 * @returns - a str of all the set vals that start with a specific string,0.
 */
export default function cleanSet(set, startString) {
  const lastArr = [];
  if (
    set instanceof Set &&
    typeof startString === "string" &&
    startString.length > 0
  ) {
    for (const item of set) {
      // Check if set is a Set
      if (typeof item === "string" && item.startsWith(startString)) {
        lastArr.push(item.slice(startString.length));
      }
    }
  }
  return lastArr.join("-");
}
