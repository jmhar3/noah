import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { MantineProvider } from "@mantine/core";

import Home from "./pages/Home.tsx";
import Gallery from "./pages/Gallery.tsx";
import AboutMe from "./pages/AboutMe.tsx";
import Contact from "./pages/Contact.tsx";
import Packages from "./pages/Packages.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import WorkingWithMe from "./pages/WorkingWithMe.tsx";
import FAQ from "./pages/FAQ.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="working-with-me" element={<WorkingWithMe />} />
          <Route path="packages" element={<Packages />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />

          <Route path="portfolio">
            <Route index element={<Portfolio />} />
            <Route path=":gallery" element={<Gallery />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>,
);
