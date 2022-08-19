import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {

    function topFunction() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default Layout;