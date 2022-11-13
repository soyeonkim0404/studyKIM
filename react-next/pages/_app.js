import "../styles/common.scss";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      {/*<Modals />*/}
    </Layout>
  );
}

export default MyApp;
