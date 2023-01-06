import { useState } from "react";
import Logo from "./components/Logo";
import Faq from "./components/Faq";
import Accounts from "./components/Accounts";
import About from "./components/About";
import AccountContent from "./components/AccountContent";
import Website from "./components/Website";
import WebsiteContent from "./components/WebsiteContent";

function App() {
  return (
    <>
      <Logo />
      <Faq />
      <Accounts />
      <About />
      <AccountContent />
      <Website />
      <WebsiteContent />
    </>
  );
}
export default App;
