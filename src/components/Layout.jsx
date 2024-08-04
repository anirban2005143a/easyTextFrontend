import React from "react";
import Footer from "./navbar";
import Navbar from "./footer";
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
