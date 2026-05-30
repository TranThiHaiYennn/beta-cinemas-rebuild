import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({children}){
    return(
        <div>
            <TopBar />
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}
export default Layout;