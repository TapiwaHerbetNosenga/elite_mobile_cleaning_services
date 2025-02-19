import React from "react";
import {NavBar, MobileMenu} from "./Navbar";
import Footer from "./Footer";


const Layout = ({ children }) => {
  return (
    <div id="site-wrapper">
      {/* Navigation Bar */}
      <NavBar />
      <MobileMenu />

      {/* Main Content */}
      <main id="pageMain" className="">{children}</main>

      {/* Page Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
