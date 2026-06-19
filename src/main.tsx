import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { Button, createTheme, MantineProvider } from "@mantine/core";
import { Analytics } from "@vercel/analytics/react";

import ManKind from "./pages/ManKind.tsx";
import Home from "./pages/Home.tsx";
import AboutMe from "./pages/AboutMe.tsx";
import Contact from "./pages/Contact.tsx";
// import Secret from "./pages/Secret.tsx";
import Testimonials from "./pages/Testimonials.tsx";
import Packages from "./pages/Packages.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import WorkingWithMe from "./pages/WorkingWithMe.tsx";
import FAQ from "./pages/FAQ.tsx";

import "@mantine/core/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/carousel/styles.css";
import "./index.css";
import ScrollToTop from "./ScrollToTop.ts";

const theme = createTheme({
  fontFamily: "Cormorant Infant, serif",
  headings: { fontFamily: "Kapakana, cursive" },
  components: {
    Button: Button.extend({
      defaultProps: {
        color: "steelblue",
      },
    }),
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <Analytics />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="*" element={<Navigate to="/" replace />} />

          <Route path="man-kind" element={<ManKind />} />

          <Route index element={<Home />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="working-with-me" element={<WorkingWithMe />} />

          <Route path="portfolio">
            <Route index element={<Portfolio />} />
            <Route path=":gallery" element={<Portfolio />} />
          </Route>

          <Route path="packages">
            <Route index element={<Packages />} />
            <Route path=":rate" element={<Packages />} />
          </Route>

          <Route path="testimonials" element={<Testimonials />} />
          <Route path="faq" element={<FAQ />} />
          {/*<Route path="secret" element={<Secret />} />*/}

          <Route path="contact" element={<Contact />} />
          <Route path="contact/man" element={<Contact />} />
          <Route path="contact/myth" element={<Contact />} />
          <Route path="contact/legend" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>,
);
