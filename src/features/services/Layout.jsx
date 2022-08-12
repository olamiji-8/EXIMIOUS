import Footer from '../../layouts/Footer';
import Navbar from './components/Navbar';
const Layout = (props) => {
    return (
        <>
            <Navbar secBg={props.secBg}/>
            {props.children}
            <Footer/>
        </>
    )
}

export default Layout