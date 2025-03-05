import { compare } from "bcryptjs";
import { Query } from "../../mysql.js";

export let handleLogin = async (email, passw) => {
  let user = await findUserByEmail(email);
  const isMatch = await compare(passw, user.passw);
  if (isMatch) {
    return isMatch;
  }
  return `The password that you've entered is incorrect`;
};
export let findUserByEmail = async (email) => {
  try {
    const rows = await Query("SELECT * FROM `users` WHERE `email` = ? ", email);
    return rows[0];
  } catch (error) {
    console.log(error);
    return false;
  }
};
export let findUserById = async (id) => {
  try {
    const rows = await Query("SELECT * FROM `users` WHERE `id` = ? ", id);
    return rows[0];
  } catch (error) {
    console.log(error);
    return false;
  }
};
export let comparePassword = (passw, userObject) => {
  return new Promise(async (resolve, reject) => {
    try {
      await compare(passw, userObject.passw).then((isMatch) => {
        if (isMatch) {
          resolve(true);
        } else {
          resolve(`The password that you've entered is incorrect`);
        }
      });
    } catch (e) {
      reject(e);
    }
  });
};

