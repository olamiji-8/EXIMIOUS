import SearchForm from "../components/SearchForm";
import VendorsList from "../components/VendorsList";
import Layout from "../Layout";

const VendorListPage = () => {
    return (
        <Layout>
            <SearchForm placeholder={'Search by name, location'}/>
            <main className="idk1">
                <VendorsList/>
            </main>
        </Layout>
    )
}

export default VendorListPage