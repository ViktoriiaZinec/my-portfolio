import { BrowserRouter } from "react-router-dom";
import { About, Contacts, Hero, Navbar, Projects, Skills } from "./components";
import { SnackbarProvider } from "notistack";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 base-gradient ">
        <Navbar />
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contacts />
        </SnackbarProvider>
      </div>
    </BrowserRouter>
  );
};

export default App;
