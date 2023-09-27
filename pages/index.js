import { CURRENT_USER_API_PATH } from "../constants";
import buildClient from "../api/buildClient";

const LandingPage = ({ currentUser }) => {
  return currentUser ? (
    <h1>You are signed in</h1>
  ) : (
    <h1>You are NOT signed in</h1>
  );
};

LandingPage.getInitialProps = async (context) => {
  console.log("LANDING PAGE!");
  let response;
  const client = buildClient(context);
  /**
   * add a try catch block here in case of 401 unauthorized error due to the missing cookie in request headers
   * we need to make sure our client still works even though there is no cookie set
   * return an empty object if the cookie is not set
   */
  try {
    response = await client.get(CURRENT_USER_API_PATH);
    return response.data;
  } catch (err) {
    return {};
  }
};

export default LandingPage;
