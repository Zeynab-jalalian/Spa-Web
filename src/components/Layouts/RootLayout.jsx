import React from "react";
import { Outlet, useMatches } from "react-router";
import Header from "../common/Header";
import Footer from "../common/Footer";
import BackgroundUi from "../common/BackgroundUi";

function RootLayout() {
  const matches = useMatches();
  const hideFooter = matches.some((match) => match.handle?.hideFooter);

  return (
    <section id="root">
      <Header />
      <main id="content" className="z-10 relative">
        <Outlet />
      </main>
      <BackgroundUi />
      {!hideFooter && <Footer />}
    </section>
  );
}

export default RootLayout;
