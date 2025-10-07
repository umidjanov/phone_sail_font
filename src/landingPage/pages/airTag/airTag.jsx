import Category from "../../components/category";
import { Footer } from "../../components/footer";
import NavbarDefault from "../../components/navbar";

export default function AirTag() {
  return (
    <div className="flex flex-col">
      <NavbarDefault />
      <Category />
      <Footer />
    </div>
  );
}
