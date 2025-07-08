// import { useState } from "react";
// import { instance } from "../../utils/axios";
// import NavbarDefault from "../../components/navbar";

// export default function Home() {
//   const [registerData, setRegisterData] = useState({
//     username: "",
//     password: "",
//   });
//   const [loginData, setLoginData] = useState({ username: "", password: "" });
//   const [loadingRegister, setLoadingRegister] = useState(false);
//   const [loadingLogin, setLoadingLogin] = useState(false);

//   const handleRegisterChange = (e) => {
//     setRegisterData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleRegisterSubmit = async (e) => {
//     e.preventDefault();
//     if (!registerData.username || !registerData.password) {
//       alert("Username va password talab qilinadi");
//       return;
//     }
//     setLoadingRegister(true);
//     try {
//       const res = await instance.post("/register", registerData);
//       alert(res.data.message);
//       setRegisterData({ username: "", password: "" });
//     } catch (error) {
//       alert(
//         error.response?.data?.message ||
//           "Xatolik yuz berdi, qaytadan urinib ko‘ring"
//       );
//     } finally {
//       setLoadingRegister(false);
//     }
//   };

//   const handleLoginChange = (e) => {
//     setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();
//     if (!loginData.username || !loginData.password) {
//       alert("Username va password talab qilinadi");
//       return;
//     }
//     setLoadingLogin(true);
//     try {
//       const res = await instance.post("/login", loginData);
//       alert(res.data.message + "\nToken: " + res.data.token);
//       setLoginData({ username: "", password: "" });
//     } catch (error) {
//       alert(
//         error.response?.data?.message ||
//           "Xatolik yuz berdi, qaytadan urinib ko‘ring"
//       );
//     } finally {
//       setLoadingLogin(false);
//     }
//   };

//   return (
//     <div className="flex bg-blue-gray-900 w-[100%] h-[100vh]">
//       <NavbarDefault />
//       <div className="flex flex-col gap-[20px] pl-[250px] w-full">
//         <div className="pl-[40px] bg-[#050b1aef] text-white uppercase w-[1286px] flex fixed">
//           <h1 className="pt-6 border-1 p-3 w-[1246px] font-bold">
//             This is home page
//           </h1>
//         </div>

//         <div className="flex gap-10 items-start justify-center mt-[100px] px-10 w-full">
//           {/* Register form */}
//           <div className="max-w-md w-full p-6 border rounded shadow-lg bg-white">
//             <h2 className="text-2xl font-bold mb-6 text-center">
//               Ro'yxatdan o'tish
//             </h2>
//             <form
//               onSubmit={handleRegisterSubmit}
//               className="flex flex-col gap-4"
//             >
//               <input
//                 name="username"
//                 value={registerData.username}
//                 onChange={handleRegisterChange}
//                 placeholder="Username"
//                 className="border px-3 py-2 rounded"
//                 disabled={loadingRegister}
//                 autoComplete="username"
//                 required
//               />
//               <input
//                 type="password"
//                 name="password"
//                 value={registerData.password}
//                 onChange={handleRegisterChange}
//                 placeholder="Password"
//                 className="border px-3 py-2 rounded"
//                 disabled={loadingRegister}
//                 autoComplete="new-password"
//                 required
//               />
//               <button
//                 type="submit"
//                 disabled={loadingRegister}
//                 className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
//               >
//                 {loadingRegister ? "Yozilmoqda..." : "Ro'yxatdan o'tish"}
//               </button>
//             </form>
//           </div>

//           {/* Login form */}
//           <div className="max-w-md w-full p-6 border rounded shadow-lg bg-white">
//             <h2 className="text-2xl font-bold mb-6 text-center">Kirish</h2>
//             <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
//               <input
//                 name="username"
//                 value={loginData.username}
//                 onChange={handleLoginChange}
//                 placeholder="Username"
//                 className="border px-3 py-2 rounded"
//                 disabled={loadingLogin}
//                 autoComplete="username"
//                 required
//               />
//               <input
//                 type="password"
//                 name="password"
//                 value={loginData.password}
//                 onChange={handleLoginChange}
//                 placeholder="Password"
//                 className="border px-3 py-2 rounded"
//                 disabled={loadingLogin}
//                 autoComplete="current-password"
//                 required
//               />
//               <button
//                 type="submit"
//                 disabled={loadingLogin}
//                 className="bg-green-600 text-white py-2 rounded hover:bg-green-700 disabled:opacity-50"
//               >
//                 {loadingLogin ? "Kirish..." : "Kirish"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { instance } from "../../utils/axios";
import NavbarDefault from "../../components/navbar";

