import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { instance } from "../../admin/utils/axios";
import NavbarDefault from "../components/navbar";
import { Footer } from "../components/footer";
import Section from "../components/section";
import AOS from "aos";
import "aos/dist/aos.css";
import Accessors from "../components/category";

export default function userHome() {
  const [turlar, setTurlar] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });

    instance
      .get("/telefonlarTuri")
      .then((res) => {
        setTurlar(res.data);
      })
      .catch((error) => {
        console.error("Error fetching telefonlar:", error);
      });
  }, []);

  const filteredTurlar = turlar?.telefonlar?.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex justify-center flex-col items-center py-[10px] gap-[40px]">
      <NavbarDefault />

      <header
        className="container flex w-full justify-between flex-col sm:flex-row items-center text-center sm:text-left"
        data-aos="fade-down"
      >
        <Link>
          <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">
            iPhone
          </h1>
        </Link>
        <Link>
          <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Samsung
          </h1>
        </Link>
        <Link>
          <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Redmi
          </h1>
        </Link>
        <Link>
          <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Nokia
          </h1>
        </Link>
        <Link>
          <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Poco
          </h1>
        </Link>
        <Link>
          <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">
            Huawei
          </h1>
        </Link>
        <div className="mt-4 sm:mt-0">
          <p className="text-lg sm:text-xl font-medium text-gray-800 cursor-pointer">
            Designed to be loved.
          </p>
        </div>
      </header>

      <video
        className="w-[1320px] shadow-xl transition-shadow duration-300 ease-in-out rounded-2xl border"
        src="videos/iphone video.mp4"
        muted
        autoPlay
        controls
        playsInline
        loop
        preload="auto"
        role="img"
        aria-label="iPhone 16 showing front, colors, and animation."
        data-aos="zoom-in"
      ></video>

      <div className="flex items-center justify-center flex-col gap-[20px] p-[30px] flex-wrap mt-[50px]">
        <input
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-[40px] max-w-[400px] w-full px-5 py-3 rounded-full shadow-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300 text-gray-700 bg-white"
          data-aos="fade-up"
        />
        <div className="flex gap-[40px] lg:px-[44px] flex-wrap justify-center">
          {filteredTurlar?.map((turlar) => (
            <Link to={`/typeGetAllPhones/${turlar.id}`} key={turlar.id}>
              <div
                className="cursor-pointer p-6 shadow-2xl bg-gradient-to-br from-white via-gray-100 to-blue-100 rounded-2xl w-[250px] hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-[#afb47a]"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h1 className="text-xl font-bold text-center text-gray-800 mb-4">
                  {turlar.title}
                </h1>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div data-aos="fade-up">
        <Accessors />
      </div>
      <Footer />
    </div>
  );
}
