import { useEffect, useState } from "react";
import { instance } from "../../utils/axios";
import { Button } from "@material-tailwind/react";
import NavbarDefault from "../../components/navbar";
import { Link } from "react-router-dom";

export default function TelefonlarTuri() {
  const [turlar, setTurlar] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [refreshTrigger, setRefreshTrigger] = useState(false);

  useEffect(() => {
    instance
      .get("/telefonlarTuri")
      .then((res) => {
        setTurlar(res.data);
      })
      .catch((error) => {
        console.error("Error fetching telefonlar:", error);
      });
  }, [refreshTrigger, location]);

  const deleted = async (id) => {
    try {
      await instance.delete(`/telefonlarTuri/${id}`);
      setTurlar(turlar.filter((turlar) => turlar.id !== id));
    } catch (error) {
      console.error("Error deleting telefon turi:", error);
    }
  };

  const filteredTurlar = turlar?.telefonlar?.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-br from-blue-gray-900 via-[#1e293b] to-blue-900 min-h-screen flex">
      <NavbarDefault />
      <div className="flex flex-col ml-[250px] w-full bg-blue-gray-900 relative items-center">
        <div className="flex items-center justify-between px-10 bg-[#050b1aef] text-white uppercase fixed w-[calc(100%-250px)] z-10 shadow-md backdrop-blur-md">
          <h1 className="pt-6 ml-[17px] p-3 w-full font-bold pl-[0px] text-2xl tracking-widest">
            this is Telefonlar turi page
          </h1>
        </div>

        <input
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mt-[120px] w-[400px] px-5 py-3 rounded-full shadow-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-300 ease-in-out text-gray-700 bg-white placeholder:text-gray-400"
        />

        <div className="flex items-center justify-center flex-col gap-[20px] p-[30px] flex-wrap mt-[50px]">
          <div className="flex gap-[40px] px-[44px] flex-wrap justify-center">
            {filteredTurlar?.map((turlar) => (
              <div
                key={turlar.id}
                className="p-6 shadow-2xl bg-gradient-to-br from-white via-gray-100 to-blue-100 rounded-2xl w-[250px] hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-[#afb47a] animate-fade-in-up"
              >
                <h1 className="text-xl font-bold text-center text-gray-800 mb-4">
                  {turlar.title}
                </h1>
                <Link
                  to={`/telefonlarTuri/${turlar.id}`}
                  onClick={() => setRefreshTrigger((prev) => !prev)}
                >
                  <Button className="flex m-auto bg-gradient-to-r from-yellow-400 to-orange-500 text-black border-0 py-[10px] hover:scale-105 transition-transform duration-200 ease-in-out shadow-md">
                    update
                  </Button>
                </Link>

                <Button
                  className="flex m-auto bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-black border-0 py-[10px] mt-3 hover:scale-105 transition-transform duration-200 ease-in-out shadow-md"
                  onClick={() => deleted(turlar.id)}
                >
                  delete
                </Button>
              </div>
            ))}
          </div>
          <h1 className="mt-6 text-white text-lg font-semibold">
            Barcha mahsulotlar: {filteredTurlar?.length} ta
          </h1>
        </div>
      </div>
    </div>
  );
}
