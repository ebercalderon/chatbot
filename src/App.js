import Layout from "./components/Layout";
import Banner from "./components/Banner";
import Guides from "./components/Guides";
import "./styles/globals.css";

function App() {
  return (
    <>
      <Layout>
        <Banner />
        <Guides />
      </Layout>
    </>
  );
}

export default App;
