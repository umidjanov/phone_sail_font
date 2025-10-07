import NavbarDefault from "./navbar";
import { Footer } from "./footer";
import Header from "./header";
import Section from "./section";
import { Link } from "react-router-dom";

const accessories = [
  {
    title: "iPhone 15 Pro Max Clear Case with MagSafe",
    price: "$49.00",
    img: "videos/MA7F4.png",
  },
  {
    title: "iPhone 15 Plus Silicone Case with MagSafe – Peony",
    price: "$49.00",
    badge: "New",
    img: "videos/MDGR4_FV401.png",
  },
  {
    title: "iPhone FineWoven Wallet with MagSafe – Deep Blue",
    price: "$59.00",
    img: "videos/MA6X4.png",
  },
  {
    title: "AirPods Pro 2",
    price: "$249.00",
    badge: "Best Experience",
    img: "videos/airpods-pro-2-hero-select-202409.png",
  },
  {
    title: "iPhone 13 Silicone Case – Winter Blue",
    price: "$49.00",
    img: "videos/MD3Q4.png",
  },
];

const chargers = [
  {
    title: "20W USB-C Power Adapter",
    price: "$19.00",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MHJA3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1601688658000",
  },
  {
    title: "MagSafe Charger (1 m)",
    price: "$39.00",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MHXH3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1692996726442",
  },
  {
    title: "30W USB-C Power Adapter",
    price: "$39.00",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2E3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1629908546000",
  },
];

const Card = ({ img, title, price, badge }) => (
  <div className="bg-white rounded-2xl p-4 text-center shadow-md hover:shadow-xl transition-all duration-300">
    <img src={img} alt={title} className="w-full h-56 object-contain mb-3" />
    {badge && (
      <span className="text-xs text-orange-600 font-semibold">{badge}</span>
    )}
    <p className="text-gray-800 font-medium">{title}</p>
    <p className="text-gray-500">{price}</p>
  </div>
);

export default function Accessors() {
  return (
    <div className="flex flex-col gap-[40px] px-[40px]">
      <NavbarDefault />
      <Header />
      <section>
        <h2 className="text-2xl font-bold text-center mb-6">
          Featured iPhone Accessories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {accessories.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
        <Link to="/shopCases">
          <p className="text-center mt-4 text-blue-500 hover:underline cursor-pointer">
            Shop Cases & Protection ›
          </p>
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-center mb-6">
          Charging Essentials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {chargers.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>
        <Link to="/shopCases">
          <p className="text-center mt-4 text-blue-500 hover:underline cursor-pointer">
            Shop Charging Essentials ›
          </p>
        </Link>
      </section>
      <Section />
      <Footer />
    </div>
  );
}
