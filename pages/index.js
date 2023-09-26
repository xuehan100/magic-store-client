import axios from "axios";
import { CURRENT_USER_API_PATH } from "../constants";

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  return <h1>Landing page</h1>;
};

LandingPage.getInitialProps = async ({ req }) => {
  console.log(req.headers);
  if (typeof window === "undefined") {
    // on the server, req should be made to http://ingress-nginx.ingress-nginx.svc.cluster.local
    const response = await axios.get(
      `http://ingress-nginx-controller.ingress-nginx.svc.cluster.local${CURRENT_USER_API_PATH}`,
      { headers: req.headers }
    );
    return response.data;
  } else {
    // on the browser, req should be made to a base url of ''
    const response = await axios.get(CURRENT_USER_API_PATH);
    return response.data;
  }
  return {};
};

export default LandingPage;
