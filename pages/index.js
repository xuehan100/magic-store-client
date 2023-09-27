import { CURRENT_USER_API_PATH } from "../constants";
import buildClient from "../api/buildClient";

/**
 * index.js is the default entry point for a Next.js page.
 *  When a user accesses the root URL of your application (e.g., https://example.com/),
 * Next.js will render the index.js page by default.
 */
const LandingPage = ({ currentUser }) => {
  return currentUser ? (
    <h1>You are signed in</h1>
  ) : (
    <h1>You are NOT signed in</h1>
  );
};

LandingPage.getInitialProps = async (context) => {
  console.log("Landing Page");
  const client = buildClient(context);
  const { data } = await client.get(CURRENT_USER_API_PATH);
  return data;
};

export default LandingPage;
