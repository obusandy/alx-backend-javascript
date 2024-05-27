export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;
/*
 * the variables inside the function taskBlock
 * so that the variables aren’t overwritten inside
 * the conditional block.
 */
  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
