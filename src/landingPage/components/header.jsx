import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import { instance } from "../../admin/utils/axios";

export default function Header() {
  const [turlar, setTurlar] = useState([]);

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

  return (
    <div className="flex flex-wrap justify-center gap-6 sm:gap-10 lg:gap-[112px] p-4 text-center mt-[80px]">
      <Link to={`/allPhones`} key="iphone">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight hover:text-blue-600 transition">
          iPhone
        </h1>
      </Link>

      <Link to={`/allPhones`} key="samsung">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight hover:text-blue-600 transition">
          Samsung
        </h1>
      </Link>

      <Link to={`/allPhones`} key="redmi">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight hover:text-blue-600 transition">
          Redmi
        </h1>
      </Link>

      <Link to={`/allPhones`} key="nokia">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight hover:text-blue-600 transition">
          Nokia
        </h1>
      </Link>

      <Link to={`/allPhones`} key="poco">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight hover:text-blue-600 transition">
          Poco
        </h1>
      </Link>

      <Link to={`/allPhones`} key="huawei">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight hover:text-blue-600 transition">
          Huawei
        </h1>
      </Link>

      <div className="w-full sm:w-auto mt-4 sm:mt-0">
        <p className="text-base sm:text-lg md:text-xl font-medium text-gray-800 cursor-pointer">
          Designed to be loved.
        </p>
      </div>
    </div>
  );
}
