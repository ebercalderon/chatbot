import Layout from './components/Layout';
import Section1 from './components/Section1';
import Guides from './components/Guides';
import './styles/globals.css';

function App() {
  return (
    <>
      <Layout>
        <Section1 />
        <Guides />
      </Layout>
    </>
  );
}

export default App;
