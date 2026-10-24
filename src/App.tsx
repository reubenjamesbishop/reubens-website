import { useState } from "react";
import { AppShell, MantineProvider, Modal } from "@mantine/core";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";

import "@mantine/core/styles.css";

function App() {
  const [night, setNight] = useState(() => { try { return localStorage.getItem("portfolio-theme") !== "light"; } catch { return true; } });
  const toggleTheme = () => setNight(value => { try { localStorage.setItem("portfolio-theme", value ? "light" : "dark"); } catch { /* Storage is optional. */ } return !value; });
  return (
    <MantineProvider forceColorScheme={night ? "dark" : "light"} theme={{ fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif", primaryColor: "dark", defaultRadius: "sm", components: { Modal: Modal.extend({ styles: { title: { textTransform: "lowercase" }, content: { backgroundColor: night ? "#202329" : "#FFFBF4" }, header: { backgroundColor: night ? "#202329" : "#FFFBF4" }, body: { backgroundColor: night ? "#202329" : "#FFFBF4" } } }) } }}>
      <HashRouter>
        <AppShell>
          <AppShell.Header>{/* <HeaderMenu /> */}</AppShell.Header>
          <AppShell.Main style={{ background: night ? "#171a20" : "#FFFBF4" }}>
            <Routes>
              <Route path="/" element={<Home night={night} toggleTheme={toggleTheme} />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
            </Routes>
          </AppShell.Main>
        </AppShell>
      </HashRouter>
    </MantineProvider>
  );
}

export default App;
