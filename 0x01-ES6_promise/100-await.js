/* an async function named asyncUploadUser that will call these two functions and return an obj  */
import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let respons = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    respons = { photo, user };
  } catch (err) {
    respons = { photo: null, user: null };
  }
  return respons;
}
