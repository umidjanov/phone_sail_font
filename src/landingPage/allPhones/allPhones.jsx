import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { instance } from "../../admin/utils/axios";
import { Footer } from "../components/footer";
import { motion } from "framer-motion";
import Section from "../components/section";
import { Carusel } from "../components/carusel";
import NavbarDefault from "../components/navbar";

export default function AllPhones() {
  const [telefon, setTelefon] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    instance
      .get("/telefonlar")
      .then((res) => setTelefon(res.data))
      .catch((error) => console.error("Error fetching telefonlar:", error));
  }, []);

  const filteredTelefonlar = telefon.filter((tel) =>
    tel.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 70,
      },
    }),
  };

  return (
    <div className="flex flex-col gap-[30px] justify-center items-center pb-[20px] px-[30px]">
      <NavbarDefault />
      <Carusel />
      <div className="flex justify-center mt-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Qidirish..."
          className="border p-2 rounded-md lg:w-80 md:w-[300px] shadow"
        />
      </div>

      <div className="flex gap-8 flex-wrap justify-center items-center pt-[20px]">
        {filteredTelefonlar.map((telefon, i) => (
          <Link to={`/allPhones/telefonlar/${telefon.id}`} key={telefon.id}>
            <motion.div
              className="bg-gradient-to-br from-white via-slate-100 to-blue-100 text-gray-800 rounded-2xl shadow-xl w-[270px] p-6 flex flex-col gap-4 hover:scale-[1.03] transition-all duration-300 ease-in-out hover:shadow-[#afb47a]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              custom={i}
            >
              <img
                src={telefon.img}
                alt={telefon.title}
                className="w-[230px] mx-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
              />
              <h1 className="text-xl font-bold text-center">{telefon.title}</h1>
              <div className="flex flex-col gap-4 items-start">
                <p className="text-sm text-center text-gray-700">
                  💵 Narxi: {telefon.price} $
                </p>
                <p className="text-sm text-center text-gray-700">
                  🎨 Rang: {telefon.color}
                </p>
                <p className="text-sm text-center text-gray-700">
                  💾 Xotirasi: {telefon.xotirasi} Gb
                </p>
                <p className="text-sm text-center italic text-gray-600">
                  {telefon.desc}
                </p>
                <p className="text-sm text-center font-semibold">
                  📱 Turi:{" "}
                  <span className="text-blue-600">
                    {telefon.telefon_turlari?.title}
                  </span>
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
      <Section />
      <Footer />
    </div>
  );
}
