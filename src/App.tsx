import { AppShell, MantineProvider } from "@mantine/core";
import "./App.css";
import Home from "./pages/Home";
import HeaderMenu from "./components/Header/HeaderMenu";

import "@mantine/core/styles.css";

function App() {
  return (
    <MantineProvider theme={{ fontFamily: "Inter, sans-serif" }}>
      <AppShell header={{ height: 56 }}>
        <AppShell.Header>
          <HeaderMenu />
        </AppShell.Header>
        <AppShell.Main style={{ background: "#FFFBF4" }}>
          <Home />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
