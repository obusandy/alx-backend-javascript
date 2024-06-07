/**
 *
 * @param {map} map - to be processed
 * throws err if not a map
 */
export default function (map) {
  if (!(map instanceof Map)) {
    throw new Error("Cannot process");
  }
  map.forEach((value, key, map) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
