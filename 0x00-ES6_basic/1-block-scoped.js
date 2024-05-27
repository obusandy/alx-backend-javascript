export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // instantiate variables using const
    const task2 = false; // instantiate variables using let
  }

  return [task, task2];
}
