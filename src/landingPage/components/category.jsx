import { motion } from "framer-motion";
import {
  FaApple,
  FaGamepad,
  FaHome,
  FaPlug,
  FaHeadphones,
  FaCamera,
  FaDumbbell,
} from "react-icons/fa";
import { MdPhoneIphone, MdFitnessCenter } from "react-icons/md";
import { PiPenNibFill } from "react-icons/pi";
import { BsPhone } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GiElectric } from "react-icons/gi";
import { TbTools } from "react-icons/tb";

const accessories = [
  { icon: <FaApple size={28} />, label: "AirTag and Accessories" },
  { icon: <MdPhoneIphone size={28} />, label: "Cases & Protection" },
  { icon: <PiPenNibFill size={28} />, label: "Creative Tools" },
  { icon: <FaGamepad size={28} />, label: "Gaming" },
  { icon: <FaHeadphones size={28} />, label: "Headphones & Speakers" },
  { icon: <MdFitnessCenter size={28} />, label: "Health & Fitness" },
  { icon: <FaHome size={28} />, label: "Smart Home Accessories" },
  { icon: <BsPhone size={28} />, label: "MagSafe" },
  { icon: <FaCamera size={28} />, label: "Photography" },
  { icon: <FaPlug size={28} />, label: "Charging Essentials" },
];

export default function Category() {
  return (
    <div className="flex flex-col items-center justify-center py-2 px-4 gap-[30px] pt-[80px]">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
      >
        Shop by Category
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-600 text-center mb-12"
      >
        Discover the perfect accessories.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-5xl">
        <Link to="/airtag">
          <button className="flex items-center gap-3 w-[300px] justify-center h-[65px] bg-white shadow-md rounded-xl text-gray-700 hover:shadow-lg transition">
            <FaApple className="text-3xl text-[black]" /> AirTag and Accessories
          </button>
        </Link>

        <Link to="/cases">
          <button className="flex items-center gap-3 w-[300px] justify-center h-[65px]  bg-white shadow-md rounded-xl text-gray-700 hover:shadow-lg transition">
            <MdPhoneIphone className="text-3xl text-[black]" /> Cases &
            Protection
          </button>
        </Link>

        <button className="flex items-center gap-3 w-[300px] justify-center h-[65px] bg-white shadow-md rounded-xl text-gray-700 hover:shadow-lg transition">
          <TbTools className="text-3xl text-[black]" /> Creative Tools
        </button>

        <button className="flex items-center gap-3  w-[300px] justify-center h-[65px] bg-white shadow-md rounded-xl text-gray-700 hover:shadow-lg transition">
          <FaGamepad className="text-3xl text-[black]" /> Gaming Zone
        </button>

        <button className="flex items-center gap-3  w-[300px] justify-center h-[65px] bg-white shadow-md rounded-xl text-gray-700 hover:shadow-lg transition">
          <FaHeadphones className="text-3xl text-[black]" /> Headphones &
          Speakers
        </button>

        <button className="flex items-center gap-3  w-[300px] justify-center h-[65px] bg-white shadow-md rounded-xl text-gray-700 hover:shadow-lg transition">
          <FaDumbbell className="text-3xl text-[black]" /> Health & Fitness
        </button>

        <button className="flex items-center gap-3  w-[300px] justify-center h-[65px] bg-white shadow-md rounded-xl text-gray-700 hover:shadow-lg transition">
          <FaHome className="text-3xl text-[black]" /> Smart Home Accessories
        </button>

        <button className="flex items-center gap-3  w-[300px] justify-center h-[65px] bg-white shadow-md rounded-xl text-gray-700 hover:shadow-lg transition">
          <MdPhoneIphone className="text-3xl text-[black]" /> MagSafe
        </button>

        <button className="flex items-center gap-3  w-[300px] justify-center h-[65px] bg-white shadow-md rounded-xl text-gray-700 hover:shadow-lg transition">
          <GiElectric className="text-3xl text-[black]" /> Charging Essentials
        </button>

        <button className="flex items-center gap-3  w-[300px] justify-center h-[65px] bg-white shadow-md rounded-xl text-gray-700 hover:shadow-lg transition">
          <FaCamera className="text-3xl text-[black]" /> Photography
        </button>
      </div>
    </div>
  );
}
