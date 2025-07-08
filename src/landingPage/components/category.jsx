import { motion } from "framer-motion";
import {
  FaApple,
  FaGamepad,
  FaHome,
  FaPlug,
  FaHeadphones,
  FaCamera,
} from "react-icons/fa";
import { MdPhoneIphone, MdFitnessCenter } from "react-icons/md";
import { PiPenNibFill } from "react-icons/pi";
import { BsPhone } from "react-icons/bs";

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
    <div className="flex flex-col items-center justify-center py-2 px-4 gap-[30px]">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl">
        {accessories.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="text-black">{item.icon}</div>
            <p className="text-lg text-gray-700">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
