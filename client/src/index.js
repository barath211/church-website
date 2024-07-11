import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from "./events/Events";
import Login from "./Login/Login.jsx";
import SignUp from "./SignUp/SignUp.jsx";
import Footer from "./footer/Footer.jsx";
import Homepage from "./homepage/Homepage.jsx";
import ImNew from "./imNew/ImNew.jsx";
import AboutUs from "./aboutUs/About.jsx";
import Ministries from "./Ministries/Ministries.jsx";
import Childrenministry from "./childrenministry/Childrenministry.jsx";
import Youthministry from "./youthministry/Youthministry.jsx";
import Womenministry from "./womenministry/Womenministry.jsx";
import Worship from "./worship/Worship.jsx";
import Socialservice from "./socialservice/Socialservice.jsx";
import MemberForm from "./MemberForm/MemberForm.jsx";
import Admin from "./Admin/Admin.jsx";
import PageNotFound from "./PageNotFound/PageNotFound.jsx";
import Contribute from "./contribute/Contribute.jsx";
import LoginUsers from "./Admin/components/LoginUsers.jsx";
import ChurchMembers from "./Admin/components/ChurchMembers.jsx";
import FindUsers from "./Admin/components/FindUsers.jsx";
import FamilyDetails from "./Admin/components/FamilyDetails.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/events" element={<Events />} />
        <Route path="/imNew" element={<ImNew />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/Ministries" element={<Ministries />} />
        <Route path="/childrenministry" element={<Childrenministry />} />
        <Route path="/youthministry" element={<Youthministry />} />
        <Route path="/womenministry" element={<Womenministry />} />
        <Route path="/worship" element={<Worship />} />
        <Route path="/socialservice" element={<Socialservice />} />
        <Route path="/MemberForm" element={<MemberForm />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/login-users" element={<LoginUsers />} />
        <Route path="/church-members" element={<ChurchMembers />} />
        <Route path="/find-users" element={<FindUsers />} />
        <Route path="/family-details" element={<FamilyDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you have `reportWebVitals` and want to use it
reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
