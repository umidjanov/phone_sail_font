// import { useEffect, useState } from "react";
// import NavbarDefault from "../../components/navbar";
// import { instance } from "../../utils/axios";

// export default function Upload() {
//   const [files, setFiles] = useState([]);

//   useEffect(() => {
//     instance
//       .get("/upload")
//       .then((res) => {
//         setFiles(res.data.files);
//       })
//       .catch((error) => {
//         console.error("Error fetching upload files:", error);
//       });
//   }, []);

//   return (
//     <div className="flex bg-gradient-to-br bg-blue-gray-900 via-green-700 to-green-700 w-full min-h-screen font-sans">
//       <NavbarDefault />
//       <div className="flex flex-col gap-8 pl-[250px] w-full">
//         <div className="pl-[40px] bg-[#050b1aef] text-white uppercase w-full flex fixed z-10 shadow-md backdrop-blur-md">
//           <h1 className="pt-6 p-3 w-full font-bold text-2xl tracking-wider animate-fade-in-down">
//             This is Upload page
//           </h1>
//         </div>

//         <div className="flex items-center justify-center flex-col gap-8 p-10 mt-[100px]">
//           <div className="flex gap-8 px-8 flex-wrap justify-center">
//             {files.map((url) => (
//               <div
//                 key={url}
//                 className="p-6 shadow-xl bg-white rounded-2xl w-[320px] h-[300px] flex flex-col gap-6 pt-4 transition-transform hover:scale-105 duration-300"
//               >
//                 <h1
//                   className="text-sm break-words text-center px-2 py-2 rounded-lg bg-gradient-to-r from-lime-300 via-green-300 to-emerald-400 text-black font-semibold animate-pulse cursor-pointer"
//                   onMouseEnter={() => navigator.clipboard.writeText(url)}
//                   title="URL nusxalandi!"
//                 >
//                   {url}
//                 </h1>

//                 <img
//                   src={url}
//                   alt="upload"
//                   className="w-full h-[150px] object-cover rounded-lg shadow"
//                 />
//               </div>
//             ))}
//           </div>
//           <h1 className="mt-6 text-white text-lg font-semibold">
//             Barcha rasmlar: {files.length} ta
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// }




import { useEffect, useState } from "react";
import NavbarDefault from "../../components/navbar";
import { instance } from "../../utils/axios";

export default function Upload() {
  const [files, setFiles] = useState([]);

  const fetchFiles = () => {
    instance
      .get("/upload")
      .then((res) => {
        setFiles(res.data.files);
      })
      .catch((error) => {
        console.error("Error fetching upload files:", error);
      });
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const handleDelete = async (url) => {
    const filename = url.split("/").pop();

    try {
      await instance.delete(`/upload/${filename}`);
      setFiles((prev) => prev.filter((f) => f !== url));
    } catch (err) {
      console.error("Faylni o‘chirishda xatolik:", err);
    }
  };

  return (
    <div className="flex bg-gradient-to-br bg-blue-gray-900 via-green-700 to-green-700 w-full min-h-screen font-sans">
      <NavbarDefault />
      <div className="flex flex-col gap-8 pl-[250px] w-full">
        <div className="pl-[40px] bg-[#050b1aef] text-white uppercase w-full flex fixed z-10 shadow-md backdrop-blur-md">
          <h1 className="pt-6 p-3 w-full font-bold text-2xl tracking-wider animate-fade-in-down">
            This is Upload page
          </h1>
        </div>

        <div className="flex items-center justify-center flex-col gap-8 p-10 mt-[100px]">
          <div className="flex gap-8 px-8 flex-wrap justify-center">
            {files.map((url) => (
              <div
                key={url}
                className="p-6 shadow-lg bg-white rounded-2xl w-[320px] h-[450px] flex flex-col gap-6 pt-4 transition-transform hover:scale-105 duration-300 hover:shadow-[#ffdddd9d]"
              >
                <h1
                  className="text-sm break-words text-center px-2 py-2 rounded-lg bg-gradient-to-r from-[#ff4fd9] to-[#00eaff] to-emerald-300 text-black font-semibold animate-pulse cursor-pointer"
                  onMouseEnter={() => navigator.clipboard.writeText(url)}
                  title="URL nusxalandi!"
                >
                  {url}
                </h1>

                <img
                  src={url}
                  alt="upload"
                  className="w-full object-cover rounded-lg shadow"
                />

                <button
                  onClick={() => handleDelete(url)}
                  className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-700 transition"
                >
                  O‘chirish
                </button>
              </div>
            ))}
          </div>
          <h1 className="mt-6 text-white text-lg font-semibold">
            Barcha rasmlar: {files.length} ta
          </h1>
        </div>
      </div>
    </div>
  );
}
