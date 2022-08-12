import VendorCard from "../components/VendorCard"
import VendorProfile from "../components/VendorProfile"
import Feedback from "../components/Feedback"
import Layout from "../Layout"
const VendorDetailPage  = () => {
    return (
        <Layout>
            <VendorCard/>
            <div>
                <VendorProfile/>
                <Feedback/>
            </div>
            <section className="Portfolio-Section">
                <h2>Portfolio</h2>
                <div className="Portfolio">
                    <div className="Portfolio-Items">
                        
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default VendorDetailPage