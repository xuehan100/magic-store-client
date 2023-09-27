import axios from "axios";

export default ({ req }) => {
  if (typeof window === "undefined") {
    // on the server, req should be made to http://ingress-nginx.ingress-nginx.svc.cluster.local
    console.log("server side rendering");
    return axios.create({
      baseURL:
        "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",
      headers: req.headers
    });
  } else {
    // on the browser, req should be made to a base url of ''
    console.log("browser side rendering");
    return axios.create({
      baseURL: "/"
    });
  }
};
