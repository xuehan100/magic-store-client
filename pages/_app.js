import "bootstrap/dist/css/bootstrap.css";
import buildClient from "../api/buildClient";
import { CURRENT_USER_API_PATH } from "../constants";
import Header from "../components/header";

/**
 * define custom app component to wrap other components in order to include global CSS into project
 * _app.js is a special file used for customizing the overall layout and behavior of your application.
 * It is a layout component that wraps around all other pages and components in your Next.js app.
 * <Component {...pageProps} /> essentially passes the pageProps to the index.js component
 */
const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <Component {...pageProps} />
    </div>
  );
};

// custom app component context === {Component, ctx: {req, res}}
AppComponent.getInitialProps = async (appContext) => {
  // get current user information
  const client = buildClient(appContext.ctx);
  const { data } = await client.get(CURRENT_USER_API_PATH);

  // get pageProps to pass them to all the other components
  let pageProps;
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  return {
    pageProps,
    ...data
  };
};

export default AppComponent;
