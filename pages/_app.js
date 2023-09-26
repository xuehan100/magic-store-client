import "bootstrap/dist/css/bootstrap.css";

// define custom app component to wrap other components
// in order to include global CSS into project
export default ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
