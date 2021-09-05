import './css/global.css';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import Layout from './Layout/Layout';
import MainSection from './Layout/MainSection';

const App = () => (
    <Layout>
        <Header />
        <MainSection />
        <Footer />
    </Layout>
);

export default App;
