import "./App.css";

import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
// import Modal from "./components/ui/Modal";
import DashboardSideBar from "../src/layouts/dashboard/Sidebar";
import ShadowCard from "./components/ui/ShadowCards";

// import Navigation from "./layouts/Navbar";

// import Footer from "./layouts/Footer";

import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <header className="App-header ">
        <Home />
        {/* <Navigation /> */}
        =======
        {/* <DashboardSideBar />
        <br />
        <Button text="Sample Button" link="login" styles={{}} />
        <Button text="Sign Up Button" link="signup" />
        <Card>
          <h4>Card Component</h4>
        </Card>
        <br />
        <ShadowCard>
          <h4>Shadow Card Component</h4>
        </ShadowCard> */}
        {/* <Modal>
          <h3>Modal Component</h3>
        </Modal> */}
      </header>
      <br />
      <br />
      {/* <Footer /> */}
    </>
  );
}

export default App;
