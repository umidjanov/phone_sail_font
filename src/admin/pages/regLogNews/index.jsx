import { useEffect, useState } from "react";
import { instance } from "../../utils/axios";
import NavbarDefault from "../../components/navbar";

export default function NewsRegLog() {
  const [stats, setStats] = useState({ registerCount: 0, loginCount: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function count() {
      setLoading(true);
      setError("");
      try {
        const res = await instance.get("/count");
        setStats({
          registerCount: res.data.registerCount,
          loginCount: res.data.loginCount,
        });
      } catch (err) {
        setError(
          err.response?.data?.message ||
            "Statistikani olishda xatolik yuz berdi"
        );
      } finally {
        setLoading(false);
      }
    }

    count();
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-gray-900 via-blue-900 to-blue-800 min-h-screen flex font-sans">
      <NavbarDefault />
      <div className="flex flex-col ml-[250px] w-full">
        <div className="pl-[40px] bg-[#050b1aef] text-white uppercase w-full flex fixed z-10 shadow-md backdrop-blur-md">
          <h1 className="pt-6 p-3 w-full font-bold text-2xl tracking-wider animate-fade-in-down">
            This is reg log news page
          </h1>
        </div>
        <div className="flex w-full h-screen items-center justify-center bg-blue-gray-900">
          <div className="flex flex-col gap-6 w-full max-w-4xl text-white justify-center animate-fade-in-up transition-all duration-500 ease-out">
            <h1 className="text-4xl font-extrabold mb-6 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse">
              Foydalanuvchilar Statistikasi
            </h1>

            {loading && (
              <p className="text-center text-lg animate-pulse text-blue-300">
                Yuklanmoqda...
              </p>
            )}
            {error && (
              <p className="text-center text-red-500 text-lg animate-shake">
                {error}
              </p>
            )}

            {!loading && !error && (
              <div className="text-2xl space-y-4 bg-[#0f172a] rounded-2xl p-8 shadow-xl border border-blue-800 hover:scale-[1.01] transition-all duration-300">
                <p className="transition-transform hover:translate-x-1">
                  📋 Ro'yxatdan o'tganlar soni:{" "}
                  <span className="font-bold text-green-400 animate-count">
                    {stats.registerCount}
                  </span>
                </p>
                <p className="transition-transform hover:translate-x-1">
                  🔐 Login qilganlar soni:{" "}
                  <span className="font-bold text-yellow-400 animate-count">
                    {stats.loginCount}
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
