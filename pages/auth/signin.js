import { useState } from "react";
import useRequest from "../../hooks/useRequest";
import { Method, SIGNIN_API_PATH } from "../../constants";
import Router from "next/router";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { doRequest, errors } = useRequest({
    url: SIGNIN_API_PATH,
    method: Method.POST,
    body: { email, password },
    onSuccess: () => Router.push("/")
  });

  const onSubmit = async (event) => {
    // prevents the browser from submitting the form and navigating to a new page
    event.preventDefault();
    doRequest();
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign In</h1>
      <div>
        <label>Email Address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"></input>
      </div>
      <div>
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"></input>
      </div>
      {errors}
      <button className="btn btn-primary">Sign in</button>
    </form>
  );
};
