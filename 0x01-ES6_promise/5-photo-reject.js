/* Write and export a function named uploadPhoto. It should accept one arg */
export default function uploadPhoto(filename) {
  return Promise.reject(Error(`${filename} cannot be processed`));
}
