import { useEffect, useState } from "react";
import { instance } from "../../utils/axios";
import { useNavigate, useParams } from "react-router-dom";
import { Input } from "@material-tailwind/react";
import NavbarDefault from "../../components/navbar";

export default function CreateTelefon() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [xotirasi, setXotirasi] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [telTuri, setTelTuri] = useState([]);
  const [telefonlarTuriId, setTelefonlarTuriId] = useState(id || "");

  const nav = useNavigate();

  const create = (e) => {
    e.preventDefault();
    console.log({
      title,
      xotirasi,
      price,
      color,
      desc,
      img,
      telefonlarTuriId,
    });

    instance
      .post("/telefonlar", {
        title,
        xotirasi: Number(xotirasi),
        price: Number(price),
        color,
        desc,
        img,
        telefonlarTuriId: telefonlarTuriId,
      })
      .then(() => nav("/telefonlar"));
  };

  useEffect(() => {
    instance.get("/telefonlarTuri").then((res) => {
      setTelTuri(res.data.telefonlar);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="bg-blue-gray-900 w-full h-[100vh] flex">
      <NavbarDefault />
      <div className="ml-[250px]">
        <div className="pl-[40px] bg-[#050b1aef] text-white uppercase w-full flex fixed z-10 shadow-md backdrop-blur-md">
          <h1 className="pt-6 p-3 w-full font-bold text-2xl tracking-wider animate-fade-in-down">
            This is create telefon page
          </h1>
        </div>
        <div className="bg-[#f0ffee] w-[1120px] mt-[140px] h-[480px] rounded-2xl ml-[90px] m-4">
          <div className="pl-[200px] w-[1100px] pt-[35px]">
            <form
              onSubmit={create}
              className="flex mt-6 flex-col mr-[200px] gap-[10px] justify-center items-center"
            >
              <Input
                className="h-[49px]"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                label="Title"
              />
              <Input
                className="h-[49px]"
                value={xotirasi}
                onChange={(e) => setXotirasi(e.target.value)}
                type="text"
                label="Xotirasi"
              />
              <Input
                className="h-[49px]"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                label="Price"
              />
              <Input
                className="h-[49px]"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                type="text"
                label="Color"
              />
              <Input
                className="h-[49px]"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                type="text"
                label="Desc"
              />
              <Input
                className="h-[49px]"
                value={img}
                onChange={(e) => setImg(e.target.value)}
                type="text"
                label="Img URL"
              />

              <select
                value={telefonlarTuriId}
                onChange={(e) => setTelefonlarTuriId(e.target.value)}
                className="w-[300px] p-2 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option disabled value="">
                  Telefon turini tanlang
                </option>
                {telTuri.map((turi) => (
                  <option className="bg-gray-100" key={turi.id} value={turi.id}>
                    {turi.title}
                  </option>
                ))}
              </select>

              <button
                className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg px-[21px] py-[6px] text-black border-[#E7742E]"
                type="submit"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
