import { AppShell, MantineProvider } from "@mantine/core";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";

import "@mantine/core/styles.css";

function App() {
  return (
    <MantineProvider theme={{ fontFamily: "Inter, sans-serif" }}>
      <HashRouter>
        <AppShell>
          <AppShell.Header>{/* <HeaderMenu /> */}</AppShell.Header>
          <AppShell.Main style={{ background: "#FFFBF4" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
            </Routes>
          </AppShell.Main>
        </AppShell>
      </HashRouter>
    </MantineProvider>
  );
}

export default App;
