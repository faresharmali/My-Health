export const LoginUSer = async (data) => {
    // temporary logic
  if (data.email == "faresharmali3@gmail.com") {
    if (data.password == "123456789") {
      return { ok: true };
    } else {
      return { ok: false, message: "Wrong password" };
    }
  } else {
    return { ok: false, message: "This email didn't match any user" };
  }
};
