import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { instance } from "../../admin/utils/axios";
import { Footer } from "../components/footer";
import { Carusel } from "../components/carusel";
import NavbarDefault from "../components/navbar";
import Section from "../components/section";

export default function TypeGetAllPhones() {
  const { id } = useParams();
  const [telefonlar, setTelefonlar] = useState([]);

  useEffect(() => {
    instance.get(`/telefonlarTuri/${id}`).then((res) => {
      const data = res.data.telProduct;
      setTelefonlar(data.telefonlar);
    });
  }, [id]);

  return (
    <div className="flex py-[10px] flex-col">
      <NavbarDefault />
      <div className="flex flex-wrap justify-center gap-6 p-10">
        <Carusel />
        {telefonlar.map((tel) => (
          <Link to={`/typeGetAllphones/telefonlar/${tel.id}`} key={tel.id}>
            <div className="bg-gradient-to-br from-white via-slate-100 to-blue-100 text-gray-800 rounded-2xl shadow-xl w-[270px] p-6 flex flex-col gap-4 transform hover:scale-[1.03] transition-all duration-300 ease-in-out hover:shadow-[#afb47a]">
              <img
                src={tel.img}
                alt={tel.title}
                className="w-full object-cover rounded-md mb-3"
              />
              <h1 className="text-lg font-bold text-gray-800">{tel.title}</h1>
              <p className="text-gray-600 text-sm">Narxi: {tel.price} $</p>
              <p className="text-gray-600 text-sm">Rang: {tel.color}</p>
              <p className="text-gray-600 text-sm">Xotira: {tel.xotirasi} GB</p>
            </div>
          </Link>
        ))}
      </div>
      <Section />
      <Footer />
    </div>
  );
}
