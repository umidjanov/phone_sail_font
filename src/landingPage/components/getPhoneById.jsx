import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { instance } from "../../admin/utils/axios";
import { Footer } from "../components/footer";
import NavbarDefault from "../components/navbar";

export default function GetPhoneById() {
  const { id } = useParams();
  const [telefon, setTelefon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    instance
      .get(`/telefonlar/${id}`)
      .then((res) => {
        console.log("Telefon ma'lumoti:", res.data);
        setTelefon(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Xatolik:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <NavbarDefault />
        <p className="text-lg text-gray-600 mt-20">
          Ma'lumotlar yuklanmoqda...
        </p>
        <Footer />
      </div>
    );
  }

  if (!telefon) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <NavbarDefault />
        <p className="text-lg text-red-500 mt-20">Telefon topilmadi</p>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex py-[10px] flex-col items-center">
      <NavbarDefault />
      <div className="text-gray-800 rounded-2xl p-6 mt-10 flex gap-4 transition-all items-center">
        <div className="flex flex-col gap-[20px]">
          <h1 className="text-xl font-bold text-center">{telefon.title}</h1>
          <img
            src={telefon.img}
            alt={telefon.title}
            className="w-[300px] object-cover rounded-md mb-3"
          />
        </div>
        <p className="text-gray-700 text-sm">Narxi: {telefon.price} $</p>
        <p className="text-gray-700 text-sm">Rang: {telefon.color}</p>
        <p className="text-gray-700 text-sm">Xotira: {telefon.xotirasi} GB</p>
        <p className="text-gray-600 text-sm mt-2">{telefon.desc}</p>
      </div>
      <Footer />
    </div>
  );
}
