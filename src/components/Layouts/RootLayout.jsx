import React from "react";
import { Outlet } from "react-router";
import Header from "../common/Header";
import Footer from "../common/Footer";
import BackgroundUi from "../common/BackgroundUi";

function RootLayout() {
  return (
    <section id="root">
      <Header />
      <main>
        <Outlet />
      </main>
      <BackgroundUi />
      <Footer />
    </section>
  );
}

export default RootLayout;
