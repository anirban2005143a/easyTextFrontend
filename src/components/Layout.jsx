import React from "react";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
const Layout = ({ Children }) => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto mt-4">
        {Children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
