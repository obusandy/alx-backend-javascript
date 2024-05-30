/*  collectively resolve all promises and log body firstName lastName to the console. */

import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((respons) => {
      console.log(`${respons[0].body} ${respons[1].firstName} ${respons[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
