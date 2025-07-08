import { useEffect, useState } from "react";
import { instance } from "../../utils/axios";
import NavbarDefault from "../../components/navbar";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Telefonlar() {
  const [telefonlar, setTelefonlar] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    instance
      .get("/telefonlar")
      .then((res) => {
        setTelefonlar(res.data);
      })
      .catch((error) => {
        console.error("Error fetching telefonlar:", error);
      });
  }, []);

  const deleted = async (id) => {
    try {
      await instance.delete(`/telefonlar/${id}`);
      setTelefonlar(telefonlar.filter((tel) => tel.id !== id));
    } catch (error) {
      console.error("Error deleting telefon:", error);
    }
  };

  const filteredTelefonlar = telefonlar.filter((tel) =>
    tel.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-br bg-blue-gray-900 via-green-300 to-green-300 min-h-screen flex font-sans">
      <NavbarDefault />
      <div className="flex flex-col ml-[250px] w-full">
        <div className="pl-[40px] bg-[#050b1aef] text-white uppercase w-full flex fixed z-10 shadow-md backdrop-blur-md">
          <h1 className="pt-6 p-3 w-full font-bold text-2xl tracking-wider animate-fade-in-down">
            This is telefonlar page
          </h1>
        </div>

        <div className="flex items-center justify-center flex-col gap-8 p-10 mt-[80px] w-full">
          <input
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-[400px] px-5 py-3 rounded-full shadow-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300 ease-in-out text-gray-700 bg-white placeholder:text-gray-400"
          />

          <div className="flex gap-8 flex-wrap justify-center animate-fade-in-up transition-all duration-500 ease-out pt-[20px]">
            {filteredTelefonlar.map((tel) => (
              <div
                key={tel.id}
                className="bg-gradient-to-br from-white via-slate-100 to-blue-100 text-gray-800 rounded-2xl shadow-xl w-[270px] p-6 flex flex-col gap-4 transform hover:scale-[1.03] transition-all duration-300 ease-in-out hover:shadow-[#afb47a]"
              >
                <img
                  src={tel.img}
                  alt={tel.title}
                  className="w-[220px] mx-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
                />
                <h1 className="text-xl font-bold text-center">{tel.title}</h1>
                <div className="flex flex-col gap-4 items-start">
                  <p className="text-sm text-center text-gray-700">
                    💵 Narxi: {tel.price} $
                  </p>
                  <p className="text-sm text-center text-gray-700">
                    🎨 Rang: {tel.color}
                  </p>
                  <p className="text-sm text-center text-gray-700">
                    💾 Xotirasi: {tel.xotirasi} G/B
                  </p>
                  <p className="text-sm text-center italic text-gray-600">
                    {tel.desc}
                  </p>
                  <p className="text-sm text-center font-semibold">
                    📱 Turi:{" "}
                    <span className="text-blue-600">
                      {tel.telefon_turlari?.title}
                    </span>
                  </p>
                </div>

                <div className="flex gap-2 mt-3">
                  <Link to={`/news/update/${tel?.id}`} className="w-1/2">
                    <Button className="w-full bg-gradient-to-r from-[#978c3d] to-[#2f6c30] text-white font-semibold py-2 hover:scale-105 transition-transform duration-200">
                      update
                    </Button>
                  </Link>

                  <Button
                    className="w-1/2 bg-gradient-to-r from-[#c25d5d] to-[#bd2e2e] text-[white] font-semibold py-2 hover:scale-105 transition-transform duration-200"
                    onClick={() => deleted(tel?.id)}
                  >
                    delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-white text-lg font-semibold">
            Umumiy mahsulotlar soni: {filteredTelefonlar.length} ta
          </div>
        </div>
      </div>
    </div>
  );
}
