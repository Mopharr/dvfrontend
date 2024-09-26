import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PProperties from "../components/properties";

function MyApp({ Component, pageProps }) {
  return (
    <PProperties>
      <Component {...pageProps} />
    </PProperties>
  );
}

export default MyApp;