export default function Home() {
  const [registerData, setRegisterData] = useState({
    username: "",
    password: "",
  });
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [loadingRegister, setLoadingRegister] = useState(false);
  const [loadingLogin, setLoadingLogin] = useState(false);

  const handleRegisterChange = (e) => {
    setRegisterData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (!registerData.username || !registerData.password) {
      alert("Username va password talab qilinadi");
      return;
    }
    setLoadingRegister(true);
    try {
      const res = await instance.post("/register", registerData);
      const token = res.data.token;
      if (token) {
        localStorage.setItem("token", token);
      }
      alert(res.data.message);
      setRegisterData({ username: "", password: "" });
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Xatolik yuz berdi, qaytadan urinib ko‘ring"
      );
    } finally {
      setLoadingRegister(false);
    }
  };

  const handleLoginChange = (e) => {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!loginData.username || !loginData.password) {
      alert("Username va password talab qilinadi");
      return;
    }
    setLoadingLogin(true);
    try {
      const res = await instance.post("/login", loginData);
      const token = res.data.token;
      if (token) {
        localStorage.setItem("token", token);
      }
      alert(res.data.message);
      setLoginData({ username: "", password: "" });
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Xatolik yuz berdi, qaytadan urinib ko‘ring"
      );
    } finally {
      setLoadingLogin(false);
    }
  };

  return (
    <div className="flex bg-blue-gray-900 w-[100%] h-[100vh]">
      <NavbarDefault />
      <div className="flex flex-col gap-[20px] pl-[250px] w-full">
       <div className="pl-[40px] bg-[#050b1aef] text-white uppercase w-full flex fixed z-10 shadow-md backdrop-blur-md">
          <h1 className="pt-6 p-3 w-full font-bold text-2xl tracking-wider animate-fade-in-down">
            This is home page
          </h1>
        </div>

        <div className="flex gap-10 items-start justify-center mt-[100px] px-10 w-full">
          {/* Register form */}
          <div className="max-w-md w-full p-6 border rounded shadow-lg bg-white">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Ro'yxatdan o'tish
            </h2>
            <form
              onSubmit={handleRegisterSubmit}
              className="flex flex-col gap-4"
            >
              <input
                name="username"
                value={registerData.username}
                onChange={handleRegisterChange}
                placeholder="Username"
                className="border px-3 py-2 rounded"
                disabled={loadingRegister}
                autoComplete="username"
                required
              />
              <input
                type="password"
                name="password"
                value={registerData.password}
                onChange={handleRegisterChange}
                placeholder="Password"
                className="border px-3 py-2 rounded"
                disabled={loadingRegister}
                autoComplete="new-password"
                required
              />
              <button
                type="submit"
                disabled={loadingRegister}
                className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
              >
                {loadingRegister ? "Yozilmoqda..." : "Ro'yxatdan o'tish"}
              </button>
            </form>
          </div>

          {/* Login form */}
          <div className="max-w-md w-full p-6 border rounded shadow-lg bg-white">
            <h2 className="text-2xl font-bold mb-6 text-center">Kirish</h2>
            <form onSubmit={handleLoginSubmit} className="flex flex-col gap-4">
              <input
                name="username"
                value={loginData.username}
                onChange={handleLoginChange}
                placeholder="Username"
                className="border px-3 py-2 rounded"
                disabled={loadingLogin}
                autoComplete="username"
                required
              />
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                placeholder="Password"
                className="border px-3 py-2 rounded"
                disabled={loadingLogin}
                autoComplete="current-password"
                required
              />
              <button
                type="submit"
                disabled={loadingLogin}
                className="bg-green-600 text-white py-2 rounded hover:bg-green-700 disabled:opacity-50"
              >
                {loadingLogin ? "Kirish..." : "Kirish"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
