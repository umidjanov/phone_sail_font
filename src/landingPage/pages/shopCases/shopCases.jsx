import Category from "../../components/category";
import { Footer } from "../../components/footer";
import NavbarDefault from "../../components/navbar";
import Section from "../../components/section";

export default function ShopCases() {
  return (
    <div className="flex flex-col pt-[80px]">
      <NavbarDefault />
      <Category />
      <Section />
      <Footer />
    </div>
  );
}
