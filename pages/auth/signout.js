import { useEffect } from "react";
import Router from "next/router";
import useRequest from "../../hooks/useRequest";
import { Method, SIGNOUT_API_PATH } from "../../constants";

export default () => {
  const { doRequest, errors } = useRequest({
    url: SIGNOUT_API_PATH,
    method: Method.POST,
    body: {},
    onSuccess: () => Router.push("/")
  });

  useEffect(() => {
    doRequest();
  }, []);

  return <div>Signing you out</div>;
};
