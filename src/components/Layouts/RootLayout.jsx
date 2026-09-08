import React from "react";
import { Outlet } from "react-router";
import Header from "../common/Header";
import Footer from "../common/Footer";
import BackgroundUi from "../common/BackgroundUi";

function RootLayout() {
  return (
    <section id="root">
      <Header />
      <main id="content" className="z-10 relative">
        <Outlet />
      </main>
      <BackgroundUi />
      <Footer />
    </section>
  );
}

export default RootLayout;
