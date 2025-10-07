import { Footer } from "./footer";
import Header from "./header";
import NavbarDefault from "./navbar";
import Section from "./section";

export const Block = () => {
  return (
    <div className="flex flex-col">
      <NavbarDefault />
      <Header />
      <Section />
      <Footer />
    </div>
  );
};
