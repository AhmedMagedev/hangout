import "global.scss";
import Nav from "sections/nav";
import Footer from "sections/footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
