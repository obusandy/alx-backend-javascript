/** return an array of 3 ClassRoom objects with the sizes 19, 20, and 34 */
import ClassRoom from "./0-classroom";

export default function initializeRooms() {
  const newrooms = [];
  for (const rm of [19, 20, 34]) {
    newrooms.push(new ClassRoom(rm));
  }
  return newrooms;
}
