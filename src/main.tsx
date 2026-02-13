import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { Button, createTheme, MantineProvider, TextInput } from "@mantine/core";

import Home from "./pages/Home.tsx";
import Gallery from "./pages/Gallery.tsx";
import AboutMe from "./pages/AboutMe.tsx";
import Contact from "./pages/Contact.tsx";
import Packages from "./pages/Packages.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import WorkingWithMe from "./pages/WorkingWithMe.tsx";
import PasswordProtected from "./pages/PasswordProtected.tsx";
import FAQ from "./pages/FAQ.tsx";

import "@mantine/core/styles.css";
import "./index.css";

const theme = createTheme({
  fontFamily: "Cormorant Infant, serif",
  headings: { fontFamily: "Kapakana, cursive" },
  components: {
    Button: Button.extend({
      defaultProps: {
        color: "cadetblue",
      },
    }),
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
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

          <Route path="secret">
            <Route index element={<Home />} />
            <Route
              path="about-me"
              element={
                <PasswordProtected>
                  <AboutMe />
                </PasswordProtected>
              }
            />
            <Route
              path="working-with-me"
              element={
                <PasswordProtected>
                  <WorkingWithMe />
                </PasswordProtected>
              }
            />
            <Route
              path="packages"
              element={
                <PasswordProtected>
                  <Packages />
                </PasswordProtected>
              }
            />
            <Route
              path="contact"
              element={
                <PasswordProtected>
                  <Contact />
                </PasswordProtected>
              }
            />
            <Route
              path="faq"
              element={
                <PasswordProtected>
                  <FAQ />
                </PasswordProtected>
              }
            />

            <Route path="portfolio">
              <Route
                index
                element={
                  <PasswordProtected>
                    <Portfolio />
                  </PasswordProtected>
                }
              />
              <Route
                path=":gallery"
                element={
                  <PasswordProtected>
                    <Gallery />
                  </PasswordProtected>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>,
);
