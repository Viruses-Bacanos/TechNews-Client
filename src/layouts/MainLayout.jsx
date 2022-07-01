import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function MainLayout (props) {

    return (
        <>
            <Navbar />
                {props.children}
            <Footer />
        </>
    )

}

export default MainLayout