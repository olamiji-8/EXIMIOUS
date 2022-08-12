import React from "react";
import { Routes, Route } from "react-router-dom";

import App from "./App";

import LoginPage from "./pages/Login";
import SignUpPage from "./pages/Signup";
import Dashboard from "./pages/dashboard/Home";
import SwitchMode from "./pages/dashboard/Switch-Mode";
import UploadProperty from "./pages/dashboard/Upload";
import SavedProperty from "./pages/dashboard/Saved-Property";
import Transactions from "./pages/dashboard/Transactions";
import Receipts from "./pages/dashboard/Receipts";
import Drafts from "./pages/dashboard/Drafts";
import PropertyData from "./pages/dashboard/Property-Data";
import ServiceProvider from "./pages/dashboard/Service-Provider";
import EditAccount from "./pages/dashboard/Edit-Accounts";
import Referral from "./pages/dashboard/Referral";
import Wallet from "./pages/dashboard/Wallet";
import ServiceIndexPage from "./features/services/pages/ServiceIndexPage";
import ServiceListPage from "./features/services/pages/ServiceListPage";
import VendorListPage from "./features/services/pages/VendorListPage";
import VendorDetailPage from "./features/services/pages/VendorDetailPage"

import ErrorPage from "./Error";
import RentPage from "./pages/Rent";

const RoutesComponents = () => {
  return (
    <Routes>
      <Route index path="/" element={<App />}></Route>
      <Route index path="/rent" element={<RentPage />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/upload" element={<UploadProperty />}></Route>
      <Route path="/switch" element={<SwitchMode />}></Route>
      <Route path="/saved-property" element={<SavedProperty />}></Route>
      <Route path="/transactions" element={<Transactions />}></Route>
      <Route path="/receipts" element={<Receipts />}></Route>
      <Route path="/drafts" element={<Drafts />}></Route>
      <Route path="/property-data" element={<PropertyData />}></Route>
      <Route path="/service-provider" element={<ServiceProvider />}></Route>
      <Route path="/edit-account" element={<EditAccount />}></Route>
      <Route path="/referral" element={<Referral />}></Route>
      <Route path="/wallet" element={<Wallet />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignUpPage />}></Route>
      <Route path="/service" element={<ServiceIndexPage/>}/>
      <Route path="/services" element={<ServiceListPage/>}/>
      <Route path="/vendors" element={<VendorListPage/>}/>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
  );
};

export default RoutesComponents;
