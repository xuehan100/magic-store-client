/** API PATH */
export const SIGNIN_API_PATH = "/api/users/signin";
export const SIGNUP_API_PATH = "/api/users/signup";
export const SIGNOUT_API_PATH = "/api/users/signout";
export const CURRENT_USER_API_PATH = "/api/users/currentuser";

/** API METHOD */
const Method = {
  POST: "post",
  GET: "get"
};
Object.freeze(Method);
export { Method };
